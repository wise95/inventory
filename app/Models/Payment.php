<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    //

    public function invoice(){
    	return $this->hasOne('App\Models\Invoice','id','invoice_id');
    }
}
