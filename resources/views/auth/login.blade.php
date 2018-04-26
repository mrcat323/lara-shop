@extends('layouts.main')

@section('content')
<div class="row">
    <div class="jumbotron">
        @if (isset($_COOKIE['email']) && isset($_COOKIE['password']))
            <div class="alert alert-danger">You have already authorized!</div>
        @else
            <div class="form-signin">
                <h2 class="form-signin-heading text-center">Please sign in</h2>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
                </div>
                <a href="{{route('password.email')}}">Forgot password?</a>
                <button id="login" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </div>
        @endif
    </div>
</div>
@endsection