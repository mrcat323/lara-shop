<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\ProductInterface;
use App\Repositories\CategoryInterface;

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

        return response()->json(compact('products'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->category->storeProduct($request->categoryId, [
            'title' => $request->title,
            'about' => $request->about,
            'price' => $request->price,
            'created_at' => now()
        ]);

        return response()->json([
            'status' => 1,
            'msg' => 'The Product had been successfully created!'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = $this->product->getById($id);

        return response()->json(compact('product'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    
    public function update(Request $request)
    {
        $this->product->update($request->categoryId, $request->id, [
            'title' => $request->title,
            'about' => $request->about,
            'price' => $request->price
        ]); 

        return response()->json([
            'status' => 1,
            'msg' => 'Product has been updated'
        ]);
            
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    
    public function destroy(Request $request)
    {
        $this->product->destroy($request->id);

        return response()->json([
            'status' => 1,
            'msg' => 'Deleted successfully!'
        ]);
    }
}
