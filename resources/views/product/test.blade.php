<?php
        $path = public_path('/images/'.$setting->logo);
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
?>

<table style="width:100%;border-spacing: 0;">
  <tr>
    
    <td>
<div  style="font-size:30px;font-family:sans-serif;font-weight:700" > Invoice </div>

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
    <td style="font-weight:700;font-size:13px" >Invoice # </td>
    <td >{{$invoice->invnumber}}</td>
    <td style="font-weight:700;font-size:13px">Billing Address </td>
    <td style="font-weight:700;font-size:13px">Shipping Address </td>
 </tr>

 <tr> 
    <td style="font-weight:700;font-size:13px">Sales Order # </td>
    <td>{{$invoice->salesorder->id}}</td>
    <td>{{$invoice->salesorder->customer->bill_address}}</td>
    <td>{{$invoice->salesorder->customer->ship_address}}</td>
 </tr>

 <tr> 
    <td style="font-weight:700;font-size:13px">Created Date </td>
    <td>{{$invoice->created_at}}</td>
    <td>{{$invoice->salesorder->customer->bill_city}}</td>
    <td>{{$invoice->salesorder->customer->ship_city}}</td>
 </tr>

 <tr> 
    <td style="font-weight:700;font-size:13px">Status </td>
    <td>{{$invoice->status}}</td>
    <td>{{$invoice->salesorder->customer->bill_state}}  {{$invoice->salesorder->customer->bill_zip}}</td>
    <td>{{$invoice->salesorder->customer->ship_state}}  {{$invoice->salesorder->customer->bill_zip}}</td>
 </tr>

 <tr> 
    <td style="font-weight:700;font-size:13px">Due Date </td>
    <td>{{$invoice->due_date}}</td>
    <td>{{$invoice->salesorder->customer->bill_country}}</td>
    <td>{{$invoice->salesorder->customer->ship_country}}</td>
 </tr>


 <tr> 
    <td style="font-weight:700;font-size:13px">Customer  </td>
    <td> {{$invoice->salesorder->customer->firstname}} {{$invoice->salesorder->customer->lastname}} / {{$invoice->salesorder->customer->phone}}</td>
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



@foreach ($invoice->products as $product)
 <tr>
 	<td style="border: 1px solid #dbdbdb" >{{$product->details->name}} </td>
 	<td style="border: 1px solid #dbdbdb;text-align:right" >{{ number_format($product->unit_price,2)}}</td>
 	<td style="border: 1px solid #dbdbdb;text-align:right" >{{$product->qty}}</td>
 	<td style="border: 1px solid #dbdbdb;text-align:right" >{{number_format(($product->unit_price)*($product->qty),2)}}</td>
</tr>
@endforeach

<tr >
  <td style="padding-top:20px"> </td>
  <td> </td>
  <td style="padding-top:20px;text-align: right">Sub Total </td>
  <td style="padding-top:20px;text-align: right"> 10.75  </td>

</tr>

<tr>
  <td> </td>
  <td> </td>
  <td style="text-align: right"> Tax </td>
  <td style="text-align: right">2.00 </td>

</tr>

<tr>
  <td> </td>
  <td> </td>
  <td style="text-align: right">Discount </td>
  <td style="text-align: right">(5.00) </td>

</tr>

<tr>
  <td> </td>
  <td> </td>
  <td style="font-size:17px;text-align: right">Total </td>
  <td style="font-size:17px;text-align: right">{{$setting->currency}}7.75</td>

</tr>



</table>

</div>

@php
$sub_total=0;
foreach ($invoice->products as $product){
    $sub_total=$sub_total+($product->unit_price)*($product->qty);
}
@endphp

