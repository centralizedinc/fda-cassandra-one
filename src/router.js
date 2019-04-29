import Vue from 'vue'
import Router from 'vue-router'

import Base from '@/layouts/BaseLayout'
import Login from '@/views/Login'
import store from '@/store'

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
          path: 'admin/users',
          name: 'User Administration',
          component: () => import('@/views/app/admin/Users.vue')
        },
        {
          path: 'admin/roles',
          name: 'Role Administration',
          component: () => import('@/views/app/admin/Roles.vue')
        },
        {
          path: 'admin/tables',
          name: 'Reference Tables',
          component: () => import('@/views/app/admin/Reference.vue')
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
          component: () => import('@/views/app/evaluator/EvaluatorTable.vue')
        },
        {
          path: 'dockets/decking',
          name: 'Decking',
          component: () => import('@/views/app/dockets/Decking.vue')
        },
        {
          path: 'cases',
          name: 'Cases',
          component: () => import('@/views/app/case/CaseList.vue')
        },
        {
          path: 'cases/evaluate',
          name: 'Evaluate Case',
          component: () => import('@/views/app/case/EvaluateCase.vue')
        },
        {
          path: 'cases/review',
          name: 'Review Case',
          component: () => import('@/views/app/case/ReviewCase.vue')
        },
        {
          path: 'cases/approve',
          name: 'Approve Case',
          component: () => import('@/views/app/case/ApproveCase.vue')
        },
        {
          path: 'cases/finalize',
          name: 'Finalize Case',
          component: () => import('@/views/app/case/FinalizeCase.vue')
        },
        {
          path: 'cases/execute',
          name: 'Execute Case',
          component: () => import('@/views/app/case/ExecuteCase.vue')
        },
        {
          path: 'cases/appeal',
          name: 'Cases on Appeal',
          component: () => import('@/views/app/case/AppealCase.vue')
        },
        {
          path: 'cases/search',
          name: 'Search Case',
          component: () => import('@/views/app/case/SearchCase.vue')
        },
        {
          path: 'cases/board',
          name: 'Case Board',
          component: () => import('@/views/app/case/CaseBoard.vue')
        },
        {
          path: 'cases/per',
          name: 'Post Execution Report',
          component: () => import('@/views/app/case/PerCase.vue')
        },
        {
          path: 'approval/details',
          name: 'Approve Case',
          component: () => import('@/views/app/approval/ApprovalDetails.vue')
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
          path: 'reviewer/details',
          name: 'Review Case',
          component: () => import('@/views/app/reviewer/ReviewerDetails.vue')
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
          component: () => import('@/views/app/evaluator/EvaluatorTable.vue')
        },
        {
          path: 'evaluator/details',
          name: 'Evaluate Case',
          component: () => import('@/views/app/evaluator/EvaluatorDetails.vue')
        },
        {
          path: 'evaluator',
          name: 'Evaluator',
          component: () => import('@/views/app/evaluator/evaluator.vue')
        },
        {
          path: 'finalize/details',
          name: 'Finalize Case',
          component: () => import('@/views/app/finalize/FinalizeDetails.vue')
        },
        {
          path: 'execute/details',
          name: 'Execute Case',
          component: () => import('@/views/app/execute/ExecuteDetails.vue')
        },
        {
          path: 'ViewEvaluator',
          name: 'ViewEvaluator',
          component: () => import('@/views/app/evaluator/ViewEvaluator.vue')
        },
        {
          path: 'appeal/details',
          name: 'Cases on Appeal',
          component: () => import('@/views/app/appeal/MotionForRecon.vue')
        },
        {
          path: 'per/details',
          name: 'Post Execution Report',
          component: () => import('@/views/app/appeal/PerDetails.vue')
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
        },
        {
          path: 'logout',
          name: 'Logout',
          component: () => import('@/layouts/UserLayout.vue')
        },
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