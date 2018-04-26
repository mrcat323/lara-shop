<nav class="navbar navbar-default" role="navigation">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Lara-Shop</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Categories
                    <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="/index/1">Phones</a>
                    </li>
                    <li>
                        <a href="/index/2">Laptops</a>
                    </li>
                    <li>
                        <a href="/index/3">PC</a>
                    </li>
                    <li>
                        <a href="/index/4">Accecories</a>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="nav navbar-nav navbar-right">
            @if (isset($_COOKIE['email']) && isset($_COOKIE['password']))
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{$user['name']}}
                    <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="/settings">Settings</a>
                    </li>
                @if ($user['status'] == 1)
                    <li>
                        <a href="/personal/cabin">Personal</a>
                    </li>
                @endif
                    <li>
                        <a href="/cart">Cart</a>
                    </li>
                    <li>
                        <a href="/logout">Logout</a>
                    </li>
                </ul>
            </li>
            @else
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/register">Register</a>
                </li>
            @endif
        </div>
    </div>
    <!-- /.navbar-collapse -->
</nav>