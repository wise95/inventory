<?php
        $path = public_path('/images/'.$setting->logo);
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
?>

<table style="width:100%;border-spacing: 0;">
  <tr>
    <td>
    <div  style="font-size:30px;font-family:sans-serif;font-weight:700" > Purchase Order </div>
    <span style="font-size:20px;font-family:sans-serif;">{{$setting->company_name}} </div><br>
    <span style="font-size:13px;font-family:sans-serif;">{{$setting->address}} </span><br>
    <span style="font-size:13px;font-family:sans-serif;">{{$setting->city}} <br>
    <span style="font-size:13px;font-family:sans-serif;">{{$setting->state}}  {{$setting->zip}} <br>
    <span style="font-size:13px;font-family:sans-serif;">{{$setting->country}} <br>
    <span style="font-size:13px;font-family:sans-serif;">{{$setting->phone}} / {{$setting->email}}  <br>
<br> </td>
<td valign="top" style="text-align: right" ><img src="{{$base64}}" width="200px" /> </td>
 </tr>
</table>


<div style="padding-top:50px">
<table  style="width:100%;border-spacing: 0; font-family:sans-serif; font-size:12px;order-collapse: collapse; cellspacing=0">

 <tr> 
    <td style="font-weight:700;font-size:13px" >Purchase Order # </td>
    <td >{{$purchaseorder->ponumber}}</td>
    <td style="font-weight:700;font-size:13px">Vendor Address </td>
    <td style="font-weight:700;font-size:13px">Deliver To </td>
 </tr>

 <tr> 
    <td style="font-weight:700;font-size:13px">Status </td>
    <td>{{$purchaseorder->status}}</td>
    <td>{{$purchaseorder->vendor->address}}  </td>
    <td>{{$setting->address}}</td>

 <tr> 
    <td style="font-weight:700;font-size:13px">Created Date </td>
    <td>{{$purchaseorder->created_date}}</td>
    <td>{{$purchaseorder->vendor->city}} </td>
    <td>{{$setting->city}}</td>
 </tr>

 <tr> 
    <td style="font-weight:700;font-size:13px">Shipment Date </td>
    <td>{{$purchaseorder->delivery_date}}</td>
    <td>{{$purchaseorder->vendor->state}} {{$purchaseorder->vendor->zip}} </td>
    <td>{{$setting->state}} {{$setting->zip}}  </td>
 </tr>

 <tr> 
    <td> </td>
    <td> </td>
    <td>{{$purchaseorder->vendor->country}}</td>
    <td>{{$setting->country}} </td>
 </tr>


 <tr> 
    <td style="font-weight:700;font-size:13px">Vendor  </td>
    <td>{{$purchaseorder->vendor->name}} </td>
    <td></td>
    <td></td>
 </tr>

</table>
</div>



<div style="padding-top:50px">

<table style="width:100%;border-spacing: 0; font-family:sans-serif; font-size:12px;order-collapse: collapse; cellspacing=0">

<tr>
	<th style="border: 1px solid #dbdbdb; background-color:#d7d8d9" >Product Name </th>
	<th style="border: 1px solid #dbdbdb;background-color:#d7d8d9;text-align:right" >Unit Price </th>
	<th style="border: 1px solid #dbdbdb;background-color:#d7d8d9;  text-align:right" >Qty </th>
	<th style="border: 1px solid #dbdbdb;background-color:#d7d8d9;text-align: right" >Amount </th>

</tr>



@foreach ($purchaseorder->products as $product)
 <tr>
 	<td style="border: 1px solid #dbdbdb" >{{$product->details->name}} </td>
 	<td style="border: 1px solid #dbdbdb;text-align:right" >{{ number_format($product->unit_price,2)}}</td>
 	<td style="border: 1px solid #dbdbdb;text-align:right" >{{$product->qty}}</td>
 	<td style="border: 1px solid #dbdbdb;text-align:right" >{{number_format(($product->unit_price)*($product->qty),2)}}</td>
</tr>
@endforeach


@php
$sub_total=0;
$discount=0;
$tax;
foreach ($purchaseorder->products as $product){
    $sub_total=$sub_total+($product->unit_price)*($product->qty);
}

if($purchaseorder->discount_type=='d'){
  $discount=$purchaseorder->discount;
}

if($purchaseorder->discount_type=='p'){
  $discount= $sub_total*$purchaseorder->discount /100;
}

$tax= ($sub_total-$discount)*$purchaseorder->tax_percentage/100


@endphp

<tr >
  <td style="padding-top:20px"> </td>
  <td> </td>
  <td style="padding-top:20px;text-align: right">Sub Total </td>
  <td style="padding-top:20px;text-align: right"> {{number_format($sub_total,2)}}  </td>

</tr>

<tr>
  <td> </td>
  <td> </td>
  <td style="text-align: right">Discount </td>
  <td style="text-align: right">({{number_format($discount,2)}}) </td>

</tr>

<tr>
  <td> </td>
  <td> </td>
  <td style="text-align: right"> {{$purchaseorder->tax_code}} {{$purchaseorder->tax_percentage}}% </td>
  <td style="text-align: right"> {{number_format($tax,2)}} </td>

</tr>



<tr>
  <td> </td>
  <td> </td>
  <td style="font-size:17px;text-align: right">Total </td>
  <td style="font-size:17px;text-align: right">{{$setting->currency}}{{number_format($sub_total-$discount+$tax,2)}}</td>

</tr>



</table>

</div>



