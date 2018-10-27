<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $table = 'cart';
    public $timestamps = false;
    public $result = [];

    /**
     * ------------------------------------------------------
     * Relations between Cart and Products models
     * binding the cart' `product_id`
     * with product's `id`
     * ------------------------------------------------------
     * @see https://laravel.com/docs/5.5/eloquent-relationships#one-to-one
     * -----------------------------------------------------
     *
     * @return mixed|array
     */

    public function products()
    {
        return $this->hasOne('App\Products', 'id', 'item_id');
    }

    /**
    * Relations. All cart items are users'
    *
    * @see https://laravel.com/docs/5.5/eloquent-relationships#one-to-many-inverse
    *
    * @return mixed|array
    */

    public function user()
    {
        return $this->belongsTo('App\Users');
    }

    /**
     * ---------------------------------------
     * Adding items to the cart
     * with all objects, arrays
     * indeed we just save data to DB
     * ----------------------------------------
     *
     * @method addItems
     * --------------------------------
     * @param Products $item
     * ---------------------------------
     * ---------------------------------
     * @param int $itemId
     * ---------------------------------
     * ---------------------------------
     * @param Users $user
     * -----------------------------------
     *
     * @return void
     */

    public function addItems(Products $item, int $itemId, Users $user)
    {
        $this->users_id = $user['id'];
        $this->item_id = $itemId;
        $this->price = $item->price;
        $this->quantity = 1;
        $this->save();
    }
}
