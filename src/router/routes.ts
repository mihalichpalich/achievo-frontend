import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import MissionPage from "@/pages/MissionPage/MissionPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import MissionIdPage from "@/pages/MissionIdPage.vue";

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
    },
    {
        path: '/missions/:id',
        component: MissionIdPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router