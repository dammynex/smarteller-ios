import Vue from 'nativescript-vue'
import Navigator from 'nativescript-vue-navigator'
import App from './components/App'
import { routes } from './routes'

Vue.use(Navigator, { routes })

Vue.config.silent = true

new Vue({
    render: h => h(App)
}).$start();
