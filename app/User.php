<?php

namespace App;

use App\Mail\VerifyUser;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

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

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }

    public function createCart()
    {
        return $this->cart()->save(new Cart);
    }

    public function getUser()
    {
        return $this->find(auth()->user()->id);
    }

    public function checkForVerification()
    {
        return (bool) $this->email_verified_at;
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
