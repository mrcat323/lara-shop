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

        $result['products'] = $products;

        return $result;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $categoryId = $request->categoryId;
        $category = $this->category->getById($categoryId);

        $data = [
            'title' => $request->title,
            'about' => $request->about,
            'price' => $request->price,
            'created_at' => now()
        ];

        $category->products()->create($data);

        $result['status'] = 1;
        $result['msg'] = 'The Product had been successfully created!';

        return $result;
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

        $result['product'] = $product;

        return $result;
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
        $data = [
            'title' => $request->title,
            'about' => $request->about,
            'price' => $request->price
        ];

        $category = $this->category->getById($request->categoryId);

        $product = $this->product->getById($request->id);
        $product->category()->associate($category);
        $product->update($data);

        $result['status'] = 1;
        $result['msg'] = 'Product has been updated';

        return $result;
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

        $result['status'] = 1;
        $result['msg'] = 'Deleted successfully!';

        return $result;
    }
}
