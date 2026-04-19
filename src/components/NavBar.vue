<template>
  <nav class="navbar">
    <div class="container navbar-inner">
      <RouterLink to="/" class="nav-logo" @click="close">Olis<span>Gamefactory</span></RouterLink>

      <!-- Desktop links -->
      <div class="nav-links desktop-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/games">Spiele</RouterLink>
        <RouterLink to="/about">Über mich</RouterLink>
        <a href="https://ko-fi.com/olisgamefactory" target="_blank" rel="noopener" class="nav-kofi">☕ Ko-fi</a>
      </div>

      <!-- Burger button (mobile only) -->
      <button class="burger" @click="toggle" :aria-expanded="open" aria-label="Menü öffnen">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div class="mobile-menu" :class="{ open }">
      <RouterLink to="/" @click="close">Home</RouterLink>
      <RouterLink to="/games" @click="close">Spiele</RouterLink>
      <RouterLink to="/about" @click="close">Über mich</RouterLink>
      <RouterLink to="/privacy" @click="close">Datenschutz</RouterLink>
      <RouterLink to="/impressum" @click="close">Impressum</RouterLink>
      <a href="https://ko-fi.com/olisgamefactory" target="_blank" rel="noopener" class="nav-kofi mobile-kofi" @click="close">☕ Ko-fi</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const open = ref(false)
const route = useRoute()

const toggle = () => { open.value = !open.value }
const close  = () => { open.value = false }

watch(() => route.path, close)
</script>

<style scoped>
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: background 0.2s;
}
.burger:hover span { background: var(--purple-l); }

.mobile-menu {
  display: none;
  flex-direction: column;
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 8px 0 16px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.mobile-menu.open {
  max-height: 400px;
}
.mobile-menu a {
  padding: 12px 24px;
  color: var(--text);
  font-size: 1rem;
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  transition: background 0.15s;
}
.mobile-menu a:last-child { border-bottom: none; }
.mobile-menu a:hover, .mobile-menu a.router-link-active {
  background: rgba(124,58,237,0.12);
  color: var(--purple-l);
}
.mobile-kofi {
  margin: 8px 16px 0;
  border-radius: 8px;
  border-bottom: none !important;
  text-align: center;
  background: var(--gold) !important;
  color: #1a1100 !important;
  font-weight: 600;
}
.mobile-kofi:hover { opacity: 0.9; }

@media (max-width: 640px) {
  .desktop-links { display: none; }
  .burger { display: flex; }
  .mobile-menu { display: flex; }
}
</style>

