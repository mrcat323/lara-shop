@extends('layouts.main')

@section('content')
<div class="jumbotron">
<a href="/" class="btn btn-default">Go Back</a>
    
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
            @foreach ($products as $product)
                <tr class="row-table" id="{{$product->id}}">
                    <td>{{$product->title}}</td>
                    <td>{{$product->price}}$</td>
                    <td>{{$product->created_at}}</td>
                    <td><button class="btn btn-danger delete-product"><i class="fa fa-trash"></i></button></td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
    <button class="btn btn-default create-it"><i class="fa fa-plus"></i></button>
    <button style="display: none;" class="btn btn-default delete-it"><i class="fa fa-minus"></i></button>

   <div style="display: none;" class="form-create">
        {!! Form::open(['action' => 'User\SpecialController@create', 'method' => 'POST']) !!}
        <div class="form-group">
            {{Form::label('c_id', 'Category ID')}}
            {{Form::text('category_id', '', ['class' => 'form-control', 'id' => 'inputId'])}}
        </div>
        <div class="form-group">
            {{Form::label('title', 'Title')}}
            {{Form::text('title', '', ['class' => 'form-control', 'id' => 'inputTitle'])}}
        </div>
        <div class="form-group">
            {{Form::label('about', 'About the product')}}
            {{Form::textarea('about', '', ['class' => 'form-control', 'id' => 'inputAbout'])}}
        </div>
        <div class="form-group">
            {{Form::label('price', 'Price')}}
            {{Form::text('price', '', ['class' => 'form-control', 'id' => 'inputPrice'])}}
        </div>
        {{Form::submit('Create', ['class' => 'btn btn-primary'])}}
        {!! Form::close() !!}
   </div>
</div>
@endsection