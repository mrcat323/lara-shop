import Vue from 'vue'
import VueRouter from 'vue-router'

// it were plugins and vuejs itself
Vue.use(VueRouter)

let Home = () => import(/* webpackChunkName: "home-page" */ '../components/pages/HomeComponent.vue')
let About = () => import(/* webpackChunkName: "about-page" */ '../components/pages/AboutComponent.vue')
let Register = () => import(/* webpackChunkName: "register-page" */ '../components/pages/RegisterComponent.vue')
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
	{ path: '/register', component: Register } 
    ]
})

export default router
