import { createRouter, createWebHashHistory } from 'vue-router'
import One from '../views/001.vue'
import Two from '../views/002.vue'
import Three from '../views/003.vue'
import Four from '../views/004.vue'
import Five from '../views/005.vue'
import Six from '../views/006.vue'
import Seven from '../views/007.vue'


const routes = [
  {
    path: '/001',
    component: One
  },
  {
    path: '/002',
    component: Two
  },
  {
    path: '/003',
    component: Three
  },
  {
    path: '/004',
    component: Four
  },
  {
    path: '/005',
    component: Five
  },
  {
    path: '/006',
    component: Six
  },
  {
    path: '/007',
    component: Seven
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
