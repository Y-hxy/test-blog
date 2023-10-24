import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: () => import("@/views/home")
    }, {
        path: '/main',
        name: 'main',
        component: () => import("@/views/main")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;