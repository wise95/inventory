<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tax;
use App\Http\Resources\Tax as TaxResource;

class TaxController extends Controller
{
    public function index(){
        
        return TaxResource::collection(Tax::all());
    }
}
