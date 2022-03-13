<template class="">
    <main class="container max-w-full mx-auto md:max-h-screen max-h-full bg-gray-400">
        <section class="sticky top-0 max-w-full mx-auto bg-white">
            <nav class="text-center text-base font-bold p-2 shadow-md mx-auto">Faktur Gaji</nav>
        </section>
        <section id="container_header" class="p-4 bg-white max-w-full border-b-2 border-dashed">
            <div>
                <p class="text-lg font-bold">Bani Isrofil</p>
                <p class="text-sm text-gray-500">10 Feb 2020 - 10 Mar 2020</p>
            </div>            
        </section>
        <section id="container_kehadiran" class="bg-white">
            <div class="border-b-8 bg-white">
                <dl class="container items-center flex justify-between pt-4 pb-4 m-auto bg-white">
                    <!-- Property name -->
                    <dt class="text-sm text-gray-400 font-semibold w-1/2 pl-4">Masuk 23 hr, Tdk masuk 4 hr, Terlambat 100 menit</dt>
                    <!-- Property value -->
                    <button class="button text-blue-600 font-semibold text-sm pr-6" @click="open = true">Lihat Detail</button>
                <!-- <div v-if="open" class="modal shadow-md rounded">
                    <nav class="w-full p-4 items-center flex bg-white shadow-sm justify-between border-b-2">
                        <div class="">
                            <p class="font-bold text-base text-center pl-24">Ubah Kehadiran</p>
                        </div>
                        <button @click="open = false" class=""><img src="../assets/closeicon.svg" class=""></button>
                    </nav>
                </div> -->
                </dl>
            </div>
        </section>
        <section id="container_gaji" class="border-t-8 bg-white">
            <div class="pl-4 pt-4 pb-2">
                <p class="font-bold text-base">Gaji</p>
            </div>
            <ListGaji />
            <section id="subtotal_gaji" class="">
                <div id="subtotal_gaji" class="border-b-8">
                    <dl class="container items-center flex justify-between m-2 p-2">
                        <!-- Property name -->
                        <dt class="text-base font-semibold pt-2">Subtotal Gaji</dt>

                        <!-- Property value -->
                        <dd class="text-base font-semibold pr-4 pt-2">Rp 1.660.000</dd>
                    </dl>
                </div> 
            </section> 
        </section>
        <section class="bg-white">
            <section class="bg-white">
                <div class="max-w-md border-t-8 border-b-2">
                    <dl class="container items-center flex justify-between pt-4 pb-4 m-auto">
                        <!-- Property name -->
                        <dt class="text-base font-bold w-1/2 pl-4">Upah Borongan</dt>
                        <!-- Property value -->
                        <button class="button text-blue-600 font-semibold text-base pr-6">Lihat Detail</button>
                    <!-- <div v-if="open" class="modal shadow-md rounded">
                        <nav class="w-full p-4 items-center flex bg-white shadow-sm justify-between border-b-2">
                            <div class="">
                                <p class="font-bold text-base text-center pl-24">Ubah Kehadiran</p>
                            </div>
                            <button @click="open = false" class=""><img src="../assets/closeicon.svg" class=""></button>
                        </nav>
                    </div> -->
                    </dl>
                </div>
            </section>
            <ListUpahborongan />
            <section id="subtotal_gaji" class="">
                <div id="subtotal_gaji" class="border-b-8">
                    <dl class="container items-center flex justify-between m-2 p-2">
                        <!-- Property name -->
                        <dt class="text-base font-semibold pt-2">Subtotal Upah</dt>

                        <!-- Property value -->
                        <dd class="text-base font-semibold pr-4 pt-2">Rp 20.000</dd>
                    </dl>
                </div> 
            </section>
        </section>
        <section class="bg-white border-t-8">
            <div class="pl-4 pt-4 pb-4 border-b-2">
                <p class="font-bold text-base">Komisi</p>
            </div>
            <section class="pl-4 pb-2 pt-4">
                <div class="flex items-center">
                    <img src="../assets/plusicon.svg" class="">
                    <p class="text-blue-600 text-sm font-semibold pl-2">Tambah komisi lain...</p>
                </div>
            </section>
            <ListKomisi />
            <section id="subtotal_gaji" class="">
                <div id="subtotal_gaji" class="border-b-8">
                    <dl class="container items-center flex justify-between m-2 p-2">
                        <!-- Property name -->
                        <dt class="text-base font-semibold pt-2">Subtotal Komisi</dt>

                        <!-- Property value -->
                        <dd class="text-base font-semibold pr-4 pt-2">Rp 220.000</dd>
                    </dl>
                </div> 
            </section>
        </section>
        <section class="bg-white">
            <div class="border-t-4 border-b-2 p-4">
                <header class="text-base font-bold">Tanggungan</header>
                <p class="text-xs text-gray-500">Karyawan ini memiliki tanggungan Rp 570.000</p>
            </div>
            <section class="pl-4 pb-2 pt-4">
                <div class="flex items-center">
                    <img src="../assets/plusicon.svg" class="">
                    <p class="text-blue-600 text-sm font-semibold pl-2">Tambah pembayaran tanggungan...</p>
                </div>
            </section>
            <ListTanggungan />            
            <section id="subtotal_gaji" class="">
                <div id="subtotal_gaji" class="border-b-8">
                    <dl class="container items-center flex justify-between m-2 p-2">
                        <!-- Property name -->
                        <dt class="text-base font-semibold pt-2">Tanggungan Dibayar</dt>

                        <!-- Property value -->
                        <dd class="text-base font-semibold pr-4 pt-2 text-red-500">(-) Rp 220.000</dd>
                    </dl>
                </div> 
            </section>
        </section>
        <section class="border-t-4 bg-white p-4">
            <section class="w-1/2 inline-block">
                <div class="inline-block">
                    <p class="text-xl font-bold">Total Gaji Bersih</p>
                </div>
                <div class="inline-block pl-1">
                    <img src="../assets/checkicon.svg" alt="">
                </div>
            </section>
            <div class="inline-block float-right">
                <p class="text-xl font-bold pl-2">Rp 2.124.000</p>
            </div>
            <div class="w-80 pt-2">
                <p class="text-xs text-gray-500">Nominal akhir yang diterima karyawan setelah ditambah komisi dikurangi pembayaran tanggungan (jika ada).</p>
            </div>
        </section>
        <section class="bg-white">
            <div class="flex justify-center p-4">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold py-4 px-36 rounded">
                        Berikutnya 
                    </button>
            </div>
        </section>
    </main>
</template>

<script>
import ListGaji from '../components/ListGaji'
import ListUpahborongan from '../components/ListUpahborongan'
import ListKomisi from '../components/ListKomisi'
import ListTanggungan from '../components/ListTanggungan'

export default {
    components: {
        ListGaji,
        ListUpahborongan,
        ListKomisi,
        ListTanggungan
    }
}
</script>

<style src="../assets/tailwind.css">
