import Vue from 'vue'
import Router from 'vue-router'

import Base from '@/layouts/BaseLayout'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Base,
      children: [{
        path: '',
        name: 'Login',
        component: Login
      }]
    },
    {
      path: '/app',
      component: () => import('@/layouts/UserLayout.vue'),
      children: [{
          path: '',
          name: 'Dashboard',
          component: () => import('@/views/app/Dashboard.vue')
        },
        {
          path: 'dockets',
          name: 'Dockets',
          component: () => import('@/views/app/dockets/DocketList.vue')
        },
        {
          path: 'dockets/view',
          name: 'Docket Details',
          component: () => import('@/views/app/dockets/ViewDocket.vue')
        },
        {
          path: 'dockets/new',
          name: 'New Docket',
          component: () => import('@/views/app/dockets/New.vue')
        },
        {
          path: 'dockets/search',
          name: 'View Dockets',
          component: () => import('@/views/app/dockets/Search.vue')
        },
        {
          path: 'dockets/new/old',
          name: 'New Docket',
          component: () => import('@/views/app/dockets/NewDocket.vue')
        },
        {
          path: 'dockets/evaluation',
          name: 'Docket Evaluation',
          component: () => import('@/views/app/evaluator/evaluator.vue')
        },
        {
          path: 'dockets/evaluationTable',
          name: 'Docket Evaluation',
          component: ()=> import('@/views/app/evaluator/EvaluatorTable.vue')
        },
        {
          path: 'dockets/decking',
          name: 'Decking',
          component: () => import('@/views/app/dockets/Decking.vue')
        }, ,
        {
          path: 'motion',
          name: 'Motion for Reconsideration',
          component: () => import('@/views/app/motion/MotionForRecon.vue')
        }, ,
        {
          path: 'cases',
          name: 'Cases',
          component: () => import('@/views/app/case/CaseList.vue')
        },
        {
          path: 'cases/view',
          name: 'Case Details',
          component: () => import('@/views/app/case/ViewCase.vue')
        },
        {
          path: 'cases/edit',
          name: 'Edit Case',
          component: () => import('@/views/app/case/EditCase.vue')
        },
        {
          path: 'cases/search',
          name: 'Search Case',
          component: () => import('@/views/app/case/SearchCase.vue')
        },
        {
          path: 'cases/details',
          name: 'Case Details',
          component: () => import('@/views/app/case/CaseDetails.vue')
        },
        {
          path: 'cases/board',
          name: 'Case Board',
          component: () => import('@/views/app/case/CaseBoard.vue')
        },
        {
          path: 'approval/table',
          name: 'approval',
          component: ()=> import('@/views/app/approval/ApprovalTable.vue')
        },
        {
          path: 'approval',
          name: 'approval',
          component: () => import('@/views/app/approval/approval.vue')
        },
        {
          path: 'ViewApproval',
          name: 'ViewApproval',
          component: () => import('@/views/app/approval/ViewApproval.vue')
        },
        {
          path: 'reviewer/table',
          name: 'Reviewer',
          component: ()=> import('@/views/app/reviewer/ReviewerTable.vue')
        },
        {
          path: 'reviewer',
          name: 'Reviewer',
          component: () => import('@/views/app/reviewer/reviewer.vue')
        },
        {
          path: 'ViewReviewer',
          name: 'ViewReviewer',
          component: () => import('@/views/app/reviewer/ViewReviewer.vue')
        },
        {
          path: 'evaluatorTable',
          name: 'EvaluatorTable',
          component: ()=> import('@/views/app/evaluator/EvaluatorTable.vue')
        },
        {
          path: 'evaluator/details',
          name: 'EvaluatorTable',
          component: ()=> import('@/views/app/evaluator/EvaluatorDetails.vue')
        },
        {
          path: 'evaluator',
          name: 'Evaluator',
          component: () => import('@/views/app/evaluator/evaluator.vue')
        },
        {
          path: 'ViewEvaluator',
          name: 'ViewEvaluator',
          component: () => import('@/views/app/evaluator/ViewEvaluator.vue')
        },
        {
          path: 'desicion',
          name: 'Desicion',
          component: () => import('@/views/app/desicion/desicion.vue')
        },
        {
          path: 'Viewdesicion',
          name: 'ViewDesicion',
          component: () => import('@/views/app/desicion/ViewDesicion.vue')
        },
        {
          path: 'profile',
          name: 'My Profile',
          component: () => import('@/views/app/profile/Profile.vue')
        },
        {
          path: 'security',
          name: 'Change Password',
          component: () => import('@/views/app/profile/Password.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})