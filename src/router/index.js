import Vue from 'vue'
import VueRouter from 'vue-router'
import Galery from '../views/Galery.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Galery
  },
]

const router = new VueRouter({
  routes
})

export default router
