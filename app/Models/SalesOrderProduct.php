<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesOrderProduct extends Model
{
     public function details(){

    	return $this->hasOne('App\Models\Product','id','product_id');
    }
}
