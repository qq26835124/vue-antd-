import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Workbench from '@/components/Workbench'
import WorkOrder from '@/components/WorkOrder'
import SearchForm from '@/components/SearchForm'
import SearchForm2 from '@/components/SearchForm2'
import Editors from '@/components/Editors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/workbench',
      name: 'workbench',
      component: Workbench
    },
    {
      path: '/workOrder',
      name: 'workOrder',
      component: WorkOrder,
      redirect: '/workOrder/searchForm',
      children: [
        {
          path: 'searchForm',
          name: 'searchForm',
          component: SearchForm
        },
        {
          path: 'searchForm2',
          name: 'searchForm2',
          component: SearchForm2
        },
        {
          path: 'searchForm3',
          name: 'searchForm3',
          component: {template: `<div>searchForm3</div>`}
        }
      ]
    },
    {
      path: '/editors',
      name: 'editors',
      component: Editors
    }
  ]
})
