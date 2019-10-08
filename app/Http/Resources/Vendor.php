<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Vendor extends JsonResource
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
        'name' => $this->name,
        'email'=>$this->email,
        'contact' => $this->contactperson,
        'phone' => $this->mobile,
        'address' =>$this->address,
        'city' =>$this->city,
        'state' =>$this->state,
        'zip' =>$this->zip,
        'products'=>$this->products
       ];
    }
}
