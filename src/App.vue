<template>
  <div id="app">
    <main>
      <nav>
        <router-link to="/mainpage"></router-link> 
      </nav> 
      <router-view/> 
    </main>
    
  </div>
</template>

<script>
window.location.href = "http://localhost:8080/#/mainpage";
export default {
  
}
</script>

<style src="./assets/tailwind.css">