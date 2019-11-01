<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    public $timestamps = true;
    protected $guarded = [];

    /**
     * Retrieve product's owner (category)
     *
     * @return \Illuminate\Database\Eloquent\Concerns\HasRelationships
     */

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * That fact that one product can be in many carts, here it means that it has "many" carts
     *
     * @return \Illuminate\Database\Eloquent\Concerns\HasRelationships
     */

    public function carts()
    {
        return $this->belongsToMany(Cart::class);
    }
}
