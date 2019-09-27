import Vue from 'vue'
import VueRouter from 'vue-router'

// it were plugins and vuejs itself
Vue.use(VueRouter)

let Home = () => import(/* webpackChunkName: "home-page" */ '../components/pages/HomeComponent.vue')
let About = () => import(/* webpackChunkName: "about-page" */ '../components/pages/AboutComponent.vue')
let Register = () => import(/* webpackChunkName: "register-page" */ '../components/pages/RegisterComponent.vue')
let Login = () => import (/* webpackChunkName: "login-page" */ '../components/pages/LoginComponent.vue')
let VerifiedAccount = () => import(/* webpackChunkName: "verified-account" */ '../components/pages/VerifiedAccountComponent.vue')
let Cart = () => import(/* webpackChunkName: "cart-page" */ '../components/pages/CartComponent.vue')
let Category = () => import(/* webpackChunkName: "category" */ '../components/pages/Categories/Category.vue')
let Products = () => import(/* webpackChunkName: "products" */ '../components/pages/Products/ListProducts.vue')
let CreateProduct = () => import(/* webpackChunkName: "create-product" */ '../components/pages/Products/CreateProduct.vue')
let EditProduct = () => import(/* webpackChunkName: "edit-product" */ '../components/pages/Products/EditProduct.vue')
let CreateCategory = () => import(/* webpackChunkName: "create-category" */ '../components/pages/Categories/CreateCategory.vue')
let EditCategory = () => import(/* webpackChunkName: "edit-category" */ '../components/pages/Categories/EditCategory.vue')
let ForgotPassword = () => import(/* webpackChunkName: "forgot-password" */ '../components/pages/ForgotPasswordComponent.vue')
let ResetPassword = () => import(/* webpackChunkName: "reset-password" */ '../components/pages/ResetPasswordComponent.vue')
let Page404 = () => import(/* webpackChunkName: "404-page" */ '../components/pages/404.vue')

const router = new VueRouter({
    mode: 'history',
    routes: [
	    { path: '/', name: 'home', component: Home, meta: { auth: undefined } },
	    { path: '/about', component: About, meta: { auth: undefined } },
		{ path: '/register', component: Register, meta: { auth: false } },
		{ path: '/login', name: 'login', component: Login, meta: { auth: false } },
		{ path: '/cart', name: 'cart', component: Cart, meta: { auth: true } },
		{ path: '/products', name: 'products', component: Products, meta: { auth: undefined } },
		{ path: '/product/create', name: 'create-product', component: CreateProduct, meta: { auth: true } },
		{ path: '/product/:id/edit', name: 'edit-product', component: EditProduct, meta: { auth: true } },
		{ path: '/category/:id', name: 'category', component: Category, meta: { auth: undefined },
		children: [
			{ path: 'edit', name: 'edit-category', component: EditCategory, meta: { auth: true } }
		] },
		{ path: '/category/create', name: 'create-category', component: CreateCategory, meta: { auth: true } },
		{ path: '/verify/success', name: 'verified-account', component: VerifiedAccount, meta: { auth: false } },
        { path: '/forgot-password', name: 'forgot-password', component: ForgotPassword, meta: { auth: false } },
        { path: '/reset/password/:token', name: 'reset-password', component: ResetPassword, meta: { auth: false } },
        { path: '*', name: '404-page', component: Page404, meta: { auth: undefined } }
    ]
})

export default router
