import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddNewCard from '@/views/AddNewCard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-card',
    name: 'AddNewCard',
    component: AddNewCard
  }
]

const router = new VueRouter({
  routes
})

export default router
