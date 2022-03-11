<template>
    <div>
        <div class="flex p-4 border-b-2 border-dashed max-w-md" v-for="(listUpahborongan, index) in listUpahborongan" :key="'listUpahborongan'+index">
            <div class="flex-1 w-1/2">
                <p class="text-sm">{{ listUpahborongan.title }}</p>
                <p class="text-xs text-gray-500">{{ listUpahborongan.details }}</p>
            </div>
            <div class="">
                <dl class="flex justify-between items-center gap-4 m-2">
                    <dt class="text-sm">{{ listUpahborongan.summary }}</dt>
                    <img src="../assets/disabledicon.svg" alt="">
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        listUpahborongan(){
            return this.$store.state.listUpahborongan;
        },

        ...mapGetters([
            'getListUpahborongan'
        ])
    }
}
</script>