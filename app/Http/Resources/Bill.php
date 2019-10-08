<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Bill extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

       $this->poreceived->products->map(function ($item) {
              $item['name'] = $item->details->name;
          return $item;
          });

        return [
        'id' => $this->id,
        'billnumber' => $this->billnumber,
        'total' =>$this->total,
        'created_at' => date('d-M-Y', strtotime($this->created_at)),

        'poreceived' => $this->poreceived,
        'products' => $this->poreceived->products,
        'ponumber' => $this->ponumber,
        'purchaseorder' =>$this->purchaseorder,
        'payments' =>$this->payments,
        'status'=>$this->status,
        'vendor_name'=>$this->purchaseorder->vendor->name,
        'amount_due'=> round($this->total - $this->paid_amount,2)
        
       ];
    }
}
