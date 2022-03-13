<template>
    <div>
        <div class="flex p-2" v-for="(listTanggungan, index) in getListTanggungan" :key="'listTanggungan'+index">
            <div class="flex-1 w-1/2 pl-2">
                <p class="text-sm">{{ listTanggungan.title }}</p>
                <p class="text-xs text-gray-500">{{ listTanggungan.details }}</p>
            </div>
            <div class="">
                <dl class="flex justify-between items-center gap-4 m-2">
                    <dt class="text-sm text-red-500">{{ listTanggungan.summary }}</dt>
                    <img src="../assets/editred.svg" alt="">
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
            'getListTanggungan'
        ])
    }
}
</script>