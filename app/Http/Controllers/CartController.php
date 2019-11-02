<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Traits\Dry;
use App\CartProduct;
use Illuminate\Http\Request;

class CartController extends Controller
{
    use Dry;

    /**
     * View all user's items
     *
     * @return mixed
     */
    
    public function index()
    {
        $items = auth()->user()->cart->products;

        return response()->json(compact('items'));
    }

    public function store(Request $request, CartProduct $cartProduct)
    {
        $user = auth()->user();
        $cart = $user->cart ?? $user->createCart();

        if ($user->can('create', Cart::class)) {
            
            $this->increaseQuantity($cartProduct, $request, [
                'status' => 1,
                'msg' => 'An item added to cart'
            ]);       

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

    /**
     * Remove an item from cart
     * If an item is added more than one time, the quantity of it will be decreased
     *
     * @param \App\CartProduct $cartProduct
     * @param int $cart
     * @return mixed
     */

    public function destroy(CartProduct $cartProduct, $cart)
    {
        $userCart = auth()->user()->cart;
        
        $this->decreaseQuantity($cartProduct, $request, $cart, [
                'status' => 1,
                'items' => $userCart->products,
                'msg' => 'An item removed for one more time'
        ]);  
        
        $userCart->products()->detach($cart);

        return response()->json([
            'status' => 1,
            'items' => $userCart->products,
            'msg' => 'An item removed to cart'
        ]);
    }

    /**
     * Empty the cart in general, delete all items from the cart, not one-by-one, but together
     *
     * @param \Illuminate\Http\Request
     * @return mixed
     */

    public function empty(Request $request)
    {
        auth()->user()->cart->products()->detach($request->products);

        return response()->json([
            'status' => 1,
            'msg' => 'Successfully emptied!'
        ]);
    }
}
