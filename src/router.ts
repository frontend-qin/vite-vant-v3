import { createRouter, createWebHistory } from 'vue-router';

// 定义路由
const routes = [
    {
        path: '/',
        component: () => import('./pages/home/index.vue')
    },
    {
        path: '/mine',
        component: () => import('./pages/mine/index.vue')
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
