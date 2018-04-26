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

// home page
Route::get('/', 'MainController@home');

// about company page
Route::get('/about', 'MainController@about');

// login, sign in page
Route::get('/login', 'User\Auth\LoginController@index');
Route::post('/login/action', 'User\Auth\LoginController@action');

// register page
Route::get('/register', 'User\Auth\RegController@index');
Route::post('/register/action', 'User\Auth\RegController@action');

// logout
Route::get('/logout', 'User\Auth\LogoutController@index');

// password reset
Route::get('/user/reset', 'User\Auth\ForgotPasswordController@index')->name('password.email');
Route::post('/user/reset/password', 'User\Auth\ForgotPasswordController@sendResetLinkEmail')->name('pwd.check');
Route::get('/user/reset/{token}', 'User\Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('/user/reset/action', 'User\Auth\ResetPasswordController@reset');

// categories
Route::get('/index/{id}', 'Products\CategoryController@show');

// products
Route::get('/product/{id}', 'Products\ProductsController@single');

// user settings
Route::get('/settings', 'User\UsersController@settingsPlain');
Route::post('/settings/save', 'User\UsersController@saveChanges');

// cart
Route::post('/cart/add', 'Products\ProductsController@addToCart');
Route::get('/cart', 'Products\ProductsController@getCartItems');
Route::post('/cart/delete', 'Products\ProductsController@deleteItems');
Route::post('/cart/deleteAll', 'Products\ProductsController@deleteAllItems');

// cart buy
Route::post('/cart/request', 'Products\ProductsController@buyItems');

// admin panel
Route::get('/personal/cabin', 'User\SpecialController@admin');
Route::post('/personal/cabin/delete', 'User\SpecialController@delete');
Route::post('/personal/cabin/create', 'User\SpecialController@create');