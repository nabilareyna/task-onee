<template>
    <div>
        <div id="modal-nav" class="modal z-auto shadow-md rounded">
            <nav class="w-full p-2 items-center flex bg-white shadow-sm justify-between border-b-2">
                <div id="nav-text" class="">
                    <slot name="nav-text" class="font-bold text-base text-center pl-24"></slot>
                </div>
                <router-link to="/">
                    <button class=""><img src="../assets/closeicon.svg" class=""></button>
                </router-link>
            </nav>
        </div>
        <div id="modal-content" class="">
            <slot name="modal-content" class=""></slot>
        </div>
        <div>
            <button class="">Simpan</button>
        </div>
    </div>
</template>