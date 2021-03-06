<?php

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
        Route::post('store', 'CartController@store');
    });
});

Route::get('/product/all', 'ProductController@index');
Route::apiResource(
    'product',
    'ProductController',
    [
        'except' => ['index']
    ]
);

Route::get('/category/all', 'CategoryController@index');
Route::get('/category/{id}', 'CategoryController@show');
Route::apiResource(
    'category',
    'CategoryController',
    [
        'only' => ['store', 'update', 'destroy']
    ]
)->middleware('auth:api');

Route::get('/cart/all', 'CartController@index');
Route::delete('/cart/empty', 'CartController@empty');
Route::apiResource(
    'cart',
    'CartController',
    [
        'only' => ['store', 'destroy']
    ]
);

Route::get('/verify/account/{token}', 'AuthController@verifyUser')->name('verify.via.token')->middleware('signed');

Route::post('/reset/request', 'ForgotPasswordController@askForPasswordReset');
Route::get('/reset/password/{token}', 'ResetPasswordController@reset')->name('reset.now')->middleware('signed');
Route::post('/reset/now', 'ResetPasswordController@resetNow');
