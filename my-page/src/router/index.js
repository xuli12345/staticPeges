import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
let routes = [{
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    name: 'index',
    component: () => import("../views/ZOL/index.vue")
  },
  {
    path: '/h3cIndex',
    name: 'h3cIndex',
    component: () => import("@/views/H3C/h3cIndex.vue")
  },
  {
    path: '/bxgIndex',
    name: 'bxgIndex',
    component: () => import("@/views/BXG/bxgIndex.vue")
  }
]

export default new Router({
  routes
})
