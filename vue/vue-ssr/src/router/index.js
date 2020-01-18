// router.js
import Vue from 'vue'
import Router from 'vue-router'
// const Home = () => import('@/pages/Home')
// const About = () => import('@/pages/About')
import Home from '@/pages/Home'
import About from '@/pages/About'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ]
  })
}