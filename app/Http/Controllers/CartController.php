<?php

namespace App\Http\Controllers;

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
    	$user = $this->user->find(auth()->user()->id);

    	$cartItems = $user->cartItems->products;

    	$result['items'] = $cartItems;
    	return $result;

    }

    public function store(Request $request) 
    {
    	$product = $this->product->find($request->id);
    	$user = $this->user->find(auth()->user()->id);

    	$user->cartItems->create($product);

    	$result['status'] = 1;
    	$result['msg'] = 'An item added to cart';
    	return $result;
    }


}
