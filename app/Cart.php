<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $table = 'cart';
    public $timestamps = false;
    public $result = [];


    /* public function __construct($cart)
    {
        if ($cart) {
            $this->items = $cart->items;
        }
            
    } */

    public function products()
    {
        return $this->hasOne('App\Products', 'id', 'item_id');
    }

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
