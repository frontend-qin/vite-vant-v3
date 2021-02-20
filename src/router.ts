import { createRouter, createWebHistory } from 'vue-router';

const history = createWebHistory();

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
    history,
    routes
});
