<?php

namespace App;


use Illuminate\Notifications\Notifiable;

use Illuminate\Foundation\Auth\User as Authenticatable;

use App\Notifications\UserResetPasswordNotification;


class Users extends Authenticatable
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

    protected $table = 'users';

    public $timestamps = false;

    /**
     * Keeping the data here
     * 
     * @var array
     */

    public $result = [];

    /**
     * --------------------------------------------------------------------------------------
     * Relations with Cart Model's data
     * With that; in Cart model we did something like the same with the Users model;
     * not the same, but binded this model to that
     * --------------------------------------------------------------------------------------
     * @see https://laravel.com/docs/5.5/eloquent-relationships#one-to-many
     * --------------------------------------------------------------------------------------
     * @return mixed|array
     */
    
    public function cartItems()
    {
        return $this->hasMany('App\Cart');
    }


    /**
     * -----------------------------------------------------------
     * Get User info by cookies; 
     * such cookies like an "email", "password"
     * for now we should get all user's information by E-Mail
     * ------------------------------------------------------------
     * 
     * @return array
     */
    public function getUser()
    {
        if (isset($_COOKIE['email']) && isset($_COOKIE['password'])) {
            $email = $_COOKIE['email'];
            $password = $_COOKIE['password'];

            // getting the user info by cooked email

            $response = $this
            ->where([
                ['email', '=', $email]
            ])
            ->first();
            return $response;
        }
        
    }

    /**
     * --------------------------------------------
     * Notification for reseting the password;
     * by meaning sending the reset code;
     * -----------------------------------------
     * 
     * @param mixed $token
     * -----------------------------------------
     * 
     * @return App\Notifications\UserResetPasswordNotification $token
     */

    public function sendResetCode($token)
    {
        return $this->notify(new UserResetPasswordNotification($token));
    }
}
