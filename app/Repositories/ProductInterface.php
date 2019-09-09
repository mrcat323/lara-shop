<?php

namespace App\Repositories;


interface ProductInterface
{
	public function getAll();
	
    public function getById(int $id);

    public function create(array $attributes);

    public function update(int $id, array $attributes);

    public function destroy(int $id);
}
