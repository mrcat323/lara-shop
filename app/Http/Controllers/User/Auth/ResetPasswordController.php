<?php

namespace App\Http\Controllers\User\Auth;


use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use Illuminate\Foundation\Auth\ResetsPasswords;

use App\Users;


class ResetPasswordController extends Controller
{

    use ResetsPasswords;

    /**
    * Show reset form to user.
    * with this form one can set new password for the profile
    *
    * @param \Illuminate\Http\Request $request
    * @param string $token
    *
    * @return \Illuminate\Http\Response
    */

    public function showResetForm(Request $request, $token = null)
    {
        return view('auth.password-reset')->with(
            ['token' => $token, 'email' => $request->email]
        );
    }
}
