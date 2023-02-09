import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import MainLayout from '@/views/layouts/Main.vue'
// import CleanLayout from '../views/layouts/Clean.vue'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
            pageTitle: 'Página de Inicio',
            layout: MainLayout,
            breadcrumb: [
                // {
                //     title: 'Counter',
                //     active: true,
                //     to: '/counter',
                // },
                {
                    title: 'Inicio',
                    to: '/'
                },
            ],
        },
    },
    {
        path: '/counter',
        name: 'counter',
        component: () => import('@/views/Counter.vue'),
        meta: {
            pageTitle: 'Count Page',
            layout: MainLayout,
            breadcrumb: [
                // {
                //     title: 'Card',
                //     active: true,
                //     to: '/card',
                // },
                {
                    title: 'Contadores',
                    to: '/'
                },
            ],
        },
    },
    {
        path: '/card',
        name: 'card',
        component: () => import('@/views/CardBasic.vue'),
        meta: {
            pageTitle: 'Card Page',
            layout: MainLayout,
            breadcrumb: [
                {
                    title: 'Card',
                    to: '/card'
                },
            ],
        },
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
            pageTitle: 'Dashboard',
            layout: MainLayout,
            breadcrumb: [
                {
                    title: 'Estadísticas',
                    to: '/dashboard'
                },
            ],
        },
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
