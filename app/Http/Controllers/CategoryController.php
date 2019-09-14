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

        $result['categories'] = $categories;

        return $result;
    }

    public function show($id)
    {
        $category = $this->category->getById($id);
        $products = $category->products;

        $result['category'] = $category;
        $result['products'] = $products;

        return $result;
    }

    public function store(Request $request)
    {
        $data = [
            'name' => $request->name
        ];

        $this->category->create($data);

        $result['status'] = 1;
        $result['msg'] = 'The Category had been successfully created!';

        return $result;
    }

    public function update(Request $request)
    {
        $category = $this->category->getById($request->id);

        $category->update(['name' => $request->name]);

        $result['status'] = 1;
        $result['msg'] = 'The Category had been successfully updated!';

        return $result;
    }

    public function destroy(Request $request)
    {
        $id = $request->id;

        $category = $this->category->getById($id);

        foreach ($category->products as $product) {
            $product->delete();
        }

        $category->delete();

        $result['status'] = 1;
        $result['msg'] = 'You\'d successfully deleted the category';

        return $result;
    }
}
