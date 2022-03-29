<template>
    <div>
        <modal-template>
            <template v-slot:navText>Ubah Gaji Pokok</template>
            <template v-slot:modalContent>
                <div class="mx-auto pt-4 p-8">
                    <p class="text-sm text-gray-500 pb-4">Nominal</p>
                    <div class="flex mx-auto">
                        <p class="bg-gray-300 p-2 w-12 text-center">Rp</p>
                        <input type="number" class="border-2 w-28">
                        <input class="border-2 w-28">
                        <p class="text-4xl mx-4">&times;</p>    
                        <input type="number" class="border-2 w-16"> 
                        <p class="bg-gray-300 p-2 w-30 text-center">Periode</p> 
                    </div>
                </div>
                <div class="mx-12">
                    <dl class="container flex justify-between items-center">
                        <!-- Property name -->
                        <dt>Jumlah</dt>

                        <!-- Property value -->
                        <dd>{{ total_Gaji }}</dd>
                    </dl>
                </div>
            </template>
        </modal-template>
    </div>
</template>

<script>
import modalTemplate from './ModalTemplate'
export default {
    components: {
    'modal-template': modalTemplate,
    },
}
</script>