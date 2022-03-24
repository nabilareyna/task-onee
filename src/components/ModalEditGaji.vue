<template>
    <div>
        <modal-template>
            <template v-slot:navText>Ubah Gaji Pokok</template>
            <template v-slot:modalContent>
                <div class="mx-auto pt-4 p-8">
                    <p class="text-sm text-gray-500 pb-4">Nominal</p>
                    <div class="flex mx-auto">
                        <p class="bg-gray-300 p-2 w-12 text-center">Rp</p>
                        <input type="number">
                        <input class="todo-item-edit border-2 w-28" type="number" v-model="getListGaji[0].nominal">
                        <p class="text-4xl mx-4">&times;</p>    
                        <input type="number" class="border-2 w-16" v-model="getListGaji[0].details"> 
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
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'edit-gaji',
    data() {
        return {
            'visible': false,
            'temp': ''
        }
    },
    computed: {
        ...mapGetters([
            'getListGaji',
            'formatNumber',
            'nyimpenNumber'
        ]),
        
        formatGaji() {
            let gaji = this.$store.getters.getListGaji.summary
            return this.$store.getters.formatNumber(gaji)
        },

        total_Gaji() {
            let totalGaji = this.getListGaji[0].nominal * this.getListGaji[0].periode

            return `Rp ${this.formatNumber(totalGaji)}`
        }
    },
    components: {
    'modal-template': modalTemplate,
    },

    methods: {
        ...mapActions({
            editModal_Input: 'editModal_Input'
        }),

        saveNumber(e){ //handleSimpan
            let payload = {}
            switch(e){
                case "modalGaji":
                payload = {
                target : ["listGaji[0].details","listGaji[0].nominal"],
                value : [this.nyimpenNumber.value.periode, this.nyimpenNumber.value.nominal]
                }
                break;
            }
            if (payload.target) {
            this.onSubmitModal(payload)
            }
        },

        onBlurNumber() {
        this.visible = true;
        this.editModal_Input({
            value: [this.temp],
            target: ['gaji_pokok'],
            })
        },
    },
        
}

</script>