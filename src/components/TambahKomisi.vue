<template>
    <div>
        <div name="modalEditGaji" class="modal max-w-md z-auto shadow-md rounded">
            <nav class="max-w-full p-4 mx-auto items-center flex bg-white shadow-sm justify-between">
                <div class="">
                    <p class="font-bold text-base text-center pl-36">Tambah Komisi</p>
                </div>
                <router-link to="/">
                    <button class=""><img src="../assets/closeicon.svg" class=""></button>
                </router-link>
            </nav>
        </div>
        <div class="mx-4 pt-4 p-4">
            <p class="text-sm text-gray-500">Nama Komisi</p>
            <input type="text" class="border-2 w-3/4 p-2" placeholder="Nama Komisi" autocomplete="off" v-model="newKomisi">
            <p class="text-sm text-gray-500 pt-4">Nominal</p>
            <div class="flex mx-auto">
                <p class="bg-gray-400 p-2 w-12 text-center">Rp</p>
                <input type="number" class="border-2 p-2 w-3/4" v-model="nominalKomisi"> 
            </div>
        </div>
        <div class="flex justify-center p-4">
            <button class="bg-white text-red-700 border-red-700 border-2 font-semibold text-base py-4 px-16 mx-4 rounded" @click="deleteKomisi()">Hapus</button>
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-4 px-16 rounded" @click="addKomisi()">Simpan</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            newKomisi: '',
            idKomisi: 3,
            nominalKomisi: ''
        }
    },
    computed: {
        ...mapGetters([
            'getListKomisi',
            'formatNumber',
        ]),        
    },
    methods: {
        ...mapActions({
            DELETEKOMISI: 'DELETEKOMISI',
            UPDATEKOMISI: 'UPDATEKOMISI',
            ADDKOMISI: 'ADDKOMISI'
        }),

        deleteKomisi(){
            this.DELETEKOMISI
        },

        addKomisi(){
            if (this.newKomisi.trim().length == 0){
                return
            }
            this.$store.dispatch('ADDKOMISI', {
            id: this.idKomisi,
            title: this.newKomisi,
            summary: this.nominalKomisi
            })

            this.newKomisi = ''
            this.nominalKomisi= ''
            this.idKomisi ++
        }

    },
}
</script>