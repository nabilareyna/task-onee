<template>
    <div>
        <modal-template>
            <template v-slot:navText>Ubah Uang Makan</template>
            <template v-slot:modalContent>
                <div class="mx-4 pt-4 p-8">
                    <p class="text-sm text-gray-500 pb-4">Nominal</p>
                    <div class="flex mx-auto">
                        <p class="bg-gray-300 p-2 w-12 text-center">Rp</p>
                        <input type="text" class="border-2 w-28">
                        <p class="text-4xl mx-4">&times;</p> 
                        <input type="text" class="border-2 w-16"> 
                        <p class="bg-gray-300 p-2 w-30 text-center">Hari</p> 
                    </div>
                </div>
                <div class="mx-12">
                    <dl class="container flex justify-between items-center">
                        <!-- Property name -->
                        <dt>Jumlah</dt>

                        <!-- Property value -->
                        <dd>Rp 800.000</dd>
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