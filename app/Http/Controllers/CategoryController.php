<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Resources\Category as CategoryResource;

class CategoryController extends Controller
{
    

    public function all(){
        
        return CategoryResource::collection(Category::all());
    }
}
