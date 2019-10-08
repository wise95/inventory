<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\Invoice as InvoiceResource;
use App\Models\Invoice;
use App\Models\Setting;
use App\Models\InvoiceProduct;
use App\Models\SalesOrderProduct;
use PDF;
use View;
use DB;

class InvoiceController extends Controller
{
     public function index(){
              //return InvoiceResource::collection(Invoice::paginate(15));
              

              $invoices=DB::table('invoices')
              ->join('sales_orders','sales_orders.id',"invoices.sales_order_id")
              ->join('customers','customers.id',"sales_orders.customer_id")
              ->leftjoin('payments','payments.invoice_id',"invoices.id")
              ->select('invoices.id','invoices.invnumber','invoices.status',
              'invoices.total',
              'customers.firstname','customers.lastname',
              'sales_orders.sonumber',
               DB::raw('DATE_FORMAT(invoices.created_at,"%d %M %Y") as invoice_date'),
               DB::raw('DATE_FORMAT(invoices.due_date,"%d %M %Y") as invoice_due_date'),
             
               DB::raw("(SELECT SUM(payments.amount) FROM payments
                        WHERE invoices.id = payments.invoice_id
                        GROUP BY payments.invoice_id) as due_amount"))
               
             
              ->orderBy("invoices.created_at", "desc")
              ->paginate(15);

             // return InvoiceGridResource::collection(collect($invoices->toArray()));

             $col= collect($invoices->toArray());

             
             $links=['first'=>$col->get('first_page_url'),'last'=>$col->get('last_page_url'),'prev'=>$col->get('prev_page_url'),'next'=>$col->get('next_page_url')];
             $meta=[
                "current_page"=>$col->get('current_page'),
                "from"=>$col->get('from'),
                "last_page"=> $col->get('last_page'),
                "path"=> $col->get('path'),
                "per_page"=> $col->get('per_page'),
                "to"=> $col->get('to'),
                "total"=> $col->get('total')
             ];
             $col->put("links",$links);
             $col->put("meta",$meta);
             return response()->json($col);

         
     }

     public function get($id){
        return new InvoiceResource(Invoice::find($id));
     }

     public function getBalance($id){
        $invoice= Invoice::find($id);
        $paid_amount = DB::table('payments')
                ->where('invoice_id', $id)
                ->sum('amount');

        return   $invoice->total - $paid_amount;
     }


     public function generatePDF($id){

        $invoice=Invoice::find($id);
        $setting=Setting::find(1);
        $data = ['title' => 'Welcome to HDTuto.com'];
        //$pdf = PDF::loadView('product.test', compact('invoice'));
        $pdf = PDF::loadView('product.test', ['invoice' => $invoice,'setting'=>$setting]);
        
        return $pdf->download('Invoice_'.$invoice->id.''.'pdf');

        // return View::make('product.test')->with('invoice', $invoice);

     }


     public function getNextInvoiceNumber(){
     	 $next_id= Invoice::max('id')+1;
         $invoiceNumber= "INV-".str_pad($next_id,8,"0",STR_PAD_LEFT);
        return $invoiceNumber;
     }

     public function create(Request $request){

        $inv= new Invoice();
        $inv->invnumber= $request->invnumber;
        $inv->sales_order_id= $request->salesorder_id;
       // $inv->due_date=   date('d-M-Y', strtotime($this->$request->due_date));

        $inv->due_date= date('Y-m-d', strtotime($request->due_date));
        $inv->total=$request->total;
        $inv->due_amount=$request->total;


      /* $inv->order_date = substr($request->order_date,0,10);
        $inv->shipment_date = substr($request->shipment_date,0,10);
        $inv->status= $request->status;
        $inv->discount= $request->discount;
        $inv->discount_type= $request->discount_type;
        $inv->tax_id= $request->tax_id;
        $inv->tax_code= $request->tax_code;
        $inv->tax_percentage= $request->tax_percentage; */

        $inv->save();

       
        foreach ($request->products as $key => $value) {
        	
             $invoiceProduct = new InvoiceProduct();
             $invoiceProduct->sales_order_id= $request->salesorder_id;
             $invoiceProduct->product_id=$value['details']['id'];
             $invoiceProduct->unit_price=$value['unit_price'];
             $invoiceProduct->qty=$value['qty'];
             $invoiceProduct->invoiced_qty=$value['qtynew'];
             $invoiceProduct->invoice_id=$inv->id;
             $invoiceProduct->save();


           
           /*  $sales_order_product=  DB::table('sales_order_products')
             ->where('sales_order_id', $request->salesorder_id)
             ->where('product_id',value['details']['id'])
             ->get(); */

             SalesOrderProduct::where('sales_order_id', $request->salesorder_id)
                ->where('product_id',$value['details']['id'])
                ->update(['invoiced_qty' => DB::raw('invoiced_qty +'.$value['qtynew'] ) ]);

               

            

        } 


        // update the sales_order_products table 


}


}
