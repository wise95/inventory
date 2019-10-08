<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Payment extends JsonResource
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
        'id' => $this->id,
        'created_at'=>date('d-M-Y', strtotime($this->created_at)),
        'amount' => $this->amount,
        'paymentno'=> $this->paymentno,
        'invoice_id'=>$this->invoice_id,
        'referencenumber'=>$this->referencenumber,
        'paymentmethod'=>$this->paymentmethod,
        'invnumber'=>$this->invoice->invnumber,
        'invoice'=>$this->invoice,
        'customer'=>$this->invoice->salesorder->customer,
         
         

       ];

   }
}
