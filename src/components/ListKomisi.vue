<template>
    <div>
        <div class="flex pl-5 pr-2 pb-2"  v-for="(listKomisi, index) in getListKomisi" :key="'listKomisi'+index">
            <div class="flex-1 w-1/2 pt-2">
                <p class="text-sm">{{ listKomisi.title }}</p>
                <p class="text-xs text-gray-500">{{ listKomisi.details }}</p>
            </div>
            <div class="">
                <dl class="flex justify-between items-center gap-4 m-2">
                    <dt class="text-sm">{{ listKomisi.nominal }}</dt>
                    <router-link :to="'/edit/komisi/'+listKomisi.id"><img src="../assets/editicon.svg" alt=""></router-link>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'getListKomisi',
            'formatNumber'
        ]),
        formatNominal() {
            let gaji = this.getListKomisi.nominal
            return `Rp ${this.formatNumber(gaji)}`
        },
    }
}
</script>