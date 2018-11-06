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
     * @param App\Products $product
     * @param App\Users $user
     * @param App\Cart $cart
     *
     * @return \Illuminate\Http\Response
     */
    public function home(Products $product, Users $user, Cart $cart)
    {
          // STAGE 1; Initing the objects
          // passed them in arguments

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
          $countIt = $cart->count();
          return view('pages.welcome')
                    ->with('user', $userData)
                    ->with('count', $countIt)
                    ->with('products', $products);
    }

    /**
     * About page
     *
     * @param App\Users $user
     * @param App\Cart $cart
     *
     * @return \Illuminate\Http\Response
     */

    public function about(Users $user, Cart $cart)
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
          $countIt = $cart->count();
          return view('pages.about')
                    ->with('count', $countIt)
                    ->with('user', $userData);
    }
}
