// ajaxing through this
// Events class like
// we should do like this for not shitting the code
Events = {
    // register; sign up method
    register(name, email, password) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.register,
            data: {
                name, email, password
            }
        }).done(function (data){
            if (data.status == 1) {
                window.location.replace('/');
            }
        });
    },
    // login; sign in method
    login(email, password) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.login,
            data: {
                email, password
            }
        }).done(function (data){
            // also here; error have been fixed
            if (data.status == 0) {
                $('.jumbotron').prepend('<div class="alert alert-danger">' + data.msg + '</div>');
            } else {
                // error fixed
                window.location.replace('/');
            }
        });
    },
    // settings' save changes
    saveChanges(name, password) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.saveChanges,
            data: {
                name, password
            }
        }).done(function (data){
            if (data.status == 1) {
                // empty the block from error alerts if they exist
                $('.alerts').empty();
                // add the notification to block with the class of alerts
                $('.alerts').prepend('<div class="alert alert-success">' + data.msg + '</div>');
                // after 2 seconds it redirects us to the main page
                setTimeout(function (){
                    window.location.replace('/');
                }, 2000);
            }
        });
    },
    addCart(id) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.addCart,
            data: {
                id
            }
        }).done(function (data) {
          let count = (data.count == 1) ? data.count + ' item ' : data.count + ' items ';
          $('.cart').html('You have ' + count + 'in your <a href="/cart"><i class="fa fa-shopping-cart"></i> cart take a look</a>');
        });
    },
    deleteItem(id) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.deleteItem,
            data: {
                id
            }
        }).done(function (data) {
            let count = (data.count == 1) ? data.count + ' item ' : data.count + ' items ';
            $('.pull-left').find('.total-count').text('Total ' + data.total + '$');
            $('.jumbotron.cart').html('You have ' + count + 'in your <a href="/cart"><i class="fa fa-shopping-cart"></i> cart take a look</a>');
            if (data.count == 0) {
              window.location.replace('/cart');
            }
        });
    },
    deleteAllItems() {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.deleteAllItems
        }).done(function (data){
            $('.jumbotron.cart').detach();
            $('.jumbotron').prepend('<div class="alert alert-success">You successfully removed all items from your cart</div>');
        });
    },
    deleteProduct(id) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.deleteProduct,
            data: {
                id
            }
        }).done(function (data){
            return true;
        });
    },
    buyCart(name, email, text) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.sendRequest,
            data: {
                name: name,
                email: email,
                about: text
            }
        }).done(function (data){
            if (data.status == 1) {
                // alert(data.message);
                // alert was just for test
                $('.form-signin').hide();
                $('.mainstance').show();
            } else {
                $('.jumbotron').empty();
                $('.jumbotron').prepend('<div class="alert alert-danger">Something went wrong...</div>');
            }

        });
    }
}
