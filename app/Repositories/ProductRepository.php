<?php

namespace App\Repositories;

use App\Product;

class ProductRepository implements ProductInterface
{
    private $product;

    public function __construct(Product $model)
    {
        $this->product = $model;
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

    public function update(int $id, array $attributes)
    {
        return $this->getById($id)->update($attributes);
    }

    public function destroy(int $id)
    {
        return $this->getById($id)->delete();
    }
}
