/*
 * Just get started with this.
 */

require('./bootstrap')

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import axios from 'axios'

Vue.router = router
Vue.use(router)

import auth from './auth'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
Vue.use(VueAuth, auth)
Vue.use({
    install(Vue) {
        Vue.prototype.$api = axios.create({
            baseURL: 'http://127.0.0.1:8000/api'
        })
    }
})
Vue.use(Buefy)


// now the components turn

import App from './components/App.vue'

const app = new Vue({
    el: '#app',
    components: { App },
    router
})
