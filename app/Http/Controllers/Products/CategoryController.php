<?php

namespace App\Http\Controllers\Products;


use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Category;

use App\Users;

use App\Cart;


class CategoryController extends Controller
{
    /**
     * -----------------------------------------------------------
     * Show the products by category;
     * Relations been setted with category_id from products,
     * and `id` from category
     * -----------------------------------------------------------
     *
     * @param int $id
     *
     * @return Illuminate\Http\Response
     */

    public function show(int $id)
    {
        // STAGE 1; Initializing the classes; objects

        $user = new Users;
        $category = new Category;
        $cart = new Cart;

        // STAGE 2; Setting the variables

        /**
         * The User's data;
         * the authorized user's data
         * need be taken by cookies
         *
         * @var array
        */

        $userData = $user->getUser();

        $productsByCategory = $category->find($id);
        $countIt = $cart->count();

        // STAGE 3; Logic bomb

        // redirect by category's not existance

        if (is_null($productsByCategory)) {
            return redirect('/');
        }

        // getting all products by category id

        $products = $productsByCategory->products->all();
        return view('products.by-category')
                  ->with('user', $userData)
                  ->with('count', $countIt)
                  ->with('products', $products);
    }
}
