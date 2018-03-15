import Vue from 'vue'
import Router from 'vue-router'
import nav from '@/components/nav'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components:
      {
        Nav:nav,
        Main:home
     
      }
    }
  ]
})
