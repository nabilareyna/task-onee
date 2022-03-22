<template>
    <div>
        <modal-template>
            <template v-slot:navText>Ubah Gaji Pokok</template>
            <template v-slot:modalContent>
                <div class="mx-auto pt-4 p-8">
                    <p class="text-sm text-gray-500 pb-4">Nominal</p>
                    <div class="flex mx-auto">
                        <p class="bg-gray-300 p-2 w-12 text-center">Rp</p>
                        <div v-if="!editing" @dblclick="editTodo" class="todo-item-label">{{ summary }}</div>
                        <input v-else class="todo-item-edit border-2 w-28" type="text" v-model="title" @blur="doneEdit" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-focus>
                        <p class="text-4xl mx-4">&times;</p> 
                        <input type="text" class="border-2 w-16"> 
                        <p class="bg-gray-300 p-2 w-30 text-center">Periode</p> 
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
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            'summary': this.getResultGaji,
            'editing': this.listGaji.editing
        }
    },
    computed: {
        ...mapGetters([
            'getResultGaji'
        ]),
        getResultGaji(){
            return this.$store.getters.getResultGaji
        }
    },  

    components: {
    'modal-template': modalTemplate,
    },

    methods: {
        editSummary(){
            this.beforeEditCache = this.$store.state.getResultGaji
            this.editing = true
        },

        doneEdit() {
            if (this.title.trim() == '') {
            this.title = this.beforeEditCache
        }
            this.editing = false
            this.$emit('finishedEdit', {
                'id': this.id,
                'title': this.title,
                'completed': this.completed,
                'editing': this.editing,
        })
        },

        cancelEdit() {
            this.title = this.beforeEditCache
            this.editing = false
        },
    },
}

</script>