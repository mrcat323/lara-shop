<?php

namespace App;


use App\User;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $table = 'cart';
    public $timestamps = true;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
