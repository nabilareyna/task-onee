<template>
    <div>
        <div class="flex pl-5 pr-2 pb-2"  v-for="(listDetail, index) in listDetails" :key="'listDetais'+index">
            <div class="flex-1 w-1/2 pt-2">
                <p class="text-sm">{{ listDetail.title }}</p>
                <p class="text-xs text-gray-500">{{ listDetail.details }}</p>
            </div>
            <div class="">
                <dl class="flex justify-between items-center gap-4 m-2">
                    <dt class="text-sm">{{ listDetail.summary }}</dt>
                    <img src="../assets/editicon.svg" alt="">
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () =>{
        return{
            listDetails: [
                {title: 'Sales Keliling', details: 'Penjualan > Rp 3.000.000 + Komisi 0.7%', summary: '200.000' },
                {title: 'Komisi Sprei', details: '', summary: '20.000' }
            ]
        }
    }
}
</script>