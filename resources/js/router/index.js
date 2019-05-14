import Vue from 'vue'
import VueRouter from 'vue-router'

// it were plugins and vuejs itself
Vue.use(VueRouter)

let Home = () => import(/* webpackChunkName: "home-page" */ '../components/pages/HomeComponent.vue')
let About = () => import(/* webpackChunkName: "about-page" */ '../components/pages/AboutComponent.vue')
let Register = () => import(/* webpackChunkName: "register-page" */ '../components/pages/RegisterComponent.vue')
let Login = () => import (/* webpackChunkName: "login-page" */ '../components/pages/LoginComponent.vue')
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home, meta: { auth: undefined } },
        { path: '/about', component: About, meta: { auth: undefined } },
	{ path: '/register', component: Register, meta: { auth: false } },
	{ path: '/login', name: 'login', component: Login, meta: { auth: false } }
    ]
})

export default router
