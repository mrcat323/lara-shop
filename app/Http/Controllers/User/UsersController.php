<?php

namespace App\Http\Controllers\User;


use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Users;

use App\Cart;


class UsersController extends Controller
{

	/**
	 * ----------------------------------------
	 * Viewing the settings page
	 * ----------------------------------------
	 *
   * @return \Illuminate\Http\Response
	 * @return int|array
	 */

    public function settingsPlain()
    {
		// STAGE 1; Initing the objects

		$user = new Users;
		$cart = new Cart;

		// STAGE 2; Getting the arguments

		/**
         * The User's data;
         * the authorized user's data
         * should be taken by cookies
         *
         * @var array
    */

		$userData = $user->getUser();
		$countIt = $cart->where(
            'users_id',
            $userData['id']
        )
        ->count();
		return view('pages.settings')
    				  ->with('count', $countIt)
        			->with('user', $userData);
	}

	/**
	 * --------------------------------------------------------------------------------
	 * Save changes after user's posting the information
	 * from settings page, here;
	 * --------------------------------------------------------------------------------
	 *
	 * @param Illuminate\Http\Request $request
	 * --------------------------------------------------------------------------------
	 *
	 * @return array
	 */

    public function saveChanges(Request $request)
    {
		// STAGE 1; "New-ing" the objects; calling them

		$user = new Users;

		// STAGE 2; Receiving the arguments

		$userData = $user->getUser();

		// STAGE 3; The logic bomb

    	$userUpdateInfo = $user->find($userData['id']);
    	$userUpdateInfo->name = $request->name;
    	if (!is_null($request->password)) {
    		$userUpdateInfo->password = password_hash($request->password, PASSWORD_BCRYPT);
    	}
    	$userUpdateInfo->save();
    	$result['status'] = 1;
    	$result['msg'] = 'You successfully updated your info!';
    	return $result;
    }
}
