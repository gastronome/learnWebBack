import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Layout from '../view/layout/index'
const basicRouter = [{
  path:'',
  component:Layout,
  children:[{
      path:'dashboard',
      component:()=> import('@/view/dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
  }
  ]
},{
  path: '/404',
  // component: '@/view/404',
  component: () => import('@/view/404'),
  hidden: true
},

]
export default new Router({
  routes: basicRouter
})
