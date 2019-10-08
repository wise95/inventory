<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VendorProduct extends Model
{
    public function vendor(){
    	return $this->hasOne('App\Models\Vendor','id','vendor_id');
    }
}
