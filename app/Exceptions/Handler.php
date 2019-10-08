<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use JWTAuth;

use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\TokenBlacklistedException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {

     

        if ($exception instanceof \Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException) {

            $preException = $exception->getPrevious();

            if ($preException instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) { 

                   // you can refresh the token here

                   $token = JWTAuth::getToken();
                   $token = JWTAuth::refresh($token);

                    return response()->json(['error' => 'TOKEN_EXPIRED','token'=>$token],401);  
            }else if ($preException instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                    return response()->json(['error' => 'TOKEN_INVALID']);
            }else if ($preException instanceof \Tymon\JWTAuth\Exceptions\TokenBlacklistedException) {
                    return response()->json(['error' => 'TOKEN_BLACKLISTED']);   
            }

            if ($exception->getMessage() === 'Token not provided') {
                    return response()->json(['error' => 'Token not provided']);
            }

            if ($exception->getMessage() === 'Wrong number of segments') {
                return response()->json(['error' => 'Token not provided']);
            }

            


        }

        if ($exception instanceof TokenBlacklistedException) {
            return response()->json(['error' => 'TOKEN_BLACKLISTED']);   
        }




        //return parent::render($request, $e);
        return parent::render($request, $exception);
    }
}
