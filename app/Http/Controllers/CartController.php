<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\User;
use Auth;

class CartController extends Controller
{
    private $user;
    private $product;

    public function __construct(User $user, Product $product)
    {
        $this->user = $user;
        $this->product = $product;
    }

    public function index()
    {
        $user = $this->user->getUser();

        $cartItems = $user->cart->products;

        $result['items'] = $cartItems;
        return $result;
    }

    public function store(Request $request)
    {
        $user = User::find(auth()->user()->id);
        $cart = $user->cart ? $user->cart : $user->createCart();

        if ($user->checkForVerification()) {
            $cart->products()->attach($request->id);

            $result['status'] = 1;
            $result['msg'] = 'An item added to cart';
            return $result;
        }

        $result['status'] = 0;
        $result['msg'] = 'Please verify your account to add products to your cart!';
        return $result;
    }

    public function destroy(Request $request)
    {
        $user = $this->user->getUser();

        $user->cart->products()->detach($request->id);

        $result['status'] = 1;
        $result['msg'] = 'An item removed to cart';
        return $result;
    }

    public function somethingNew(Product $product)
    {
    }

    public function empty(Request $request)
    {
        $user = $this->user->getUser();
        $cart = $user->cart;

        $cart->products()->detach($request->products);

        $result['status'] = 1;
        $result['msg'] = 'Successfully emptied!';
        return $result;
    }

    private function guard()
    {
        return Auth::guard();
    }
}
