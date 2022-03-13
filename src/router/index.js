import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/mainpage',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/detailKehadiran',
    name: 'Kehadiran',
    component: {
      dialog: () => {

      }
    }
  }
]

const router = new VueRouter({
  routes 
})

export default router
