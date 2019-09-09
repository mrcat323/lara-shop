<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Schema;

class RepositoryServiceProvider extends ServiceProvider 
{


	public function register() 
	{
		$this->app->bind(
            'App\Repositories\ProductInterface',
            'App\Repositories\ProductRepository'
        );

        $this->app->bind(
            'App\Repositories\CategoryInterface',
            'App\Repositories\CategoryRepository'
        );

	}

	public function boot() 
	{
        Schema::defaultStringLength(255);
	}

}