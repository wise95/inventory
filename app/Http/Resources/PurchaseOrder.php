<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseOrder extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
         $this->products->map(function ($item) {
              $item['name'] = $item->details->name;
          return $item;
          });

         $this->received->map(function ($item) {
              $item['sum'] = 0;
              $sum=0;
              foreach ($item->payments as $key => $value) {
                  $sum=$sum+ $value->amount;
              }
              $item['sum']=$sum;
              return $item;
          });


         $this->received->map(function ($item) {
               $item['bill_id'] = $item->bill;
              return $item;
          });



        return [
        'id' => $this->id,
        'created_at' => date('d-M-Y', strtotime($this->created_at)),
        'created_date' => date('d-M-Y', strtotime($this->created_date)),
        'delivery_date' => date('d-M-Y', strtotime($this->delivery_date)),
        'ponumber' => $this->ponumber,
        'vendor' => $this->vendor->name,
        'status' => $this->status,
        'products'=>$this->products,
        'received'=>$this->received,
        'total'=>$this->total

       ];
    }
}
