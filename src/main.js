import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store.js'
import Accounting from 'accounting-js'
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(){
    return {x: 0, y: 200}
  }
})

Vue.filter('currency', val => {
  return Accounting.formatMoney(val)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
