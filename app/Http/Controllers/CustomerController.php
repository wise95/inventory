<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Customer as CustomerResource;
use App\Models\Customer;
use App\Http\Resources\Invoice as InvoiceResource;
use App\Models\Invoice;
use App\Models\Payment;
use App\Models\SalesOrder;
use DB;
use App\Http\Resources\SalesOrder as SalesOrderResource;

class CustomerController extends Controller
{
    public function all(){
        header('Access-Control-Allow-Origin: *');
        return CustomerResource::collection(Customer::paginate(20));
    }


    public function create(Request $request){

        $customer = new Customer();
        $customer->firstname= $request->firstname;
        $customer->lastname= $request->lastname;
        $customer->email= $request->email;
        $customer->phone= $request->phone;
        $customer->save();

	}

	public function get($id){
 
 		return new CustomerResource(Customer::find($id));

    }

    public function getInvoices($id){
        
         $invoices=DB::table('invoices')
                   ->join('sales_orders','sales_orders.id',"invoices.sales_order_id")
                   ->where('sales_orders.customer_id',$id)
                   ->select('invoices.id','invnumber','sales_orders.sonumber','invoices.status',DB::raw("DATE_FORMAT(invoices.created_at, '%d-%b-%Y') as created")
                     ,'invoices.total',DB::raw('((invoices.total-paid_amount)) as due_amount')
                     )
                   ->get();
          return Invoice::hydrate($invoices->toArray());
     }

    public function getPayments($id){
           

         $payments=DB::table('payments')
                   ->join('sales_orders','sales_orders.id',"payments.salesorder_id")
                   ->where('sales_orders.customer_id',$id)
                   ->select('payments.id','paymentno','referencenumber','paymentmethod',DB::raw("DATE_FORMAT(payments.created_at, '%d-%b-%Y') as created")
                     ,'payments.amount')
                     
                   ->get();
                    return Payment::hydrate($payments->toArray());

    }

    public function getSalesOrders($id){

           return SalesOrderResource::collection(SalesOrder::where('customer_id', $id)->get());
    }

    

    public function update(Request $request){
        $customer=Customer::find($request->id);
        $customer->firstname= $request->firstname;
        $customer->lastname= $request->lastname;
        $customer->email= $request->email;
        $customer->phone= $request->phone;
        $customer->bill_address= $request->bill_address;
        $customer->bill_city= $request->bill_city;
        $customer->bill_state= $request->bill_state;
        $customer->bill_zip= $request->bill_zip;
        $customer->ship_address= $request->ship_address;
        $customer->ship_city= $request->ship_city;
        $customer->ship_state= $request->ship_state;
        $customer->ship_zip= $request->ship_zip;


        $customer->save();

        return  $request->id;
        

    }
}