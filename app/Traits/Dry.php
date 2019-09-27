<?php


namespace App\Traits;


use Illuminate\Support\Facades\DB;

trait Dry
{
    public function grabByToken($token)
    {
        return DB::table('password_resets')->where('token', $token)->first();
    }
}
