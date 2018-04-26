@extends('layouts.main') 
@section('content')
<div class="row">
    <div class="jumbotron">
        <div class="cart">
            <h2 class="text-center">Personal Cart</h2>
            @if (sizeof($stuff) > 0)
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($stuff as $s)


                    <tr class="row-table" id="{{$s->p_id}}">
                        <td>{{$s->title}}</td>
                        <td>{{$s->price}}$</td>
                        <td>{{$s->quantity}}</td>
                        <td>
                            <button class="btn btn-danger delete">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>

                    @endforeach
                </tbody>
            </table>
            <div class="pull-left">
                <div class="total">
                    <p>
                        <b class="total-count">Total $ {{$total}} </b>
                    </p>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="pull-left">
                <button id="buy-cart" class="btn btn-lg btn-primary">Buy</button>
                <button class="btn btn-lg btn-danger deleteAll">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
            @else
            <div class="col-sm-12 col-xs-12">
                <i class="text-center">Nothing here; I'm sorry for that</i>
            </div>
            <br>
            <br>
            <br>
            <div class="clearfix"></div>
            <div class="pull-left">
                <div class="total">
                    <p>
                        <b class="total-count">Total $ 0</b>
                    </p>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="pull-left">
                <div class="cart-buttons">
                    <button class="btn btn-lg btn-primary disabled">Buy</button>
                    <button class="btn btn-lg btn-danger disabled">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>
            @endif

        </div>

        <div class="form-signin" style="display:none;">
            <h2 class="form-signin-heading text-center">Please type info</h2>
            <label for="name">Name</label>
            <input type="text" name="name" id="inputName" class="form-control" placeholder="Your name please" required>
            <label for="inputEmail">Email address</label>
            <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="address">Address, information about yourself</label>
            <textarea style="margin: 0px; height: 224px; width: 296px;" name="about" id="inputAddress" placeholder="Please type your address that we could bring your products"
                cols="30" rows="10"></textarea>
            <div class="block">
                <b>Total $ {{$total}}</b>
            </div>
            <button id="buy-now" class="btn btn-lg btn-success btn-block" type="submit">Order</button>
        </div>

        <div class="mainstance" style="display: none;">
            <h2 class="text-center">Thank you for using our service!</h2>
            <b class="text-success">Check your E-Mail for more info;</b>
            <h3 class="text-warning">Please pay after ordering...</h3>
            <button class="btn btn-lg btn-warning">Pay</button>
        </div>
    </div>

</div>

@endsection