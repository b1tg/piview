import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HelloWorld from '../app/components/HelloWorld'

import { routes } from '../app'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

// export default new Router({
//   mode: 'history',
//   routes: routes
// })

export default new Router({
  routes: routes
})
