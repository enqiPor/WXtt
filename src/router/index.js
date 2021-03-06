import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userlist',
    name: 'UserList',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserList.vue')
  },
    {
      path: '/childpage',
      name: 'ChildPage',
      component: () => import(/* webpackChunkName: "about" */ '../views/ChildPage.vue')
    },
  {
    path: '/text',
    name: 'Text',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Text.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
