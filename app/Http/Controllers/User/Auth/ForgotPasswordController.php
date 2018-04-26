<?php

namespace App\Http\Controllers\User\Auth;


use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use Illuminate\Foundation\Auth\SendsPasswordResetEmails;

use Illuminate\Support\Facades\Password;


class ForgotPasswordController extends Controller
{

    use SendsPasswordResetEmails;
    
    public function index()
    {
        return view('auth.reset');
    }

    public function broker()
    {
        return Password::broker('users');
    }
}
