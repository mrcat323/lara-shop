<?php

namespace App;

use App\User;

use App\Category;

use App\Cart;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    public $timestamps = true;
    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function carts()
    {
    	return $this->belongsToMany(Cart::class);
    }

}
