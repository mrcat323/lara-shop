<?php

namespace App\Repositories;

use App\Product;

class ProductRepository implements ProductInterface
{
    private $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function getAll()
    {
        return $this->product->latest()->get();
    }

    public function withCategory()
    {
        return $this->product->with('category')->latest()->get();
    }

    public function getById(int $id)
    {
        return $this->product->findOrFail($id);
    }

    public function create(array $attributes)
    {
        return $this->product->create($attributes);
    }

    public function update(int $categoryId, int $id, array $attributes)
    {
        $product = $this->getById($id);
        $product->category()->associate($categoryId);
        $product->update($attributes);

        return $product;
    }

    public function destroy(int $id)
    {
        return $this->getById($id)->delete();
    }
}
