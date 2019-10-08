<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrderBill extends Model
{
    
    public function poreceived(){

    	return $this->hasOne('App\Models\PurchaseOrderReceived','billnumber','billnumber');
    }
    
    public function purchaseorder(){

     	return $this->hasOne('App\Models\PurchaseOrder','ponumber','ponumber');
    }

    public function payments(){
     	return $this->hasMany('App\Models\BillPayment','bill_id','id');
    }

}
