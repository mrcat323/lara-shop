<?php

namespace App\Http\Controllers\User\Auth;


use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use Illuminate\Foundation\Auth\ResetsPasswords;

use App\Users;


class ResetPasswordController extends Controller
{

    use ResetsPasswords;

    
    public function showResetForm(Request $request, $token = null)
    {
        return view('auth.password-reset')->with(
            ['token' => $token, 'email' => $request->email]
        );
    }
}
