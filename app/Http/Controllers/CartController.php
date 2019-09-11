<?php

namespace App\Http\Controllers;

use App\Cart;
use App\CartProduct;
use Illuminate\Http\Request;

class CartController extends Controller
{

    public function index()
    {
        $cartItems = auth()->user()->cart->products;

        return response()->json([
            'items' => $cartItems
        ]);
    }

    public function store(Request $request, CartProduct $cartProduct)
    {
        $user = auth()->user();
        $cart = $user->cart ?? $user->createCart();

        if ($user->can('create', Cart::class)) {
            if ($cartProduct->whereProductId($request->id)->count()) {
                $cartProduct->increment('quantity');

                return response()->json([
                    'status' => 1,
                    'msg' => 'Same item have been added one more time'
                ]);

            }

            $cart->products()->attach($request->id);

            return response()->json([
                'status' => 1,
                'msg' => 'An item added to cart'
            ]);
        }

        return response()->json([
            'status' => 0,
            'msg' => 'Please verify your account to add products to your cart!'
        ]);
    }

    public function destroy(Request $request)
    {
        auth()->user()->cart->products()->detach($request->id);

        return response()->json([
            'status' => 1,
            'msg' => 'An item removed to cart'
        ]);
    }

    public function empty(Request $request)
    {
        auth()->user()->cart->products()->detach($request->products);

        return response()->json([
            'status' => 1,
            'msg' => 'Successfully emptied!'
        ]);
    }

}
