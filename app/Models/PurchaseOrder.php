<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class PurchaseOrder extends Model
{
    
    public function vendor(){

    	return $this->hasOne('App\Models\Vendor','id','vendor_id');
    }

    public function status(){

    	return $this->hasOne('App\Models\PurchaseOrderStatus','id','postatus_id');
    }

    public function amount(){
    	return 10;
    }

    public function products(){
    	return $this->hasMany('App\Models\PurchaseOrderProduct','purchase_order_id','id');

    	//return $this->belongsToMany('App\Models\Product', 'purchase_order_products', 'purchase_order_id', 'product_id');
    }

    public function received(){
        return $this->hasMany('App\Models\PurchaseOrderReceived','ponumber','ponumber');
    }


}
