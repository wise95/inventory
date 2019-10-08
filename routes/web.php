<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/purchaseorder/create', 'PurchaseOrderController@create')->name('purchaseorder.create');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('/products', 'ProductController@view')->name('products.view');
Route::get('/products/barcode', 'ProductController@barcode')->name('products.barcode');

Route::get('/purchaseorders', 'PurchaseOrderController@index')->name('purchaseorders.index');



Route::get('pdf/{id}','InvoiceController@generatePDF');

// to test the invoice html



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/setting', 'UserController@index')->name('setting');