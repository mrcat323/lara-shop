// ajaxing through this
// Events class like
// we should do like this for not shitting the code
Events = {
    // register; sign up method
    Register: function (name, email, password) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.register,
            data: {
                name: name,
                email: email,
                password: password
            }
        }).done(function (data){
            if (data.status == 1) {
                window.location.replace('/');
            }
        });
    },
    // login; sign in method
    Login: function (email, password) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.login,
            data: {
                email: email,
                password: password
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
    saveChanges: function (name, password) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.saveChanges,
            data: {
                name: name,
                password: password
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
    addCart: function (id) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.addCart,
            data: {
                id: id
            }
        }).done(function (data) {
          let count = (data.count == 1) ? data.count + ' item ' : data.count + ' items ';
          $('.cart').html('You have ' + count + 'in your <a href="/cart"><i class="fa fa-shopping-cart"></i> cart take a look</a>');
        });
    },
    deleteItem: function (id) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.deleteItem,
            data: {
                id: id
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
    deleteAllItems: function () {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.deleteAllItems
        }).done(function (data){
            $('.jumbotron.cart').detach();
            $('.jumbotron').prepend('<div class="alert alert-success">You successfully removed all items from your cart</div>');
        });
    },
    deleteProduct: function (id) {
        $.ajax({
            type: 'POST',
            headers: Routes.header,
            url: Routes.deleteProduct,
            data: {
                id: id
            }
        }).done(function (data){
            return true;
        });
    },
    sendRequest: function (name, email, text) {
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
            
        })
    }
}
$('#register').click(function (){
    let name = $('#inputName').val(),
        email = $('#inputEmail').val(),
        password = $('#inputPassword').val();
    Events.Register(name, email, password);
});

$('#login').click(function (){
    let email = $('#inputEmail').val(),
        password = $('#inputPassword').val();
    Events.Login(email, password);
});

$('#saveChanges').click(function (){
    let name = $('#inputName').val(),
        password = $('#inputPassword').val(),
        password_confirm = $('#inputConfirm').val();
    if (password !== password_confirm) {
        // error message if passwords are not the same
        $('.alerts').prepend('<div class="alert alert-danger">Passwords doesn\'t match!</div>');
    } else {
        // else go update it
        Events.saveChanges(name, password);
    }
});
$(document).on('click', '.get-this', function (){
    let id = $(this).closest('.block').attr('id');
    Events.addCart(id);
    $('.jumbotron.cart').show();
});

$('#buy-cart').click(function (){
    $('.cart').hide();
    $('.form-signin').show();
});

$(document).on('click', '.delete', function (){
    let id = $(this).closest('.row-table').attr('id');
    $('tr#' + id).detach();
    Events.deleteItem(id);
});

$('.deleteAll').click(function (){
    $('.jumbotron').empty();
    Events.deleteAllItems();
});

$(document).on('click', '.delete-product', function(){
    let id = $(this).closest('.row-table').attr('id');
    // alert(id);
    $('tr#' + id).detach();
    Events.deleteProduct(id);
});

$('.create-it').click(function (){
    $('.table-responsive').hide();
    $('.create-it').hide();
    $('.delete-it').show();
    $('.form-create').show();
});

$('.delete-it').click(function (){
    $('.form-create').hide('slow');
    $('.delete-it').hide('slow');
    $('.table-responsive').show('slow');
    $('.create-it').show('slow');
});

$('#buy-now').click(function (){
    let name = $('#inputName').val(),
        email = $('#inputEmail').val(),
        about = $('#inputAddress').val();
    Events.sendRequest(name, email, about);
});