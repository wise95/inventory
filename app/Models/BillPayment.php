<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BillPayment extends Model
{

    public function bill(){
    	return $this->hasOne('App\Models\PurchaseOrderBill','id','bill_id');
    }
    
}
