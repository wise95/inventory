<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PurchaseOrder;
use App\Models\SalesOrder;
use DB;
use DateTime;
use Carbon\Carbon;
class DashboardController extends Controller
{
    public function getPurchaseOrderCount(Request $request){
      return  PurchaseOrder::whereBetween(DB::raw('date(created_at)'), [$request->from, $request->to])->count();

    }


    public function getPurchaseOrderTotal(Request $request){

      return  PurchaseOrder::whereBetween(DB::raw('date(created_at)'), [$request->from, $request->to])->sum('total');

    }


    public function getSalesOrderCount(Request $request){
      return  SalesOrder::whereBetween(DB::raw('date(created_at)'), [$request->from, $request->to])->count();

    }

    public function getSalesOrderTotal(Request $request){

      return  SalesOrder::whereBetween(DB::raw('date(created_at)'), [$request->from, $request->to])->sum('total');

    }

    

    public function getPurchaseOrderData(Request $request){

      return  PurchaseOrder::selectRaw('round(sum(total),2) as total_sum ,date(created_at) as created')->whereBetween(DB::raw('date(created_at)'), [$request->from, $request->to])->groupBy(DB::raw('date(created_at)'))->get();

    }

    public function getAllSalesOrderData(){

      $rows = SalesOrder::selectRaw('round(sum(total),2) as total_sum ,date(created_at) as created')->groupBy(DB::raw('date(created_at)'))->get();
      $data=array();

      $loop_last_date = date('Y-m-d', strtotime($rows[$rows->count()-1]->created .' +1 day'));
      $next_date = $rows[0]->created ;
   

      while($next_date<$loop_last_date){
    
        $isFound=false;
        foreach ($rows as $row) {
          if($row->created==$next_date){
            $dtime = Carbon::parse($next_date);
            $timestamp = $dtime->timestamp;
            array_push($data,array($timestamp*1000,$row->total_sum));
            $isFound=true;

          } 

        }

        if($isFound==false){
          $dtime = Carbon::parse($next_date);
          $timestamp = $dtime->timestamp;
          array_push($data,array($timestamp*1000,0));
        }

        $next_date = date('Y-m-d', strtotime($next_date  .' +1 day'));
   
      }

   



      return  $data;
    }

    public function getProfit(){
      
    }




}
