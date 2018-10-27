<?php

namespace App\Http\Controllers\User\Auth;


use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use Illuminate\Foundation\Auth\SendsPasswordResetEmails;

use Illuminate\Support\Facades\Password;


class ForgotPasswordController extends Controller
{

    use SendsPasswordResetEmails;

    /**
    * The main template of resetting passwords
    * main form. sending reset-emails
    *
    * @return \Illuminate\Http\Response
    */

    public function index()
    {
        return view('auth.reset');
    }

    /**
    * Break the password or reset the password
    *
    * @return \Illuminate\Support\Facades\Password::broker($table)
    */

    public function broker()
    {
        return Password::broker('users');
    }
}
