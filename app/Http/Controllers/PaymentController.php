<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Payment as PaymentResource;
use App\Models\Payment;
use App\Models\Invoice;
use App\Models\Setting;
use App\Models\BillPayment;
use DB;

use PDF;

class PaymentController extends Controller
{
    public function all(){
        header('Access-Control-Allow-Origin: *');
        return PaymentResource::collection(Payment::paginate(15));
    }


    public function create(Request $request){

        $payment = new Payment();
        $payment->paymentno= "P0001";
        $payment->invoice_id= $request->invoice_id;
        $payment->referencenumber= $request->reference;
        $payment->paymentmethod= $request->paymentmethod;
        $payment->amount= $request->amount;
        $payment->paymentno=$request->paymentnumber;
        $payment->salesorder_id=$request->salesorder_id;
        $payment->save();

        // update paid amount in invoice

        $invoice =Invoice::find($request->invoice_id);
        $invoice->paid_amount=$invoice->paid_amount + $request->amount;

        // update the status
        
        if (($invoice->total) > ($invoice->paid_amount) ){
            $invoice->status="Partially Paid";
        }
        
        if ( ($invoice->total) <= ($invoice->paid_amount) ){
            $invoice->status="Fully Paid";
        }



        $invoice->save();



	}

	public function get($id){
 
 		return new PaymentResource(Payment::find($id));

    }

    public function delete($id)
    {
        $payment =BillPayment::find($id);
        if($payment==null){
           return response()->json([ 'type'=>'warn', 'title'=>"Unable to Delete Payment Record","message"=>$id]);
        }else{
            $payment->delete();
            return response()->json([ 'type'=>'success', 'title'=>"Payment Record Deleted Successfully ","message"=>""]);

        }

       
    }

    public function getNextPaymentNumber(){
         $next_id= Payment::max('id')+1;
         $paymentNumber= "PAY-".str_pad($next_id,8,"0",STR_PAD_LEFT);
        return $paymentNumber;
    }

    public function generatePDF($id)
    {



        $data = ['title' => 'Welcome to HDTuto.com'];

        $pdf = PDF::loadView('product.test', $data);

  

        return $pdf->download('itsolutionstuff.pdf');

    }

    public function generateInvoicePaymentPDF($id){

     
        $setting=Setting::find(1);

        $payment=DB::table('payments')
        ->join('invoices','invoices.id',"payments.invoice_id")
        ->where('payments.id',$id)
        ->join('sales_orders','sales_orders.id',"invoices.sales_order_id")
        ->join('customers','customers.id',"sales_orders.customer_id")
        ->select('payments.paymentno','customers.firstname','customers.lastname','customers.bill_address',
        'customers.bill_city','customers.bill_state','customers.bill_zip','customers.bill_country','customers.phone',
        'payments.amount as paid_amount','invoices.total','invoices.invnumber',
         DB::raw('DATE_FORMAT(invoices.created_at,"%d %M %Y") as invoice_date')
        )
        ->first();
        
      
        $pdf = PDF::loadView('pdf.paymentreceipt', ['payment' => $payment,'setting'=>$setting]);
        
        return $pdf->download('InvoicePayment_'.$id.''.'pdf');

        return Payment::hydrate($payment->toArray());

    }
}