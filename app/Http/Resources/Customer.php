<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Customer extends JsonResource
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
           'id'=>$this->id,
           'firstname'=>$this->firstname,
           'lastname'=>$this->lastname,
           'email'=>$this->email,
           'phone'=>$this->phone,
           'bill_address'=>$this->bill_address,
           'bill_city'=>$this->bill_city,
           'bill_state'=>$this->bill_state,
           'bill_zip'=>$this->bill_zip,
           'bill_country'=>$this->bill_country,
           'ship_address'=>$this->ship_address,
           'ship_city'=>$this->ship_city,
           'ship_state'=>$this->ship_state,
           'ship_zip'=>$this->ship_zip,
           'ship_country'=>$this->ship_country,
           


          ];
    }
}
