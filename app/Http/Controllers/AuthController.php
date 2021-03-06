<?php

namespace App\Http\Controllers;

use Auth;
use Hash;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request, User $user)
    {
        $v = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:3|confirmed'
        ]);

        if ($v->fails()) {
            return response()->json(['status' => 'error'], 401);
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        $user->save();

        $user->sendVerificationCode();

        return response()->json(['status' => 'success'], 200);
    }

    public function login(Request $request)
    {
        $credentails = $request->only('email', 'password');

        if ($token = $this->guard()->attempt($credentails)) {
            return response()->json(['status' => 'success', 'token' => $token], 200)->header('Authorization', $token);
        }

        return response()->json(['error' => 'login_error'], 401);
    }

    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['status' => 'success', 'msg' => 'Logout successfully'], 200);
    }

    public function refresh()
    {
        if ($token = $this->guard()->refresh()) {
            return response()->json(['status' => 'success'], 200)->header('Authorization', $token);
        }

        return response()->json(['error' => 'refresh_token_error'], 401);
    }

    public function user(Request $request)
    {
        $user = User::find(auth()->user()->id);

        return response()->json(['status' => 'success', 'data' => $user], 200);
    }

    public function store(Request $request)
    {
        $token = $this->guard()->refresh();

        return response()->json(['user' => auth()->user()], 200)->header('Authorization', $token);
    }

    public function verifyUser($token)
    {
        $user = DB::table('verify_users')->where('code', $token)->first();

        if ($user) {
            $verifiedUser = User::where('email', $user->email)->first();
            $verifiedUser->email_verified_at = now();
            $verifiedUser->save();

            return redirect('/verify/success');
        }

        return response()->json(['status' => 'what the hell?!']);
    }

    private function guard()
    {
        return Auth::guard();
    }
}
