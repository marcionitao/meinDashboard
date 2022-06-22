import Vue from 'vue'
import Router from 'vue-router'
import MyProjects from './views/MyProjects.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*',
      redirect: '/home',
    },
    { path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/myprojects',
      name: 'myprojects',
      component: MyProjects
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('./views/Skills.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
