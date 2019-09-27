<?php

namespace App\Http\Controllers;

use App\Events\ResetPassword;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ForgotPasswordController extends Controller
{
    public function askForPasswordReset(Request $request)
    {
        $token = Str::random(60);
        if ($user = User::where('email', $request->email)->first()) {
            DB::table('password_resets')->insert([
                'email' => $user->email,
                'token' => $token,
                'created_at' => now()
            ]);

            event(new ResetPassword($user, $token));

            return response()->json([
                'status' => 1,
                'msg' => 'Check your E-Mail to finish resetting process'
            ]);
        }

        return response()->json([
            'status' => 0,
            'msg' => 'E-Mail your requested to reset doesn\'t exist!'
        ]);
    }
}
