// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {App} from './app'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'
// import 'bulma-switch/dist/css/bulma-switch.min.css'
import 'bulma-extensions/dist/css/bulma-extensions.min.css'
import 'bulma-extensions/dist/js/bulma-extensions.min.js'
// import 'font-awesome/css/font-awesome.min.css'
import localforage from 'localforage'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Auth from './app/dashboard/auth'
Vue.use(ElementUI)

Vue.prototype.$http = axios

Vue.config.productionTip = false

localforage.config({
  name: 'piview'
})

router.beforeEach((to, from, next) => {
  if (Auth.authenticated() || !to.meta.needAuth) {
    next()
  } else {
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
