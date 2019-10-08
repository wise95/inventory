<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SalesOrder extends JsonResource
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

        return [
        'id' => $this->id,
        'created_at' => date('d-M-Y', strtotime($this->created_at)),
        'order_date' => date('d-M-Y', strtotime($this->order_date)),
        'shipment_date' => date('d-M-Y', strtotime($this->shipment_date)),
        'sonumber' => $this->sonumber,
        'customer' => $this->customer,
        'status' => $this->status,
        'products'=>$this->products,
        'tax_id' => $this->tax_id,
        'tax_code'=>$this->tax_code,
        'tax_percentage'=>$this->tax_percentage,
        'discount'=>$this->discount,
        'discount_type'=>$this->discount_type,
        'invoices'=>$this->invoices,
        'total'=>$this->total

       
       ];
    }
}
