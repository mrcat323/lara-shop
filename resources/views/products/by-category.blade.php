@extends('layouts.main') 
@section('content')
<div class="jumbotron">
    <div class="row">
        @if (sizeof($products) > 0)
        <div class="col-sm-12 col-xs-12">
            @foreach ($products as $product)
            <div class="col-sm-4 col-xs-12">
                <div class="block" id="{{$product->id}}">
                    <div class="panel panel-default">
                        <div class="panel-heading">{{$product->title}}</div>
                        <div class="panel-body">{{strip_tags($product->about)}}</div>
                        <div class="panel-footer">
                            <a href="/product/{{$product->id}}" class="btn btn-primary">More</a>
                            @if (isset($_COOKIE['email']) && isset($_COOKIE['password']))
                            <button class="btn btn-danger get-this">Buy</button>
                            @endif </div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
        @else
        <div class="col-sm-12 col-xs-12 col-md-9">
            <div class="col-sm-6 col-md-offset-5">
                <h3 class="text-center">Empty here...</h3>
            </div>
        </div>
        @endif
    </div>
</div>
@endsection