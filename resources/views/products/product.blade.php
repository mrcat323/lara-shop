@extends('layouts.main')

@section('content')
<div class="row">
    <div class="jumbotron">
    	<div class="block" id="{{$product->id}}">
	        <div class="pull-right">
			@if (isset($_COOKIE['email']) && isset($_COOKIE['password']))
				<button class="btn btn-danger get-this">Buy</button>
			@endif	        </div>
	        <h2 class="text-center">{{$product->title}}</h2>
	        <p class="text">{!! $product->about !!}</p>
    	</div>
    </div>
</div>
@endsection