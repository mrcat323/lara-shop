<?php

namespace App\Http\Controllers\User;


use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Products;

use App\Users;

use App\Cart;


class SpecialController extends Controller
{

    /**
     * ----------------------------------------
     * The Administrator's panel; room
     * ----------------------------------------
     *
     * @param App\Products $product
     * @param App\Users $user
     * @param App\Cart $cart
     *
     * @return \Illuminate\Http\Response
     */

    public function admin(Products $product, Users $user, Cart $cart)
    {
        // STAGE 1; Calling the objects
        // passing them as arguments

        // STAGE 2; Arguments "earning"

        $userData = $user->getUser();

        // STAGE 3; The logic bomb

        // user has not status == 1 ?
        // he has no previliegies

        if ($userData['status'] == 0) {
            return redirect('/');
        }
        $countIt = $cart->count();
        $products = $product->all();
        return view('pages.personal')
                  ->with('user', $userData)
                  ->with('count', $countIt)
                  ->with('products', $products);
    }

    /**
     * ----------------------------------------
     * Deleting the product by its id
     * ----------------------------------------
     *
     * @param Illuminate\Http\Request $request
     * @param App\Products $product
     * ----------------------------------------
     *
     * @return array
     */

    public function delete(Request $request, Products $product)
    {
        // STAGE 1; Calling the objects
        // passed in arguments

        // STAGE 2; Arguments "earning"

        $productId = $request->id;

        // STAGE 3; The logic bomb

        $delete = $product->where('id', $productId)->delete();
        $result['status'] = 1;
        $result['msg'] = 'Successfully deleted!';
        return $result;
    }

    /**
     * ----------------------------------------
     * Create a product
     * ----------------------------------------
     *
     * @param Illuminate\Http\Request $request
     * @param App\Products $product
     * ----------------------------------------
     *
     * @return \Illuminate\Http\Response
     */

    public function create(Request $request, Products $product))
    {
        // STAGE 1; Calling the objects
        // passed in Arguments

        // STAGE 2; Arguments "earning"

        $product->category_id = $request->category_id;
        $product->title = $request->title;
        $product->about = $request->about;
        $product->price = $request->price;
        $product->save();
        $result['status'] = 1;
        $result['msg'] = 'Successfully created!';
        return redirect('/personal/cabin');
    }

}
