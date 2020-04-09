import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Search from '@/views/Search'
import GoodsInfo from '@/views/GoodsInfo'
import Buy from '@/views/Buy'
import Pay from '@/views/Pay'
import Community from '@/views/Community'
import ShopingCart from '@/views/ShoppingCart'
import Me from '@/views/Me'
import Login from '@/views/Login'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path:'/goods/:id',
      name:'goodsInfo',
      component:GoodsInfo,
  },
  {
    path:'/goods/:id/buy',
    name:'buyInfo',
    component:Buy,
  },
  {
    path:'/goods/:id/buy/pay',
    name:'pay',
    component:Pay,
  },
  {
    path:'/community',
    name:'community',
    component:Community,
  },
  {
    path:'/shoppingCart',
    name:'shoppingCart',
    component:ShopingCart,
  },
  {
    path:'/me',
    name:'Me',
    component:Me,
  },
  {
    path:'/login',
    name:'login',
    component:Login,
  },
  {
    path:'/register',
    name:'register',
    component:Login,
  },
  {
    path:'/about',
    name:'aboutMe',
    component:About,
  },
  {
    path:'*',
    redirect:'/'
  }

]

const router = new VueRouter({
  routes
})

export default router
