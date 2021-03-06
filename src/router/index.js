import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPageView.vue'
import ModalEditGaji from '../components/ModalEditGaji.vue'
import ModalEditUangLembur from '../components/ModalEditUangLembur.vue'
import ModalEditUangAbsen from '../components/ModalUangAbsen.vue'
import ModalEditUangTransport from '../components/ModalEditUangTransport.vue'
import UbahKomisi from '../components/UbahKomisi.vue'
import TambahKomisi from '../components/TambahKomisi.vue'
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
    path: '/edit/uangLembur',
    name: 'ModalEditUangLembur',
    component: ModalEditUangLembur
  },
  
  {
    path: '/edit/uangAbsen',
    name: 'ModalEditUangAbsen',
    component: ModalEditUangAbsen
  },

  {
    path: '/edit/uangTransport',
    name: 'ModalEditUangTransport',
    component: ModalEditUangTransport
  },

  {
    path: '/edit/komisi/:id',
    name: 'UbahKomisi',
    component: UbahKomisi
  },

  {
    path: '/add/komisi',
    name: 'TambahKomisi',
    component: TambahKomisi
  },

]

const router = new VueRouter({
  routes 
})

export default router
