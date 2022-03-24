import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    listGaji: [
      {title: 'Gaji Pokok', details: 1, summary: 800000, nominal: 800000, link: 'gaji'},
      {title: 'Uang Makan', details: 22, summary: 220000, nominal: 10000, link: 'uangMakan'},
      {title: 'Uang Absen', details: 22, summary: 220000, nominal: 10000, link: 'uangAbsen'},
      {title: 'Uang Transport', details: 22, summary: 220000, nominal: 10000, link: 'uangTransport'},
      {title: 'Uang Lembur', details: 0, summary: 0, nominal: 20000, link: 'uangLembur'}
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

    nyimpenNumber: {},

  },
  
  getters: {

    formatNumber () {
      return gaji => {
        if (gaji !== '' || gaji !== undefined || gaji !== 0 || gaji !== '0' || gaji !== null) {
            return gaji.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
        return gaji
      }
    },

    nyimpenNumber (state){
      return state.nyimpenNumber
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
    SET_NYIMPEN_NUMBER : (state, payLoad) => {
      state.nyimpenNumber = payLoad
    },

    editModalInput : ( state, { target, value } ) => {
      switch (target) {
        case "total_gajipokok":
          state.nyimpenNumber.value.nominal = value
          break
      }
    }

  },

  actions: {
    setNyimpenNumber : ({ commit }, payload) => {
      commit ('SET_NYIMPEN_NUMBER', payload )
    },

    editModal_Input : ({ commit }, payload) => {
      commit ('editModalInput', payload)
    },

    onSubmitModal : ({ commit }, payload) => {
      commit('MODAL_SUBMIT', payload)
    }
    
  },

  modules: {
  }
})


