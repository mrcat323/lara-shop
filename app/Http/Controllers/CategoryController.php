<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\CategoryInterface;

class CategoryController extends Controller
{
    private $category;

    public function __construct(CategoryInterface $category)
    {
        $this->category = $category;
    }

    public function index()
    {
        $categories = $this->category->getAll();

        return response()->json(compact('categories'));
    }

    public function show($id)
    {
        $category = $this->category->getById($id);
        $products = $category->products;

        return response()->json(compact('category', 'products'));
    }

    public function store(Request $request)
    {
        $this->category->create(['name' => $request->name]);

        return response()->json([
            'status' => 1,
            'msg' => 'The Category had been successfully created!'
        ]);
    }

    public function update(Request $request)
    {
        $category->update($request->id, ['name' => $request->name]);

        return response()->json([
            'status' => 1,
            'msg' => 'The Category had been successfully updated!'
        ]);
    }

    public function destroy(Request $request)
    {
        $this->category->destroy($request->id);

        foreach ($category->products as $product) {
            $product->delete();
        }

        return response()->json([
            'status' => 1,
            'msg' => 'You\'d successfully deleted the category'
        ]);
    }
}
