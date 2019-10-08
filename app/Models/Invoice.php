<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    
    public function salesorder(){
    	return $this->hasOne('App\Models\SalesOrder','id','sales_order_id');
    }

    public function products(){
    	return $this->hasMany('App\Models\InvoiceProduct','invoice_id','id');
    }

     public function payments(){
    	return $this->hasMany('App\Models\Payment','invoice_id','id');
    }


}