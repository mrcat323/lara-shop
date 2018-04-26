<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'category';
    public $timestamps = false;

    /**
     * ---------------------------------------------------
     * Relations between Products and Category
     * binding the `category_id` from products
     * with `id` from category
     * ---------------------------------------------------
     * @see https://laravel.com/docs/5.5/eloquent-relationships#one-to-many
     * ---------------------------------------------------
     * 
     * @return mixed|array
     */

    public function products()
    {
        return $this->hasMany('App\Products', 'category_id');
    }
}
