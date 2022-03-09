<template lang="">
    <div>
        <div class="flex p-2 max-w-md" v-for="(listDetail, index) in listDetails" :key="'listDetais'+index">
            <div class="flex-1 w-1/2 pl-2">
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
    data: () => {
        return{
            listDetails: [
                {title: 'Gaji Pokok', details: '800.000 x 1 periode', summary: '800.000'},
                {title: 'Uang Makan', details: '10.000 x 22 kehadiran', summary: '220.000'},
                {title: 'Uang Absen', details: '10.000 x 22 kehadiran', summary: '220.000'},
                {title: 'Uang Transport', details: '10.000 x 22 kehadiran', summary: '220.000'},
                {title: 'Uang Lembur', details: '20.000 x 0 jam', summary: '0'}
            ]
        }
    }
}
</script>