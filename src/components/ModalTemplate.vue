<template>
    <div class="max-w-md mx-auto">
        <div id="modal-nav" class="z-auto mx-auto shadow-md rounded">
            <nav class="p-2 mx-auto items-center flex bg-white shadow-sm justify-between">
                <p class="font-bold mx-auto text-base text-center">
                    <slot name="navText" class="">header</slot>
                </p>
                <router-link to="/">
                    <button class=""><img src="../assets/closeicon.svg" class=""></button>
                </router-link>
            </nav>
        </div>
        <div id="modal-content" class="mx-auto">
            <slot name="modalContent" class="">content</slot>
        </div>
        <div class="flex justify-center p-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-4 px-36 rounded">Simpan</button>
        </div>
    </div>
</template>