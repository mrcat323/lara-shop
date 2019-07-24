<?php

namespace App\Http\Controllers;


use App\Repositories\ProductInterface;

use App\Repositories\CategoryInterface;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    
    private $product;
    private $category;

    public function __construct(ProductInterface $product, CategoryInterface $category)
    {
        $this->product = $product;
        $this->category = $category;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = $this->product->withCategory();

        $result['products'] = $products;
        return $result;
    }

}
