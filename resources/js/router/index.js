import Vue from 'vue'
import VueRouter from 'vue-router'

// it were plugins and vuejs itself
Vue.use(VueRouter)

import Home from '../components/pages/HomeComponent.vue'
import About from '../components/pages/AboutComponent.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About }
    ]
})

export default router
