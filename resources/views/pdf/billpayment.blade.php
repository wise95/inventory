<?php
        $path = public_path('/images/'.$setting->logo);
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
?>

<table style="width:100%;border-spacing: 0;">
  <tr>
    
    <td>
<div  style="font-size:30px;font-family:sans-serif;font-weight:700" > Payment From </div>
<span style="font-size:20px;font-family:sans-serif;">{{$payment->name}} </div><br>
<span style="font-size:13px;font-family:sans-serif;">{{$payment->address}} </span><br>
<span style="font-size:13px;font-family:sans-serif;">{{$payment->city}} <br>
<span style="font-size:13px;font-family:sans-serif;">{{$payment->state}}  {{$setting->zip}} <br>
<span style="font-size:13px;font-family:sans-serif;">{{$payment->country}} <br>
<span style="font-size:13px;font-family:sans-serif;">{{$payment->mobile}} / {{$setting->email}}  <br>

<br> </td>
<td valign="top" style="text-align: right" ><img src="{{$base64}}" width="200px" /> </td>
 </tr>
</table>




<div style="padding-top:50px">
<table  style="width:100%;border-spacing: 0; font-family:sans-serif; font-size:12px;order-collapse: collapse; cellspacing=0">
<tr>
    <td style="font-weight:700;font-size:16px;padding-bottom:10px" colspan="8">Payment Made</td>
</tr>
 <tr> 
    <td style="font-weight:700;font-size:13px;background-color:#d7d8d9" >Payment # </td>
    <td style="background-color:#d7d8d9">{{$payment->paymentnumber}}</td>
    <td style="font-weight:700;font-size:13px;background-color:#d7d8d9">Amount Paid </td>
    <td style="background-color:#d7d8d9">{{$payment->paid_amount}} </td>
    <td style="font-weight:700;font-size:13px;background-color:#d7d8d9">Payment Method </td>
    <td style="background-color:#d7d8d9">{{$payment->paymentmethod}} </td>
    <td style="font-weight:700;font-size:13px;background-color:#d7d8d9">Reference </td>
    <td style="background-color:#d7d8d9">{{$payment->reference}} </td>
 </tr>

 

 

</table>
</div>



<div style="padding-top:50px">

<table style="width:100%;border-spacing: 0; font-family:sans-serif; font-size:12px;order-collapse: collapse; cellspacing=0">

<tr>
    <td style="font-weight:700;font-size:16px;padding-bottom:10px" colspan="4">Payment for</td>
</tr>

<tr> 
    <td style="font-weight:700;font-size:13px;background-color:#d7d8d9" >Bill # </td>
    <td style="background-color:#d7d8d9">{{$payment->billnumber}}</td>
    <td style="font-weight:700;font-size:13px;background-color:#d7d8d9">Bill Date </td>
    <td style="background-color:#d7d8d9">{{$payment->billdate}} </td>
    <td style="font-weight:700;font-size:13px;background-color:#d7d8d9">Bill Amount </td>
    <td style="background-color:#d7d8d9">{{$payment->bill_amount}} </td>
</tr>






@php



@endphp





</table>

</div>



