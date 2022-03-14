import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import ModalKehadiran from '../components/ModalContent.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/mainpage',
    name: 'MainPage',
    component: MainPage
  },
  // {
  //   path: '/detailKehadiran',
  //   name: 'Kehadiran',
  //   component: {
  //     dialog: () => {

  //     }
  //   }
  // },

  {
    path: '/modalKehadiran',
    name: 'ModalKehadiran',
    component: ModalKehadiran
  }

]

const router = new VueRouter({
  routes 
})

export default router
