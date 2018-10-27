<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Users;

use App\Products;

use App\Cart;

class MainController extends Controller
{

    /**
     * Home page
     *
     * @return \Illuminate\Http\Response
     */
    public function home()
    {
        // STAGE 1; Initing the objects

        $product = new Products;
        $user = new Users;
        $cart = new Cart;

        // STAGE 2; Obtaining the arguments

        /**
         * The User's data;
         * the authorized user's data
         * should be taken by cookies
         *
         * @var array
        */

        $userData = $user->getUser();

        $products = $product->all();
        $countIt = $cart->where(
            'users_id',
            $userData['id']
        )
        ->count();
        return view('pages.welcome')
                  ->with('user', $userData)
                  ->with('count', $countIt)
                  ->with('products', $products);
    }

    /**
     * About page
     *
     * @return \Illuminate\Http\Response
     * @return int|array
     */

    public function about()
    {
        // STAGE 1; Initing the objects

        $user = new Users;
        $cart = new Cart;

        // STAGE 2; Obtaining the arguments

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
        return view('pages.about')
                  ->with('count', $countIt)
                  ->with('user', $userData);
    }
}
