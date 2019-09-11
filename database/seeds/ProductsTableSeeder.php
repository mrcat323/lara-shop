<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for ($i = 0; $i <= 21; $i++) {
            DB::table('products')->insert([
                'category_id' => 1,
                'title' => $faker->words(4, true),
                'about' => $faker->sentences(3, true),
                'price' => $faker->numberBetween(256, 4096),
                'created_at' => now()
            ]);
        }
    }
}
