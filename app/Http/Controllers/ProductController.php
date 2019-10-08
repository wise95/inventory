<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Product as ProductResource;
use App\Models\Product;
use App\Models\ProductPrice;
use App\Models\VendorProduct;
use DNS1D;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
class ProductController extends Controller
{
    public function all(){
        header('Access-Control-Allow-Origin: *');
        return ProductResource::collection(Product::paginate(15));
    }

    public function getAll(){
        header('Access-Control-Allow-Origin: *');
        return ProductResource::collection(Product::all());
    }

    public function get($id){
 
 		return new ProductResource(Product::find($id));

    }

    

    public function create(Request $request){

        $product = new Product();
        $product->name= $request->name;
        $product->barcode= $request->barcode;
        $product->category_id= $request->category_id;
        $product->sku= $request->sku;
        $product->desc= $request->desc;
        $product->vendor_id= $request->vendor_id;

        // add prices
        $product_price= new ProductPrice();
        $product_price->purchase_price= $request->purchase_price;
        $product_price->selling_price= $request->selling_price;
        $product_price->save();

        $product->product_price_id=$product_price->id;

        $product->save();
        
        if($request->hasFile('upload_file')){
             $image = $request->file('upload_file');
             $name =  $product->id.$image->getClientOriginalName();
             $destinationPath = public_path('/images');
             $image->move($destinationPath, $name);
            //return Storage::putFile('public',$file);
           
            // $product= Product::find($request->id);
             $product->image=$name;
             $product->save();

        }

    }

    public function update(Request $request){

        $product = Product::find($request->id);
        $product->name= $request->name;
        $product->sku= $request->sku;
        $product->category_id= $request->category_id;
        $product->vendor_id= $request->vendor_id;
        $product->qty= $request->qty;
        $product->reorder_level= $request->reorder_level;
        $product->save();

        $product_price= ProductPrice::find($product->product_price_id);
        $product_price->purchase_price=$request->purchase_price;
        $product_price->selling_price=$request->selling_price;
        $product_price->save();

        if($request->hasFile('upload_file')){
            $image = $request->file('upload_file');
            $name =  $product->id.$image->getClientOriginalName();
            $destinationPath = public_path('/images');
            $image->move($destinationPath, $name);
           //return Storage::putFile('public',$file);
          
           // $product= Product::find($request->id);
            $product->image=$name;
            $product->save();

       }



        return response()->json([ 'type'=>'success', 'title'=>"Product Updated Successfully","message"=>""]);
    }
     

     public function addVendor(Request $request){
            
        $vendor_product = new VendorProduct();
        $vendor_product->product_id= $request->product_id;
        $vendor_product->vendor_id= $request->vendor_id;
        $vendor_product->save();

     }

    public function removeVendor(Request $request){
            VendorProduct::where('product_id', $request->product_id)
            ->where('vendor_id',$request->vendor_id)
            ->delete();
    }

    public function updateVendor(Request $request){
        $product=Product::find($request->product_id);
        $product->vendor_id= $request->vendor_id;
        $product->save();
        $product_price= ProductPrice::find($product->product_price_id);
        $product_price->purchase_price=$request->purchase_price;
        $product_price->save();

    }



    
     public function view(){

       //$product= Product::find($id);
       return view('product.view');

     }

     public function barcode(){

         //echo DNS1D::getBarcodeHTML("4445645656", "UPCA");

         return array('image'=>DNS1D::getBarcodeHTML("4445645656", "UPCA"));
     }

     function uploadImage(Request $request){

         header('Access-Control-Allow-Origin: *');

        if($request->hasFile('upload_file')){
             $image = $request->file('upload_file');
             $name =  $request->id.$image->getClientOriginalName();
             $destinationPath = public_path('/images');
             $image->move($destinationPath, $name);
            //return Storage::putFile('public',$file);
           
             $product= Product::find($request->id);
             $product->image=$name;
             $product->save();

        }else{
            echo "No File Selected";
        }
        
 }

}
