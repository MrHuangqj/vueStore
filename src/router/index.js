import Vue from 'vue'
import Router from 'vue-router'
import Home from 'com/home/home'
import Category from 'com/category/category'
import Cart from 'com/cart/cart'
import User from 'com/user/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/user',
      component: User
    }
  ]
})
