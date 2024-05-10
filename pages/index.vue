import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
import CompareView from '../pages/CompareView.vue'
import DrinksView from '../pages/DrinksView.vue'
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'Images',
    component: AboutView
  },
  {
    path: '/compare',
    name: 'Accordion',
    component: CompareView
  },
  {
    path: '/drinks',
    name: 'Grid System',
    component: DrinksView
  }
]

const router = new VueRouter({
  routes
})

export default router
