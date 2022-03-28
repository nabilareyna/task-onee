<template>
    <div>
        <modal-template>
            <template v-slot:navText>Ubah Gaji Pokok</template>
            <template v-slot:modalContent>
                <div class="mx-auto pt-4 p-8">
                    <p class="text-sm text-gray-500 pb-4">Nominal</p>
                    <div class="flex mx-auto">
                        <p class="bg-gray-300 p-2 w-12 text-center">Rp</p>
                        <input type="number" v-if="visible == true" @blur="onBlurNumber">
                        <input class="todo-item-edit border-2 w-28" v-if="visible == false" type="text" v-model="getListGaji[0].nominal" @focus="onFocusText">
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
            'temp': '',
            'gaji': ''
        }
    },
    computed: {
        ...mapGetters([
            'getListGaji',
            'formatNumber',
        ]),
        
        formatGaji() {
            let gaji = this.getListGaji[0].nominal
            return this.gaji.toString(gaji)
        },

        total_Gaji() {
            let totalGaji = this.getListGaji[0].nominal * this.getListGaji[0].periode

            return `Rp ${this.formatNumber(totalGaji)}`
        }
    },

    directives: {
        focus:{
            inserted: function(el) {
                el.focus()
            }
        }
    },

    components: {
    'modal-template': modalTemplate,
    },

    methods: {
        ...mapActions({
            editModal_Input: 'editModal_Input'
        }),

        onBlurNumber() {
        this.visible = true;
        this.editModal_Input
        },

        onFocusText() {
        this.visible = true;
        this.editModal_Input
        },
    },
        
}

</script>