import { createRouter, createWebHistory } from 'vue-router'
import HomeView    from '../views/HomeView.vue'
import GamesView   from '../views/GamesView.vue'
import AboutView   from '../views/AboutView.vue'
import PrivacyView from '../views/PrivacyView.vue'

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/',        component: HomeView,    meta: { title: 'OlisGamefactory – Indie Browser Games' } },
    { path: '/games',   component: GamesView,   meta: { title: 'Alle Spiele – OlisGamefactory' } },
    { path: '/about',   component: AboutView,   meta: { title: 'Über mich – OlisGamefactory' } },
    { path: '/privacy', component: PrivacyView, meta: { title: 'Datenschutzerklärung – OlisGamefactory' } },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title || 'OlisGamefactory'
})
