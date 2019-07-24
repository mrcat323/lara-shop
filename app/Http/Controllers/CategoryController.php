<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Category;

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

    
}
