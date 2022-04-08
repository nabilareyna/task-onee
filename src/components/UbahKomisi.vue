<template>
    <div>
        <div name="modalEditGaji" class="modal max-w-md z-auto shadow-md rounded">
            <nav class="max-w-full p-4 mx-auto items-center flex bg-white shadow-sm justify-between">
                <div class="">
                    <p class="font-bold text-base text-center pl-36">Ubah Komisi</p>
                </div>
                <router-link to="/">
                    <button class=""><img src="../assets/closeicon.svg" class=""></button>
                </router-link>
            </nav>
        </div>
        <div class="mx-4 pt-4 p-4">
            <p class="text-sm text-gray-500">Nama Komisi</p>
            <input type="text" class="border-2 w-3/4 p-2" placeholder="Nama Komisi" autocomplete="off" v-model="findTitleKomisi">
            <p class="text-sm text-gray-500 pt-4">Nominal</p>
            <div class="flex mx-auto">
                <p class="bg-gray-400 p-2 w-12 text-center">Rp</p>
                <input type="number" class="border-2 w-3/4" v-if="visible == true" @blur="onBlurNumber">
                <input type="number" class="border-2 p-2 w-3/4" v-model="findNominalKomisi">
            </div>
        </div>
        <div class="flex justify-center p-4">
            <router-link to="/">
                <button class="bg-white text-red-700 border-red-700 border-2 font-semibold text-base py-4 px-16 mx-4 rounded" @click="deleteKomisi(id)">Hapus</button>
            </router-link>
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-4 px-16 rounded" @click="updateKomisi()">Simpan</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'komisi',
    data() {
        return {
            data: {},
            id: this.$route.params.id,
            'komisiTitle': '',
            nomin: '',
            'visible': false,
            'temp': ''
        }
    },
    computed: {
        ...mapGetters([
            'getListKomisi',
            'formatNumber',
        ]),
        findTitleKomisi(title){
            const index = this.$store.state.listKomisi.findIndex(item => item.id == title.id)
            //console.log(this.$store.state.listKomisi[komis].title)
            return this.$store.state.listKomisi[index].title
        },
        findNominalKomisi(nominal){
            const index = this.$store.state.listKomisi.findIndex(item => item.id == nominal.id)
            //console.log(this.$store.state.listKomisi[komis].title)
            return this.$store.state.listKomisi[index].nominal
        }        
    },
    methods: {
        ...mapActions({
            // DELETEKOMISI: 'DELETEKOMISI',
            editModalInput_Komisi: 'editModalInput_komisi',
            UPDATEKOMISI: 'UPDATEKOMISI',
        }),

        deleteKomisi(index){
            console.log(index)
            this.$store.dispatch('DELETEKOMISI', index)
        },

        updateKomisi(){
            this.UPDATEKOMISI
        },
        onBlurNumber(){
            this.visible = true;
            this.editModalInput_Komisi
        },

    },
}
</script>