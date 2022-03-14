<template>
  <div id="app" class="">
    <div class="max-w-md">
      <MainPage />
      <router-view />
    </div>  
  </div>
</template>

<script>
import MainPage from './views/MainPage.vue'

export default {
  components: {
    MainPage
  }
}
</script>

<style src="./assets/tailwind.css">