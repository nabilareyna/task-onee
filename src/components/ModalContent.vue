<template>
    <div>
        <div name="modalEditGaji" class="modal max-w-md z-auto shadow-md rounded">
            <nav class="max-w-full p-4 mx-auto items-center flex bg-white shadow-sm justify-between">
                <div class="">
                    <p class="font-bold text-base text-center pl-36">Ubah Gaji Pokok</p>
                </div>
                <router-link to="/">
                    <button class=""><img src="../assets/closeicon.svg" class=""></button>
                </router-link>
            </nav>
        </div>
        <div class="mx-4 pt-4 p-8">
            <p class="text-sm text-gray-500 pb-4">Nominal</p>
            <div class="flex mx-auto">
                <p class="bg-gray-400 p-2 w-12 text-center">Rp</p>
                <input type="text" class="border-2 w-28">
                <p class="text-4xl mx-4">&times;</p> 
                <input type="text" class="border-2 w-16"> 
                <p class="bg-gray-400 p-2 w-30 text-center">Periode</p> 
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
        <div class="flex justify-center p-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-4 px-36 rounded">Simpan</button>
        </div>
    </div>
</template>

<script>
export default{
//     data() {
//         return {
//             backLink: "/mainpage",
//             modalName: "modalKehadiran",
//             open: true
//     };
// },
//     beforeClick(to, from, next){
//         next( (vm) => {
//             vm.setBackLink(from.name);
//         });
//     },
//     beforeLeave(to, from, next){
//         this.closeModal();
//         next()
//     },
//     methods: {
//         async back() {
//             await this.$router.push( { name: this.backLink } );
//         },
//         closeModal() {
//             ('#${this.modalName}').modal("hide");
//         },
//         setBackLink(val) {
//             this.backLink = val;
//         }
//     },
}
</script>

<style src="../assets/tailwind.css">
// .modal {
//     position: fixed;
//     z-index: 999;
//     top: 20%;
//     left: 50%;
//     width: 300px;
//     margin-left: -150px;
// }
</style>