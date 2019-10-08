<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Bill as BillResource;
use App\Http\Resources\BillPayment as BillPaymentResource;
use App\Models\PurchaseOrderBill;
use App\Models\BillPayment;
use App\Models\Setting;
use DB;
use PDF;

class BillController extends Controller
{

    // for a given purchase_order_id
    public function getBills($id){
        
        return new BillResource(PurchaseOrderBill::find($id));
    }

    public function getBillsByPurchaseOrder(Request $request){

        return  BillResource::collection(PurchaseOrderBill::where('purchase_order_id',$request->id)->get());
    }

    
    public function getBillPayment($id){

        $payments=DB::table('bill_payments')
                   ->join('purchase_order_bills','purchase_order_bills.id',"bill_payments.bill_id")
                   ->where('bill_payments.id',$id)
                   ->join('purchase_orders','purchase_orders.id','purchase_order_bills.purchase_order_id')
                   ->join('vendors','vendors.id','purchase_orders.vendor_id')
                   ->select('purchase_order_bills.id as bill_id','purchase_order_bills.total as bill_amount',
                   'bill_payments.amount as paid_amount', 'bill_payments.paymentnumber','bill_payments.paymentmethod','bill_payments.reference',
                   DB::raw('DATE_FORMAT(bill_payments.created_at,"%d %M %Y") as billdate'),
                   'bill_payments.note',
                   'purchase_orders.ponumber',
                   'purchase_order_bills.billnumber',
                   'vendors.name','vendors.address','vendors.city','vendors.state','vendors.zip','vendors.country'
                   ,DB::raw('(purchase_order_bills.total-paid_amount)as due_amount'))
                   ->get();
                  return BillPayment::hydrate($payments->toArray());

    }


    public function generateBillPaymentPDF($id){

      
        

        $payment=DB::table('bill_payments')
                   ->join('purchase_order_bills','purchase_order_bills.id',"bill_payments.bill_id")
                   ->where('bill_payments.id',$id)
                   ->join('purchase_orders','purchase_orders.id','purchase_order_bills.purchase_order_id')
                   ->join('vendors','vendors.id','purchase_orders.vendor_id')
                   ->select('purchase_order_bills.id as bill_id','purchase_order_bills.total as bill_amount',
                   'bill_payments.amount as paid_amount', 'bill_payments.paymentnumber','bill_payments.paymentmethod','bill_payments.reference',
                   DB::raw('DATE_FORMAT(bill_payments.created_at,"%d %M %Y") as billdate'),
                   'bill_payments.note',
                   'purchase_orders.ponumber',
                   'purchase_order_bills.billnumber',
                   'vendors.name','vendors.address','vendors.city','vendors.state','vendors.zip','vendors.country','vendors.mobile'
                   ,DB::raw('(purchase_order_bills.total-paid_amount)as due_amount'))
                   ->first();


        $setting=Setting::find(1);
        
      
        $pdf = PDF::loadView('pdf.billpayment', ['payment' => $payment,'setting'=>$setting]);
        
        return $pdf->download('BillPayment_'.$id.''.'pdf');

       // return BillPayment::hydrate($payment->toArray());

     }



}
