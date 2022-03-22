import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    listGaji: [
      {title: 'Gaji Pokok', details: '800.000 x 1 periode', summary: '800.000', link: 'gaji', editing: false},
      {title: 'Uang Makan', details: '10.000 x 22 kehadiran', summary: '220.000', link: 'uangMakan', editing: false},
      {title: 'Uang Absen', details: '10.000 x 22 kehadiran', summary: '220.000', link: 'uangAbsen', editing: false},
      {title: 'Uang Transport', details: '10.000 x 22 kehadiran', summary: '220.000', link: 'uangTransport', editing: false},
      {title: 'Uang Lembur', details: '20.000 x 0 jam', summary: '0', link: 'uangLembur', editing: false}
  ],

    listUpahborongan: [
      {title: 'Spotting', details: 'Dari 2 layanan', summary: '20.000'}
  ],

    listTanggungan: [
      { title: 'Denda Keterlambatan', details: 'Telambat 120 Menit', summary: '200.000' },
      { title: 'Kasbon bayar kos', details: 'Kasbon * Rp 20.000', summary: '20.000' }
  ],

    listKomisi: [
      {title: 'Sales Keliling', details: 'Penjualan > Rp 3.000.000 + Komisi 0.7%', summary: '200.000' },
      {title: 'Komisi Sprei', details: '', summary: '20.000' }
  ],
  },
  
  getters: {

    getResultGaji(state){
      return state.listGaji.summary
    },

    getListGaji (state) {
      return state.listGaji
    },

    getListUpahborongan (state) {
      return state.listUpahborongan
    },

    getListKomisi (state) {
      return state.listKomisi
    },

    getListTanggungan (state) {
      return state.listTanggungan
    },
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  }
})


