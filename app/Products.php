<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $table = 'products';
    public $timestamps = true;

    /**
     * ------------------------------------------------------
     * Relations between Products and Category models
     * binding the products' `category_id` 
     * with category's `id`
     * ------------------------------------------------------
     * @see https://laravel.com/docs/5.5/eloquent-relationships#one-to-one
     * -----------------------------------------------------
     * 
     * @return mixed|array
     */

    public function category()
    {
        return $this->hasOne('App\Category', 'id', 'category_id');
    }

    /**
     * -------------------------------------------------------------------------
     * Relations between the Products and Category Models;
     * binding the Cart's `item_id` 
     * with our Products' `id`
     * -------------------------------------------------------------------------
     * @method cartItems
     * -------------------------------------------------------------------------
     * @see https://laravel.com/docs/5.5/eloquent-relationships#one-to-many
     * --------------------------------------------------------------------------
     * 
     * @return mixed|array
     */

    public function cartItems()
    {
        return $this->hasMany('App\Cart', 'item_id');
    }
}
