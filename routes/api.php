<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/products', 'ProductController@all');
    Route::get('/purchaseorders', 'PurchaseOrderController@all');
});

Route::get('/products/byvendor', 'ProductController@byvendor');
Route::post('/products', 'ProductController@create');
Route::post('/products/update', 'ProductController@update');

Route::get('/products/getall', 'ProductController@getAll');


Route::get('/products/{id}', 'ProductController@get');
Route::post('/product/upload', 'ProductController@uploadImage');

Route::post('/product/updatevendor', 'ProductController@updateVendor');
Route::post('/product/removevendor/', 'ProductController@removeVendor');

Route::get('/categories', 'CategoryController@all');

Route::get('/vendors', 'VendorController@all');
Route::post('/vendors', 'VendorController@create');
Route::get('/vendors/{id}', 'VendorController@show');
Route::get('/vendors/{id}/products', 'VendorController@getProducts');
Route::get('/vendors/{id}/purchaseorders', 'VendorController@getPurchaseOrders');
Route::get('/vendors/{id}/bills', 'VendorController@getBills');

Route::get('/customers', 'CustomerController@all');
Route::post('/customers', 'CustomerController@create');
Route::get('/customers/{id}', 'CustomerController@get');
Route::post('/customers/update', 'CustomerController@update');
Route::get('/customers/{id}/invoices', 'CustomerController@getInvoices');
Route::get('/customers/{id}/payments', 'CustomerController@getPayments');
Route::get('/customers/{id}/salesorders', 'CustomerController@getSalesOrders');

Route::get('/tax', 'TaxController@index');





Route::get('/purchaseorders/get/{id}', 'PurchaseOrderController@get');
Route::post('/purchaseorders/create', 'PurchaseOrderController@create');
Route::post('/purchaseorders/update_received_qty', 'PurchaseOrderController@updateReceivedQty');
Route::post('/purchaseorders/createbill', 'PurchaseOrderController@createBill');
Route::get('/purchaseorders/{id}/bills', 'BillController@getBillsByPurchaseOrder');
Route::get('/purchaseorders/getnextponumber', 'PurchaseOrderController@getNextPurcaseOrderNumber');
Route::get('/purchaseorders/get/{id}/receivedproducts/{prnumber}', 'PurchaseOrderController@receivedProducts');
Route::get('/purchaseorders/{id}/delete', 'PurchaseOrderController@delete');
Route::post('/purchaseorders/{id}/deletereceived', 'PurchaseOrderController@deleteReceived');
Route::post('/purchaseorders/{id}/deletebill', 'PurchaseOrderController@deleteBill');

Route::get('/bills', 'PurchaseOrderController@getBills');
Route::get('/bills/get/{id}', 'PurchaseOrderController@getBill');
Route::get('/bills/purchaseorder/{id}/bills', 'PurchaseOrderController@getBillsByPurchaseOrder');
Route::post('/bills/addpayment', 'PurchaseOrderController@addPayment');
Route::get('/bills/{id}/payments', 'PurchaseOrderController@getPayments');
Route::get('/bills/payments/{id}', 'BillController@getBillPayment');




Route::get('/salesorders', 'SalesOrderController@all');
Route::post('/salesorders', 'SalesOrderController@create');
Route::get('/salesorders/{id}', 'SalesOrderController@get');
Route::get('/salesorders/{id}/createinvoice', 'SalesOrderController@createInvoice');
Route::get('/salesorders/{id}/payments', 'SalesOrderController@getPayments');
Route::get('/salesorders/get/nextsonumber', 'SalesOrderController@getNextSalesOrderNumber');

Route::get('/invoices', 'InvoiceController@index');
Route::get('/invoices/get/nextinvnumber', 'InvoiceController@getNextInvoiceNumber');
Route::post('/invoices', 'InvoiceController@create');
Route::get('/invoices/{id}', 'InvoiceController@get');
Route::get('/invoices/{id}/balance', 'InvoiceController@getBalance');


Route::post('/payments', 'PaymentController@create');
Route::get('/payments', 'PaymentController@all');
Route::get('/payments/get/{id}', 'PaymentController@get');
Route::get('/payments/getnextnumber', 'PaymentController@getNextPaymentNumber');
Route::post('/payments/{id}/delete', 'PaymentController@delete');

Route::get('pdf/invoice/{id}','InvoiceController@generatePDF');
Route::get('pdf/salesorder/{id}','SalesOrderController@generatePDF');
Route::get('pdf/purchaseorder/{id}','PurchaseOrderController@generatePDF');
Route::get('pdf/billpayment/{id}','BillController@generateBillPaymentPDF');
Route::get('pdf/invoicepayment/{id}','PaymentController@generateInvoicePaymentPDF');




Route::get('/setting', 'SettingController@index');


Route::post('/user/register', 'UserController@register');
Route::post('/user/login', 'UserController@login');
Route::post('/user/refresh', 'UserController@refreshToken');
Route::post('/user/logout', 'UserController@logout');

Route::post('/dashboard/purchaseoordercount', 'DashboardController@getPurchaseOrderCount');
Route::post('/dashboard/purchaseoordertotal', 'DashboardController@getPurchaseOrderTotal');
Route::post('/dashboard/purchaseoorderdata', 'DashboardController@getPurchaseOrderData');
Route::post('/dashboard/salesorders', 'DashboardController@getAllSalesOrderData');
Route::post('/dashboard/salesordercount', 'DashboardController@getSalesOrderCount');
Route::post('/dashboard/salesordertotal', 'DashboardController@getSalesOrderTotal');

