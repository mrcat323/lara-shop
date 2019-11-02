<?php


namespace App\Traits;


use Illuminate\Support\Facades\DB;

trait Dry
{
    public function grabByToken(string $token)
    {
        return DB::table('password_resets')->where('token', $token)->first();
    }

    public function increaseQuantity($cartProduct, $request, array $response)
    {
        if ($product = $cartProduct->where('product_id', $request->id)->first()) {
            $product->increment('quantity');

            return response()->json($response);
        }
    }

    public function decreaseQuantity($cartProduct, $request, int $id, array $response)
    {
         if ($product = $cartProduct->where('product_id', $id)->where('quantity', '>', 1)->first()) {
            $product->decrement('quantity');
            
            return response()->json($response);
        }
    }
}
