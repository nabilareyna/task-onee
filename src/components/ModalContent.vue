<template>
    <div>
        <div name="modalKehadiran" class="modal z-auto shadow-md rounded">
            <nav class="w-full p-4 items-center flex bg-white shadow-sm justify-between border-b-2">
                <div class="">
                    <p class="font-bold text-base text-center pl-24">Ubah Kehadiran</p>
                </div>
                <router-link to="/mainpage">
                    <button class=""><img src="../assets/closeicon.svg" class=""></button>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            backLink: "/mainpage",
            modalName: "modalKehadiran",
            open: true
    };
},
    beforeClick(to, from, next){
        next( (vm) => {
            vm.setBackLink(from.name);
        });
    },
    beforeLeave(to, from, next){
        this.closeModal();
        next()
    },
    methods: {
        async back() {
            await this.$router.push( { name: this.backLink } );
        },
        closeModal() {
            ('#${this.modalName}').modal("hide");
        },
        setBackLink(val) {
            this.backLink = val;
        }
    },
}
</script>

<style src="../assets/tailwind.css">
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
</style>