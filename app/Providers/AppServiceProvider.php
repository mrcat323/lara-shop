<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
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

        Schema::defaultStringLength(255);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
