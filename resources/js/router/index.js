import Vue from 'vue'
import VueRouter from 'vue-router'

// it were plugins and vuejs itself
Vue.use(VueRouter)

let Home = () => import(/* webpackChunkName: "home-page" */ '../components/pages/HomeComponent.vue')
let About = () => import(/* webpackChunkName: "about-page" */ '../components/pages/AboutComponent.vue')
let Register = () => import(/* webpackChunkName: "register-page" */ '../components/pages/RegisterComponent.vue')
let Login = () => import (/* webpackChunkName: "login-page" */ '../components/pages/LoginComponent.vue')
let Cart = () => import(/* webpackChunkName: "cart-page" */ '../components/pages/CartComponent.vue')
let Category = () => import(/* webpackChunkName: "category" */ '../components/pages/Categories/Category.vue')
let Products = () => import(/* webpackChunkName: "products" */ '../components/pages/Products/ListProducts.vue')

const router = new VueRouter({
    mode: 'history',
    routes: [
	    { path: '/', name: 'home', component: Home, meta: { auth: undefined } },
	    { path: '/about', component: About, meta: { auth: undefined } },
		{ path: '/register', component: Register, meta: { auth: false } },
		{ path: '/login', name: 'login', component: Login, meta: { auth: false } },
		{ path: '/cart', name: 'cart', component: Cart, meta: { auth: true } },
		{ path: '/products', name: 'products', component: Products, meta: { auth: undefined } },
		{ path: '/category/:id', name: 'category', component: Category, meta: { auth: undefined } },
	
    ]
})

export default router
