<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use DNS1D;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        return [
        'id' => $this->id,
        'name' => $this->name,
        'sku' => $this->sku,
        'image' => $this->image,
        'productprice'=>$this->productprice,
        'vendor'=>$this->vendor,
        'category'=>$this->category,
        'barcode' =>DNS1D::getBarcodeHTML($this->barcode, "UPCA"),
        'qty'=>$this->qty,
        'reorder_level'=>$this->reorder_level,
        'qty_to_order'=>1,
        'qty_error'=>false
        
       ];
    }

   

   
}
