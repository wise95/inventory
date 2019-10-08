<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Bill as BillResource;
class BillPayment extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [

         "id"=>$this->id,
         'created_at' => date('d-M-Y', strtotime($this->created_at)),
         'amount' => $this->amount,
         'paymentnumber'=>$this->paymentnumber,
         'reference'=>$this->reference,
         'paymentmethod' => $this->paymentmethod,
         'bill_id'=>$this->bill_id,
       
         
         'bill'=> new BillResource($this->bill)


        ];

        
    }
}
