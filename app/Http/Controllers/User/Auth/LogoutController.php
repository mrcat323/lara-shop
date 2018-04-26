<?php

namespace App\Http\Controllers\User\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LogoutController extends Controller
{
    /**
     * the logout action
     * 
     * @return redirect() -> home page
     */
    public function index()
    {
        if (isset($_COOKIE['email']) && isset($_COOKIE['password'])) {
            unset($_COOKIE['email']);
            unset($_COOKIE['email']);
            setcookie('email', '', time() - 3600, '/');
            setcookie('password', '', time() - 3600, '/');
            return redirect('/');
        }
    }
}
