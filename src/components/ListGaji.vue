<template lang="">
    <div>
        <div class="flex p-2 max-w-md" v-for="(listGaji, index) in getListGaji" :key="'listGaji'+index">
            <div class="flex-1 w-1/2 pl-2">
                <p class="text-sm">{{ listGaji.title }}</p>
                <p class="text-xs text-gray-500">{{ (listGaji.nominal).toLocaleString() }} x {{ listGaji.details }}</p>
            </div>
            <div class="">
                <dl class="flex justify-between items-center gap-4 m-2">
                    <dt class="text-sm">{{ (listGaji.nominal * listGaji.details).toLocaleString() }}</dt>
                    <router-link v-bind:to="'/edit/' + listGaji.link"><img src="../assets/editicon.svg" alt=""></router-link>
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
            'getListGaji',
            'formatNumber'
        ]),

        formatNominal() {
            let gaji = this.getListGaji.nominal
            return `Rp ${this.formatNumber(gaji)}`
        },
    },
    
}
</script>