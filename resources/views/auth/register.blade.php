@extends('layouts.main')

@section('content')
<div class="row">
    <div class="jumbotron">
        @if (isset($_COOKIE['email']) && isset($_COOKIE['password']))
            <div class="alert alert-danger">You have already authorized!</div>
        @else
            <div class="form-signin">
                <h2 class="form-signin-heading text-center">Please Register</h2>
                <label for="name" class="sr-only">Name</label>      
                <input type="text" name="name" id="inputName" class="form-control" placeholder="Your name please" required>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
                </div>
                <button id="register" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </div>
        @endif
    </div>
</div>
@endsection