<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesOrder extends Model
{
    public function products(){
    	return $this->hasMany('App\Models\SalesOrderProduct','sales_order_id','id');
    }

     public function invoices(){
    	return $this->hasMany('App\Models\Invoice','sales_order_id','id');
    }

    public function customer(){
    	return $this->hasOne('App\Models\Customer','id','customer_id');
    }

    public function amount(){
    	return 10;
    }
}
