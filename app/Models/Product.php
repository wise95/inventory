<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    


    public function productprice(){

    	return $this->hasOne('App\Models\ProductPrice','id','product_price_id');
    }

    public function category(){
    	return $this->hasOne('App\Models\Category','id','category_id');
    }

    public function vendor(){
    	//return $this->hasMany('App\Models\VendorProduct','product_id','id');
    	

    	return $this->hasOne('App\Models\Vendor', 'id', 'vendor_id');
    }



}
