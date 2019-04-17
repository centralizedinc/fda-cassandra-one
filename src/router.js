import Vue from 'vue'
import Router from 'vue-router'

import Base from '@/layouts/BaseLayout'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Base,
      children:[
        {
          path: '',
          name: 'Login',
          component:Login
        }
      ]
    },
    {
      path: '/app',
      component: () => import('@/layouts/UserLayout.vue'),
      children:[
        {
          path: '',
          name: 'Dashboard',
          component: ()=> import('@/views/app/Dashboard.vue')
        },
        {
          path: 'dockets',
          name: 'Dockets',
          component: ()=> import('@/views/app/dockets/DocketList.vue')
        },
        {
          path: 'dockets/view',
          name: 'Docket Details',
          component: ()=> import('@/views/app/dockets/ViewDocket.vue')
        },
        {
          path: 'dockets/new',
          name: 'New Docket',
          component: ()=> import('@/views/app/dockets/NewDocket.vue')
        },
        {
          path: 'dockets/decking',
          name: 'Decking',
          component: ()=> import('@/views/app/dockets/Decking.vue')
        },
        ,
        {
          path: 'motion',
          name: 'Motion for Reconsideration',
          component: ()=> import('@/views/app/motion/MotionForRecon.vue')
        },
        ,
        {
          path: 'cases',
          name: 'Cases',
          component: ()=> import('@/views/app/case/CaseList.vue')
        },
        {
          path: 'cases/view',
          name: 'Case Details',
          component: ()=> import('@/views/app/case/ViewCase.vue')
        },
        {
          path: 'cases/new',
          name: 'New Case',
          component: ()=> import('@/views/app/case/NewCase.vue')
        },
        {
          path: 'cases/board',
          name: 'Case Board',
          component: ()=> import('@/views/app/case/CaseBoard.vue')
        },
        {
          path: 'profile',
          name: 'My Profile',
          component: ()=> import('@/views/app/profile/Profile.vue')
        },
        {
          path: 'security',
          name: 'Change Password',
          component: ()=> import('@/views/app/profile/Password.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
