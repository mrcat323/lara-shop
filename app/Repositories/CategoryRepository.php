<?php

namespace App\Repositories;

use App\Category;

class CategoryRepository implements CategoryInterface
{
    private $category;

    public function __construct(Category $category)
    {
        $this->category = $category;
    }

    public function getAll()
    {
        return $this->category->all();
    }

    public function getById(int $id)
    {
        return $this->category->findOrFail($id);
    }

    public function storeProduct(int $id, array $attributes)
    {
        $category = $this->getById($id);
        $category->products()->create($attributes);

        return $category;
    }

    public function create(array $attributes)
    {
        return $this->category->create($attributes);
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
