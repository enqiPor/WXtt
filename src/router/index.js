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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
