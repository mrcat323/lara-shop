// Our routes
/*
Headers; Register url, login's too; and etc
*/

Routes = {
	header: {
        "Accept": "application/json",
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
    },
    register: '/register/action',
    login: '/login/action',
    saveChanges: '/settings/save',
    addCart: '/cart/add',
    deleteItem: '/cart/delete',
    deleteAllItems: '/cart/deleteAll',
    deleteProduct: '/personal/cabin/delete',
    createProduct: '/personal/cabin/create',
    sendRequest: '/cart/request',
}