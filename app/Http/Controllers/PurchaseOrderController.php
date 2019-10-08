<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PurchaseOrder;
use App\Models\PurchaseOrderBill;
use App\Models\PurchaseOrderProduct;
use App\Models\PurchaseOrderReceived;
use App\Models\PurchaseOrderReceivedProduct;
use App\Models\BillPayment;
use App\Models\Product;
use App\Http\Resources\PurchaseOrder as PurchaseOrderResource;
use App\Http\Resources\PurchaseOrderReceivedProduct as PurchaseOrderReceivedProductResource;
use App\Http\Resources\Bill as BillResource;
use App\Http\Resources\BillPayment as BillPaymentResource;
use App\Models\Setting;
use PDF;
use DB;

class PurchaseOrderController extends Controller
{
    
    // api methods
    public function all(){
         header('Access-Control-Allow-Origin: *');
        return PurchaseOrderResource::collection(PurchaseOrder::orderBy("created_at", "desc")->paginate(15));
    }

    public function get($id){
 
 		return new PurchaseOrderResource(PurchaseOrder::find($id));

    }

    public function create(Request $request){

        $po= new PurchaseOrder();
        $po->ponumber= $request->ponumber;
        $po->vendor_id= $request->vendor_id;

       

        $po->created_date = substr($request->created_date,0,10);
        $po->delivery_date = substr($request->delivery_date,0,10);
        $po->status= $request->status;
        $po->total= $request->total;
        $po->save();


        foreach ($request->products as $key => $value) {
             $purchaseOrderProduct = new PurchaseOrderProduct();
             $purchaseOrderProduct->purchase_order_id= $po->id;
             $purchaseOrderProduct->product_id=$value['id'];
             $purchaseOrderProduct->unit_price=$value['productprice']['purchase_price'];
             $purchaseOrderProduct->qty=$value['qty_to_order'];
             $purchaseOrderProduct->save();

        }



    	
    }

    public function delete($id){

        $po=PurchaseOrder::find($id);
        
        if($po==null){
            return response()->json(['type'=>'warn', 'title'=>"Unable to Delete Purchase Order","message"=>""]);
        }else{
            $po_number=$po->ponumber;
            // check for receivable
            if($po_receive=PurchaseOrderReceived::where('ponumber',$po->ponumber)->count()>0){
                return response()->json(['type'=>'warn', 'title'=>"Unable to Delete Purchase Order","message"=>"You have Purchase Order Reveive"]);
            }else{
                $po->delete();
                return response()->json(['type'=>'success', 'title'=>"Purchase Order ".$po_number." Deleted Sucessfully","message"=>""]);
            }


           
        }
    }

    public function updateReceivedQty(Request $request){
        foreach ($request->products as $key => $value) {
             $purchaseOrderProduct = PurchaseOrderProduct::where('purchase_order_id',$request->id)
                ->where('product_id',$value['product_id'])
                ->first();
             $purchaseOrderProduct->received_qty=$purchaseOrderProduct->received_qty + $value['qty_to_receive'];
             $purchaseOrderProduct->save();

            // update qty in product table
            $product= Product::find($value['product_id']);
            $product->qty=$product->qty+$value['qty_to_receive'];
            $product->save();


        }

        // update PurchaseOrderReceived
 
        $max_id= PurchaseOrderReceived::max('id')+1;
        $prnumber= "PR-".str_pad($max_id,8,"0",STR_PAD_LEFT);
        $purchaseOrderReceived = new PurchaseOrderReceived();
        $purchaseOrderReceived->prnumber=$prnumber;
        $purchaseOrderReceived->ponumber=$request->ponumber;
        $purchaseOrderReceived->save();

        // update PurchaseOrderReceivedProducts

        foreach ($request->products as $key => $value) {
            if( isset($value['qty_to_receive']) && ($value['qty_to_receive']>0) ){
                $purchaseOrderReceivedProduct= new PurchaseOrderReceivedProduct();
                $purchaseOrderReceivedProduct->prnumber=$prnumber;
                $purchaseOrderReceivedProduct->product_id=$value['product_id'];
                $purchaseOrderReceivedProduct->unit_price=$value['unit_price'];
                $purchaseOrderReceivedProduct->received_qty=$value['qty_to_receive'];
                $purchaseOrderReceivedProduct->save();
            }
        }


        // update the received status - Partially Received or Received

        $qty = DB::table('purchase_order_products')
                ->where('purchase_order_id', $request->id)
                ->sum(DB::raw('qty-received_qty'));

        $po=PurchaseOrder::find($request->id);
        if($qty>0){

           $po->status="Partially Received"; 
           $po->save();

        }else{
            $po->status="Received"; 
            $po->save();
        }
        
    }

