<?php

namespace App\Http\Controllers;

use App\Cart;
use App\CartProduct;
use Illuminate\Http\Request;
use App\Product;
use App\User;

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

        return response()->json([
            'items' => $cartItems
        ]);
    }

    public function store(Request $request, CartProduct $cartProduct)
    {
        $user = auth()->user();
        $cart = $user->cart ? $user->cart : $user->createCart();

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
                'product' => $cart->products->find($request->id)->product,
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
        $user = $this->user->getUser();

        $user->cart->products()->detach($request->id);

        return response()->json([
            'status' => 1,
            'msg' => 'An item removed to cart'
        ]);
    }

    public function empty(Request $request)
    {
        $user = $this->user->getUser();
        $cart = $user->cart;

        $cart->products()->detach($request->products);

        return response()->json([
            'status' => 1,
            'msg' => 'Successfully emptied!'
        ]);
    }

}
