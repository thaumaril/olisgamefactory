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
        <RouterLink to="/impressum">Impressum</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
  }
  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 20px;
  }
}
</style>

