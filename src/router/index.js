import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Director from '@/views/Director.vue'
import Group from '@/views/Group.vue'
import Branch from '@/views/Branch.vue'

Vue.use(VueRouter)

const routes = [
  // 總行
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 處長
  {
    path: '/director',
    name: 'Director',
    component: Director
  },
  // 分區
  {
    path: '/group',
    // path: '/group/ :districtName',
    name: 'Group',
    component: Group
  },
  // 分行
  {
    path: '/branch',
    // path: '/branch/ :branchName',
    name: 'Branch',
    component: Branch
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
