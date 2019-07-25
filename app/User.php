<?php

namespace App;


use App\Cart;

use Illuminate\Support\Str;

use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Mail;

use Illuminate\Notifications\Notifiable;

use Illuminate\Contracts\Auth\MustVerifyEmail;

use Tymon\JWTAuth\Contracts\JWTSubject;

use Illuminate\Foundation\Auth\User as Authenticatable;

use App\Mail\VerifyUser;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function cartItems()
    {
        return $this->hasMany(Cart::class);
    }

    public function sendVerificationCode() 
    {
        $token = Str::random(60);

        DB::table('verify_users')->insert([
            'email' => $this->email,
            'code' => $token
        ]);
        
        Mail::to($this)->send(new VerifyUser($this, $token));
    }   
}
