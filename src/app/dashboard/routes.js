import * as components from './components'

export default [
  {
    path: '/',
    name: 'index',
    component: components.DbView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: components.DbView
  },
  {
    path: '/switch',
    name: 'switch',
    component: components.SwitchView
  },
  {
    path: '/camera',
    name: 'camera',
    component: components.CameraView
  },
  {
    path: '/control',
    name: 'control',
    component: components.ControlView
  },
  {
    path: '/tl',
    name: 'timeline',
    component: components.TimelineView
  },
  {
    path: '/demo',
    name: 'demo',
    component: components.DemoView
  }
]
