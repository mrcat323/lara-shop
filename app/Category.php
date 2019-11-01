<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'category';
    public $timestamps = false;
    protected $guarded = [];

    /**
     * Retrieve all products
     *
     * @return \Illuminate\Database\Eloquent\Concerns\HasRelationships
     */
    
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
