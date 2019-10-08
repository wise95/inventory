<?php
        $path = public_path('/images/'.$setting->logo);
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
?>

<table style="width:100%;border-spacing: 0;">
  <tr>
    
    <td>
<div  style="font-size:30px;font-family:sans-serif;font-weight:700" > Payment Receipt </div>
</td>



<td valign="top" style="text-align: right" >
<span style="text-align: right"><img src="{{$base64}}" width="200px" /> </span><br>
<span style="font-size:20px;font-family:sans-serif;">{{$setting->company_name}} </span><br>
<span style="font-size:13px;font-family:sans-serif;">{{$setting->address}} </span><br>
<span style="font-size:13px;font-family:sans-serif;">{{$setting->city}} </span><br>
<span style="font-size:13px;font-family:sans-serif;">{{$setting->state}}  {{$setting->zip}} </span><br>
<span style="font-size:13px;font-family:sans-serif;">{{$setting->country}} <br>
<span style="font-size:13px;font-family:sans-serif;">{{$setting->phone}} / {{$setting->email}}  </span><br>


</td>
 </tr>
</table>

<div style="padding-top:50px">
    <table  style="width:100%;border-spacing: 0; font-family:sans-serif; font-size:12px;order-collapse: collapse; cellspacing=0">
        <tr>
        <td>
        <span style="font-weight:700;font-size:13px" >Bill To </span><br
        <span>{{$payment->firstname }}  {{$payment->lastname }}</span><br
        <span> Phone: {{$payment->phone}}   </span><br
        <span> {{$payment->bill_address}} </span><br
        <span> {{$payment->bill_city}}  </span><br
        <span> {{$payment->bill_state}} {{$payment->bill_zip}}  </span><br
        <span> {{$payment->bill_country}} </span><br
        <td>
        </tr>

    </table>
</div>

<div style="padding-top:50px">

<table style="width:100%;border-spacing: 0; font-family:sans-serif; font-size:12px;order-collapse: collapse; cellspacing=0">
<tr>
	<th style="border: 1px solid #dbdbdb; background-color:#d7d8d9" >Invoice #</th>
	<th style="border: 1px solid #dbdbdb;background-color:#d7d8d9;text-align:right" >Invoice Date</th>
	<th style="border: 1px solid #dbdbdb;background-color:#d7d8d9;  text-align:right" >Invoiced Amount </th>
	<th style="border: 1px solid #dbdbdb;background-color:#d7d8d9;text-align: right" >Paid Amount </th>

</tr>

<tr>
 	<td style="border: 1px solid #dbdbdb" >{{$payment->invnumber}} </td>
 	<td style="border: 1px solid #dbdbdb;text-align:right" >{{ $payment->invoice_date}}</td>
 	<td style="border: 1px solid #dbdbdb;text-align:right" >{{ number_format($payment->total,2)}}</td>
 	<td style="border: 1px solid #dbdbdb;text-align:right" >{{number_format($payment->paid_amount,2)}}</td>
</tr>

</table>

</div>





