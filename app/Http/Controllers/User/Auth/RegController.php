<?php

namespace App\Http\Controllers\User\Auth;


use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Users;


class RegController extends Controller
{

    /**
    * Main form page for signing up
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        $user = new Users;
        $userData = $user->getUser();
        return view('auth.register')
                  ->with('user', $userData);
    }

    /**
    * Registering the user
    *
    * @param \Illuminate\Http\Request $request
    *
    * @return \Illuminate\Http\Response
    * @return mixed
    */

    public function action(Request $request)
    {
        // STAGE 1; Initializing the classes;

        $user = new Users;

        // STAGE 2; Arguments;

        $name = $request->name;
        $email = $request->email;
        $password = password_hash($request->password, PASSWORD_BCRYPT);

        $user->name = $name;
        $user->email = $email;
        $user->password = $password;

        $user->save();

        $time = strtotime('+2 days');

        setcookie('email', $email, $time, '/');
        setcookie('password', $password, $time, '/');

        $result['status'] = 1;
        $result['msg'] = 'success';
        $result['html'] = view('pages.about');
        return response()->json($result);


    }
}
