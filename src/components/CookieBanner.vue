<template>
  <Transition name="cookie-slide">
    <div v-if="visible" class="cookie-banner" role="dialog" aria-label="Cookie-Hinweis">
      <div class="cookie-inner">
        <div class="cookie-text">
          <span class="cookie-icon">🍪</span>
          <div>
            <strong>Diese Website verwendet Cookies.</strong>
            Wir nutzen Cookies für den technischen Betrieb und – sofern du zustimmst –
            für personalisierte Werbung über Google AdSense.
            Mehr dazu in unserer
            <RouterLink to="/privacy" @click="accept">Datenschutzerklärung</RouterLink>.
          </div>
        </div>
        <div class="cookie-btns">
          <button class="btn btn-outline cookie-decline" @click="decline">Nur notwendige</button>
          <button class="btn btn-primary" @click="accept">Alle akzeptieren</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const STORAGE_KEY = 'ogf_cookie_consent'

onMounted(() => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    // Small delay so it doesn't flash before page renders
    setTimeout(() => { visible.value = true }, 600)
  }
})

function accept() {
  localStorage.setItem(STORAGE_KEY, 'all')
  visible.value = false
}

function decline() {
  localStorage.setItem(STORAGE_KEY, 'necessary')
  visible.value = false
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #1a1a2e;
  border-top: 1px solid #2d2d4e;
  box-shadow: 0 -4px 24px rgba(0,0,0,0.5);
  padding: 16px 20px;
}
.cookie-inner {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.cookie-text {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
  min-width: 260px;
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.5;
}
.cookie-text strong { color: #e2e8f0; }
.cookie-text a { color: #9d5cf5; }
.cookie-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
.cookie-btns {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
  flex-wrap: wrap;
}
.cookie-decline {
  font-size: 0.85rem;
  padding: 8px 16px;
}
/* Slide-up transition */
.cookie-slide-enter-active { transition: transform 0.3s ease, opacity 0.3s ease; }
.cookie-slide-leave-active { transition: transform 0.25s ease, opacity 0.25s ease; }
.cookie-slide-enter-from  { transform: translateY(100%); opacity: 0; }
.cookie-slide-leave-to    { transform: translateY(100%); opacity: 0; }
</style>
