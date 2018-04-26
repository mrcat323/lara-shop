@extends('layouts.main')

@section('content')
<div class="jumbotron">
	<div class="alerts"></div>
	<h1 class="text-center">User Settings</h1>
	<div class="form-signin">
        <h2 class="form-signin-heading text-center">Please Change your info and save it</h2>
        <label for="name">Name</label>      
        <input type="text" name="name" id="inputName" class="form-control" value="{{$user['name']}}" required>
        <label for="inputPassword">Password</label>
        <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password">
        <input type="password" name="password" id="inputConfirm" class="form-control" placeholder="Confirm password">
        <button id="saveChanges" class="btn btn-lg btn-success btn-block" type="submit">Save Changes</button>
    </div>
</div>
@endsection