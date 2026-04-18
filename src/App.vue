<template>
  <div style="min-height:100vh; display:flex; flex-direction:column;">
    <NavBar />
    <main style="flex:1;">
      <RouterView />
    </main>
    <FooterBar />
    <CookieBanner />
  </div>
</template>

<script setup>
import NavBar      from './components/NavBar.vue'
import FooterBar   from './components/FooterBar.vue'
import CookieBanner from './components/CookieBanner.vue'
</script>
