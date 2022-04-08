import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    listGaji: [
      {id: '1', title: 'Gaji Pokok', details: 1, summary: 800000, nominal: 800000, link: 'gaji'},
      {id: '2', title: 'Uang Makan', details: 22, summary: 220000, nominal: 10000, link: 'uangMakan'},
      {id: '3', title: 'Uang Absen', details: 22, summary: 220000, nominal: 10000, link: 'uangAbsen'},
      {id: '4', title: 'Uang Transport', details: 22, summary: 220000, nominal: 10000, link: 'uangTransport'},
      {id: '5', title: 'Uang Lembur', details: 0, summary: 0, nominal: 20000, link: 'uangLembur'}
  ],

    listUpahborongan: [
      {title: 'Spotting', details: 'Dari 2 layanan', summary: '20.000'}
  ],

    listTanggungan: [
      {id: '1', title: 'Denda Keterlambatan', details: 'Telambat 120 Menit', summary: '200.000' },
      {id: '2 ', title: 'Kasbon bayar kos', details: 'Kasbon * Rp 20.000', summary: '20.000' }
  ],

    listKomisi: [
      {id: 1, title: 'Sales Keliling', details: 'Penjualan > Rp 3.000.000 + Komisi 0.7%', nominal: 200000 },
      {id: 2, title: 'Komisi Sprei', details: '', nominal: 20000 },
  ],

  activeModal: {}
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

    ACTIVE_MODAL (state) {
      return state.activeModal
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

    SET_ACTIVE_MODAL(state, payload){
      state.activeModal = payload
    },

    editModalInput : (state) => {
      if(state.listgaji.trim() == ''){
          state.listgaji[0].nominal = this.state.listGaji[0].temp
      }
    },

    editModalInputKomisi : (state) => {
      if(state.listKomisi.trim() == ''){
          state.listKomisi[0].nominal = this.state.listKomisi[0].temp
      }
    },

    updateNumber(state, gaji){
      const index = state.listGaji.findIndex(item => item.id == gaji.id )
      state.listGaji.splice(index, 1, {
        'id': gaji.id,
        'nominal': gaji.nominal,
        'summary': gaji.summary
      })
    },

    deleteKomisi(state, id){
      const index = state.listKomisi.findIndex(item => item.id == id)
      state.listKomisi.splice(index, 1)
    },

    updateKomisi(state, komisi){
      const index = state.listKomisi.findIndex(item => item.id == komisi.id)
      state.listKomisi.splice(index, 1, {
        'id': komisi.id,
        'title': komisi.title,
        'details': komisi.details,
        'summary': komisi.summary
      })
    },

    addKomisi(state, komisi){
      state.listKomisi.push({
        'id': komisi.id,
        'title': komisi.title,
        'details': komisi.details,
        'nominal': komisi.nominal
      })
    },
  
  },

  actions: {

    editModal_Input : ({ commit }) => {
      commit ('editModalInput')
    },

    editModalInput_Komisi : ({ commit }) => {
      commit ('editModalInputKomisi')
    },

    // onSubmitModal : ({ commit }, payload) => {
    //   commit('MODAL_SUBMIT', payload)
    // },

    DELETEKOMISI : ({ commit }, id) => {
      
      // console.log(id);
      commit ('deleteKomisi', id)
    },

    UPDATEKOMISI : ({ commit }) => {
      commit ('updateKomisi')
    },
    
    ADDKOMISI(context, komisi) {
      setTimeout(() => {
        context.commit('addKomisi', komisi)
      }, 100)
    }
  },

  modules: {
  }
})


