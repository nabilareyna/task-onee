import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPageView.vue'
import ModalEditGaji from '../components/ModalEditGaji.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/edit/gaji',
    name: 'ModalEditGaji',
    component: ModalEditGaji
  },

  {
    path: '/edit/uangMakan',
    name: 'ModalEditUangMakan',
    component: () => import('../components/ModalEditUangMakan.vue')
  },

  {
    path: 'edit/:id'
  }

]

const router = new VueRouter({
  routes 
})

export default router
