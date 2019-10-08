<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseOrderReceivedProduct extends JsonResource
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
        'name' => $this->details->name,
        'received_qty'=> $this->received_qty
       
       ];

   }
}
