<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SalesOrder;
use App\Models\SalesOrderProduct;
use App\Models\Payment;
use App\Models\Product;
use App\Models\Setting;
use PDF;
use DB;
use App\Http\Resources\SalesOrder as SalesOrderResource;
use App\Http\Resources\Invoice as InvoiceResource;
use App\Http\Resources\Payment as PaymentResource;

class SalesOrderController extends Controller
{
    public function all(){
         header('Access-Control-Allow-Origin: *');
        return SalesOrderResource::collection(SalesOrder::orderBy("created_at", "desc")->paginate(15));
    }

    public function get($id){
        return new SalesOrderResource(SalesOrder::find($id));
    }


    public function getPayments(Request $request){
        // get payments by sales_order
           return PaymentResource::collection(Payment::where('salesorder_id', $request->id)->get());
    }

    

    public function getInvoices(){
       return InvoiceResource::collection(Invoice::all());
    }


    public function getNextSalesOrderNumber(){

        $next_id= SalesOrder::max('id')+1;
        $sonumber= "SO-".str_pad($next_id,8,"0",STR_PAD_LEFT);
        return $sonumber;

    }


    public function createInvoice(Request $request){
        // get sales order details to create the invoice
        $sales_orders=DB::table('sales_orders')
        ->where('sales_orders.id', $request->id)
        ->join('sales_orders','sales_orders.id',"invoices.sales_order_id")
        ->get();
        return response()->json($sales_orders);
    }

    public function create(Request $request){

        $so= new SalesOrder();
        $so->sonumber= $request->sonumber;
        $so->customer_id= $request->customer_id;

       

        $so->order_date = substr($request->order_date,0,10);
        $so->shipment_date = substr($request->shipment_date,0,10);
        $so->status= $request->status;
        $so->discount= $request->discount;
        $so->discount_type= $request->discount_type;
        $so->tax_id= $request->tax_id;
        $so->tax_code= $request->tax_code;
        $so->tax_percentage= $request->tax_percentage;
        $so->total=$request->total;


        $so->save();

       
        foreach ($request->products as $key => $value) {
        	
             $salesOrderProduct = new SalesOrderProduct();
             $salesOrderProduct->sales_order_id= $so->id;
             $salesOrderProduct->product_id=$value['id'];
             $salesOrderProduct->unit_price=$value['productprice']['purchase_price'];
             $salesOrderProduct->qty=$value['qty'];
             $salesOrderProduct->save();

           

           // update qty in product table
            $product= Product::find($value['id']);
            $product->qty=$product->qty-$value['qty'];
            $product->save();

        } 



    	
    }

    public function generatePDF($id){

        $salesorder=SalesOrder::find($id);
        $setting=Setting::find(1);
        
        //$pdf = PDF::loadView('product.test', compact('invoice'));
        $pdf = PDF::loadView('pdf.salesorder', ['salesorder' => $salesorder,'setting'=>$setting]);
        
        return $pdf->download('SalesOrder'.$salesorder->id.''.'pdf');

        // return View::make('product.test')->with('invoice', $invoice);

     }

}
