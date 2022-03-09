<template>
    <div>
        <div class="flex p-2" v-for="(listDetail, index) in listDetails" :key="'listDetais'+index">
            <div class="flex-1 w-1/2 pl-2">
                <p class="text-sm">{{ listDetail.title }}</p>
                <p class="text-xs text-gray-500">{{ listDetail.details }}</p>
            </div>
            <div class="">
                <dl class="flex justify-between items-center gap-4 m-2">
                    <dt class="text-sm text-red-500">{{ listDetail.summary }}</dt>
                    <img src="../assets/editred.svg" alt="">
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return{
            listDetails: [
                { title: 'Denda Keterlambatan', details: 'Telambat 120 Menit', summary: '200.000' },
                { title: 'Kasbon bayar kos', details: 'Kasbon * Rp 20.000', summary: '20.000' }
            ]
        }
    }
}
</script>