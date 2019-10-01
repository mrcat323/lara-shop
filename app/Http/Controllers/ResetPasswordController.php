<?php

namespace App\Http\Controllers;

use App\User;
use App\Traits\Dry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
{
    use Dry;

    public function reset($token)
    {
        if ($user = $this->grabByToken($token)) {
            return redirect("/reset/password/{$token}");
        }

        return redirect('/forgot-password');
    }

    public function resetNow(Request $request, User $user)
    {
        if ($userByToken = $this->grabByToken($request->token)) {
            $user = $user->where('email', $userByToken->email)->first();
            $user->password = Hash::make($request->password);
            $user->save();

            return response()->json([
                'status' => 1,
                'msg' => 'You have successfully changed your password! You\'ll be redirected in 5 seconds'
            ]);
        }

        return response()->json([
            'status' => 0,
            'msg' => 'Invalid token'
        ]);
    }
}