    public function deleteReceived(Request $request){

       
      // check for bills

       $obj= PurchaseOrderReceived::find($request->id); // $obj->ponumber
       if( PurchaseOrderBill::where("purchase_order_received_id",$request->id)->count()>0){
        return response()->json([ 'type'=>'warn', 'title'=>"unable to delete","message"=>"You have Bills for received items"]);
       }


       $receivedProducts= PurchaseOrderReceivedProduct::where("prnumber",$obj->prnumber)->get();

       $po = PurchaseOrder::where('ponumber',$obj->ponumber)->first();
       $purchase_order_id=$po->id;


       foreach ($receivedProducts as $key => $value) {
             $purchaseOrderProduct = PurchaseOrderProduct::where("product_id",$value['product_id'])
             ->where("purchase_order_id",$purchase_order_id)
             ->first();
             

             $purchaseOrderProduct->received_qty = $purchaseOrderProduct->received_qty - $value['received_qty'];
             $purchaseOrderProduct->save();

             // update qty in product table
             $product= Product::find($value['product_id']);
             $product->qty=$product->qty-$value['received_qty'];
             $product->save();


        }

        //$receivedProducts->delete();
        PurchaseOrderReceivedProduct::where("prnumber",$obj->prnumber)->delete();
        $obj->delete(); 
        // PurchaseOrderReceivedProduct

        // delete bills related to this purchase_order_received_id
        
        PurchaseOrderBill::where("purchase_order_received_id",$request->id)->delete();

        // update status in the PurchaseOrders

        $received_qty = DB::table('purchase_order_products')
        ->where('purchase_order_id', $purchase_order_id)
        ->sum(DB::raw('received_qty'));

        $qty = DB::table('purchase_order_products')
        ->where('purchase_order_id', $purchase_order_id)
        ->sum(DB::raw('qty'));


        $po=PurchaseOrder::find($purchase_order_id);
        if($received_qty==0){

           $po->status="Created"; 
           $po->save();

        }else{
           $po->status="Partially Received"; 
           $po->save();
        }


        return response()->json([ 'type'=>'success', 'title'=>"Purchase Receive Deleted Successfully ","message"=>""]);


    }

    public function createBill(Request $request){
        
       
        $bill_number= "B-".str_pad($request->id,8,"0",STR_PAD_LEFT);
        $po_received= PurchaseOrderReceived::find($request->id);
        $po_received->billnumber=$bill_number;
       

        $bill_total=0;
        foreach ( $po_received->products as $key => $value) {
             $bill_total =  $bill_total + $value['unit_price']* $value['received_qty'];
        }
        $po_received->total=$bill_total;
        $po_received->save();

        $po_bill = new PurchaseOrderBill();
        $po_bill->billnumber=$bill_number;
        $po_bill->total=$bill_total;
        $po_bill->ponumber=$request->ponumber;
        $po_bill->purchase_order_id=$request->purchase_order_id;
        $po_bill->purchase_order_received_id=$request->id;

        $po_bill->save();

        

         return $bill_number;


       // $po_bill = new PurchaseOrderBill();
       // $po_bill->billnumber= $bill_number;


        

    }


    public function receivedProducts(Request $request){
       //return PurchaseOrderReceivedProduct::where("prnumber",$request->prnumber)->get();
       return  PurchaseOrderReceivedProductResource::collection(PurchaseOrderReceivedProduct::where("prnumber",$request->prnumber)->get());
       //return PurchaseOrderResource::collection(PurchaseOrder::paginate(20));

    }

    public function getNextPurcaseOrderNumber(){

        $next_id= PurchaseOrder::max('id')+1;
        $ponumber= "PO-".str_pad($next_id,8,"0",STR_PAD_LEFT);
        return $ponumber;

    }


    public function getBills(){

         return BillResource::collection(PurchaseOrderBill::paginate(15));
    }

    

    public function getBill($id){
        return new BillResource(PurchaseOrderBill::find($id));
    }

    public function deleteBill(Request $request){

       // check for bill payment

       if( BillPayment::where("bill_id",$request->id)->count()>0){
        return response()->json([ 'type'=>'warn', 'title'=>"unable to delete","message"=>"You have Payments for this Bill"]);
       }



        $bill=PurchaseOrderBill::find($request->id);
        //update the Billnumber of PurchaseOrderReceived
        $po_received= PurchaseOrderReceived::where("billnumber",$bill->billnumber)->first();
        $po_received->billnumber=null;
        $po_received->save();
        $bill->delete();

        return response()->json([ 'type'=>'success', 'title'=>"Bill Deleted Successfully","message"=>""]);
        
        

    }




    public function getBillsByPurchaseOrder(Request $request){

        $users = DB::table('purchase_orders')->where('id', '=', $request->id)
               ->join('contacts', 'users.id', '=', 'contacts.user_id')
        ->get();



    }

    public function addPayment(Request $request){

         $max_id= BillPayment::max('id')+1;
         $paymentumber= "BP-".str_pad($max_id,8,"0",STR_PAD_LEFT);

         $bill = PurchaseOrderBill::find($request->bill_id);

         $bill->paid_amount= $bill->paid_amount +$request->amount;
         $bill->save();
         

         $payment   = new BillPayment();
         $payment->amount=$request->amount;
         $payment->paymentnumber= $paymentumber;
         $payment->billnumber= $bill->billnumber;
         $payment->reference= $request->reference;
         $payment->paymentmethod= $request->paymentmethod;
         $payment->bill_id= $request->bill_id;
         $payment->note= $request->note;

         $payment->save();

         return new BillPaymentResource($payment );



    }

    public function getPayments($id){
         return BillPaymentResource::collection(BillPayment::where("bill_id",$id)->get());
    }

    
    public function index(){
           
        $purchaseorders=  PurchaseOrder::all();
        return view('purchaseorder.index')->with('purchaseorders',$purchaseorders);
    }

    public function generatePDF($id){

        $purchaseorder=PurchaseOrder::find($id);
        $setting=Setting::find(1);
        
        //$pdf = PDF::loadView('product.test', compact('invoice'));
        $pdf = PDF::loadView('pdf.purchaseorder', ['purchaseorder' => $purchaseorder,'setting'=>$setting]);
        
        return $pdf->download('PurchaseOrder'.$purchaseorder->id.''.'pdf');

        // return View::make('product.test')->with('invoice', $invoice);

     }
}
