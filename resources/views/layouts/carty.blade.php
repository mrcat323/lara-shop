@if (isset($_COOKIE['email']) && isset($_COOKIE['password']))
    <div class="jumbotron cart" style="{{ $count == 0 ? 'display: none;' : 'display: block' }}">{{ ($count == 1) ? 'You have ' . $count . ' item' : 'You have ' . $count . ' items'}} in your <a href="/cart"><i class="fa fa-shopping-cart"></i> cart take a look</a></div>
@endif