@extends('layouts.oauth')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">

           <passport_authorized_clients> </passport_authorized_clients>
           <passport_clients></passport_clients>
           <passport_personal_access_tokens> </passport_personal_access_tokens>

        </div>
    </div>
</div>
@endsection