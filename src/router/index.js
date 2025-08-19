import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/projects', component: () => import('../views/ProjectsView.vue') },
    { path: '/contact', component: () => import('../views/ContactView.vue') },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    }
})

export default router