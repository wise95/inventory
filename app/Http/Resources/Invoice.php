<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Invoice extends JsonResource
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
        'created_at' => date('d-M-Y', strtotime($this->created_at)),
        'id' => $this->id,
        'invnumber'=>$this->invnumber,
        'status'=>$this->status,
        'salesorder'=>$this->salesorder,
        'products'=>$this->products,
        'customerfullname'=> $this->salesorder->customer->firstname ." ".$this->salesorder->customer->lastname ,
        'due_date' => date('d-M-Y', strtotime($this->due_date)),
        'total'=>$this->total,
        'payments'=>$this->payments,
        'balance'=>$this->amount-$this->paid_amount

        ];
    }
}
