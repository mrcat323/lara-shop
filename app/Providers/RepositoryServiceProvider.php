<?php

namespace App\Providers;

use Schema;
use Illuminate\Support\ServiceProvider;

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
