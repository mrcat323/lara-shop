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
    Events.buyCart(name, email, about);
});
