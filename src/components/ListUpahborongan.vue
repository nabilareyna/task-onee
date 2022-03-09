<template>
    <div>
        <div class="flex p-4 border-b-2 border-dashed max-w-md" v-for="(listDetail, index) in listDetails" :key="'listDetais'+index">
            <div class="flex-1 w-1/2">
                <p class="text-sm">{{ listDetail.title }}</p>
                <p class="text-xs text-gray-500">{{ listDetail.details }}</p>
            </div>
            <div class="">
                <dl class="flex justify-between items-center gap-4 m-2">
                    <dt class="text-sm">{{ listDetail.summary }}</dt>
                    <img src="../assets/disabledicon.svg" alt="">
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
                {title: 'Spotting', details: 'Dari 2 layanan', summary: '20.000'}
            ]
        }
    }
}
</script>