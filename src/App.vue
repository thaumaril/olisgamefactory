<template>
  <div style="min-height:100vh; display:flex; flex-direction:column;">
    <NavBar />
    <main style="flex:1;">
      <RouterView />
    </main>
    <FooterBar />
    <CookieBanner @consent-given="loadAdSense" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar        from './components/NavBar.vue'
import FooterBar     from './components/FooterBar.vue'
import CookieBanner  from './components/CookieBanner.vue'

const STORAGE_KEY = 'ogf_cookie_consent'

function loadAdSense() {
  if (document.getElementById('adsense-script')) return
  const s = document.createElement('script')
  s.id    = 'adsense-script'
  s.async = true
  s.src   = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3027613365270695'
  s.crossOrigin = 'anonymous'
  document.head.appendChild(s)
}

onMounted(() => {
  if (localStorage.getItem(STORAGE_KEY) === 'all') {
    loadAdSense()
  }
})
</script>
