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
            if ($product = $cartProduct->where('product_id', $request->id)->first()) {
                $product->increment('quantity');

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
        ], 403);
    }

    public function destroy(CartProduct $cartProduct, $cart)
    {
        $userCart = auth()->user()->cart;

        if ($product = $cartProduct->where('product_id', $cart)->where('quantity', '>', 1)->first()) {
            $product->decrement('quantity');

            return response()->json([
                'status' => 1,
                'items' => $userCart->products,
                'msg' => 'An item removed for one more time'
            ]);
        }
        $userCart->products()->detach($cart);

        return response()->json([
            'status' => 1,
            'items' => $userCart->products,
            'msg' => 'An item removed to cart'
        ]);
    }
}
