<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="footer-copy">© {{ year }} OlisGamefactory · Oliver Winkelmann</span>
      <div class="footer-links">
        <RouterLink to="/games">Spiele</RouterLink>
        <RouterLink to="/about">Über mich</RouterLink>
        <a href="https://olisgamefactory.itch.io" target="_blank" rel="noopener">itch.io</a>
        <a href="https://ko-fi.com/olisgamefactory" target="_blank" rel="noopener">Ko-fi</a>
        <RouterLink to="/privacy">Datenschutz</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
