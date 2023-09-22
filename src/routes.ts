import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import MissionPage from "@/pages/MissionPage.vue";
import AboutPage from "@/pages/AboutPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/missions',
        component: MissionPage
    },
    {
        path: '/about',
        component: AboutPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router