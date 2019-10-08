<?php

namespace App\Http\Controllers;

use App\Models\Vendor;
use Illuminate\Http\Request;
use App\Http\Resources\Vendor as VendorResource;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\PurchaseOrder as PurchaseOrderResource;

use App\Models\Product;
use App\Models\PurchaseOrder;
use App\Models\PurchaseOrderBill;
use DB;

class VendorController extends Controller
{
    

    public function all(){
         header('Access-Control-Allow-Origin: *');
        return VendorResource::collection(Vendor::paginate(20));
    }

    public function getProducts($id){
          $products= Product::where("vendor_id",$id)->get();
          return ProductResource::collection($products);

    }

    public function getPurchaseOrders($id){
          $po= PurchaseOrder::where("vendor_id",$id)->get();
          return PurchaseOrderResource::collection($po);
    }

    public function getBills($id){
        
           $bills=DB::table('purchase_order_bills')
                   ->join('purchase_orders','purchase_orders.ponumber',"purchase_order_bills.ponumber")
                   ->where('purchase_orders.vendor_id',$id)
                   ->select('*','purchase_order_bills.id as bill_id',DB::raw('(purchase_order_bills.total-paid_amount)as due_amount'))
                   ->get();
                  return PurchaseOrderBill::hydrate($bills->toArray());

    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function create(Request $request){

        $vendor = new Vendor();
        $vendor->name= $request->name;
        $vendor->contactperson= $request->contactperson;
        $vendor->email= $request->email;
        $vendor->mobile= $request->mobile;
        $vendor->address= $request->address;
        $vendor->city= $request->city;
        $vendor->state= $request->state;
        $vendor->zip= $request->zip;
        $vendor->save();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new VendorResource(Vendor::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function edit(Vendor $vendor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vendor $vendor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vendor $vendor)
    {
        //
    }
}
