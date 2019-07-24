<?php

namespace App;

use App\User;

use App\Category;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    public $timestamps = true;
    protected $fillable = ['title', 'about', 'price'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

}
