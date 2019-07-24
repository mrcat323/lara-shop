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

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');
    
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('user', 'AuthController@user');
        Route::post('logout', 'AuthController@logout');
    });
});

Route::prefix('product')->group(function () {
	Route::get('all', 'ProductController@index');
	Route::post('store', 'ProductController@store');
	Route::post('update', 'ProductController@update');
	Route::post('destroy', 'ProductController@destroy');
	Route::get('{id}', 'ProductController@show');
});

Route::prefix('category')->group(function () {
	Route::get('all', 'CategoryController@index');
	Route::post('store', 'CategoryController@store');
	Route::post('update', 'CategoryController@update');
	Route::post('destroy', 'CategoryController@destroy');
	Route::get('{id}', 'CategoryController@show');
});