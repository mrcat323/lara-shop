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
     * @return array|int
     * 
     */
    public function admin()
    {
        // STAGE 1; Calling the objects

        $product = new Products;
        $user = new Users;
        $cart = new Cart;

        // STAGE 2; Arguments "earning"

        $userData = $user->getUser();

        // STAGE 3; The logic bomb

        // user has not status == 1 ? 
        // he has no previliegies
        
        if ($userData['status'] == 0) {
            return redirect('/');
        }
        $countIt = $cart->where(
            'users_id',
            $userData['id']
        )
        ->count();
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
     * ----------------------------------------
     * 
     * @return array
     */

    public function delete(Request $request)
    {
        // STAGE 1; Calling the objects

        $product = new Products;

        // STAGE 2; Arguments "earning"

        $id = $request->id;

        // STAGE 3; The logic bomb

        $delete = $product->where(
            'id',
            $id
        )->delete();
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
     * ----------------------------------------
     * 
     * @return void
     */
    
    public function create(Request $request)
    {
        // STAGE 1; Calling the objects
        
        $product = new Products;

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
