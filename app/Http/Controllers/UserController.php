<?php
namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth; 


class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        return view('auth.index');
    }

    public function logout(Request $request){

        /*Auth::user()->tokens->each(function($token,$key){
            $token->delete();
        }); */

        if(Auth::check()){
            Auth::user()->tokens->each(function($token,$key){
                $token->delete();
            }); 
            return  response()->json("Token Deleted");
        }else{
            return  response()->json("No Autenticated User ");
        }

       
    }

    public function login(Request $request){

        try{
            $response = (new \GuzzleHttp\Client)->post('/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => 3, // Replace with Client ID
                    'client_secret' => '2zrX1VbnTnHd6M1rjGbe4VzcUAt8CtLWqpTEoCAc', // Replace with client secret
                    'username' => $request->username,
                    'password' => $request->password,
                ]
            ]);
    
           
            return $response->getBody();
        }catch(\GuzzleHttp\Exception\BadResponseException $e){


            return response()->json("Somethng went wrong on server ",$e->getCode());

        }
    }

    public function login2(){ 


        
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            return response()->json(['success' => $success], 200); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }

    
    


    

    
}