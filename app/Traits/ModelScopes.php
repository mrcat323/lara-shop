<?php

namespace App\Traits;

trait ModelScopes
{
    public function scopeCount($query, int $value)
    {
        return $query->where('user_id', $value)->count();
    }
}
