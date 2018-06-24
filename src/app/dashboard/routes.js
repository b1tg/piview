import * as components from './components'

export default [
  {
    path: '/',
    name: 'index',
    meta: {
      needAuth: true
    },
    component: components.DbView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      needAuth: true
    },
    component: components.DbView
  },
  {
    path: '/switch',
    name: 'switch',
    meta: {
      needAuth: true
    },
    component: components.SwitchView
  },
  {
    path: '/camera',
    name: 'camera',
    meta: {
      needAuth: true
    },
    component: components.CameraView
  },
  {
    path: '/control',
    name: 'control',
    component: components.ControlView
  },
  // {
  //   path: '/tl',
  //   name: 'timeline',
  //   component: components.TimelineView
  // },
  // {
  //   path: '/demo',
  //   name: 'demo',
  //   component: components.DemoView
  // },
  {
    path: '/login',
    component: components.Login,
    meta: {
      needAuth: false
    },
    name: 'login'
  },
  {
    path: '/header',
    component: components.Header,
    name: 'header'
  }
]
