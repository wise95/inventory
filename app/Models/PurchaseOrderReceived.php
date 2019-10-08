<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrderReceived extends Model
{
    
     
    
    public function products(){
    	return $this->hasMany('App\Models\PurchaseOrderReceivedProduct','prnumber','prnumber');

    	//return $this->belongsToMany('App\Models\Product', 'purchase_order_products', 'purchase_order_id', 'product_id');
    }

    public function getCreatedAtAttribute($value)
    {
        return  date('d-M-Y', strtotime($value));
    }


    public function payments(){
    	return $this->hasMany('App\Models\BillPayment','billnumber','billnumber');
    }

    public function bill(){
        return $this->hasOne('App\Models\PurchaseOrderBill','billnumber','billnumber');
    }



}