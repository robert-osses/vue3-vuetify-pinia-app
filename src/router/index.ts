import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import CounterView from '../views/CounterView.vue';
import CardView from '../views/CardBasic.vue';


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
          pageTitle: 'Página de Inicio',
          breadcrumb: [
            {
              title: 'Counter',
              active: true,
              to: '/counter',
            },
            {
              title: 'Card',
              active: true,
              to: '/card'
            },
            {
              title: 'Inicio',
              to: '/'
            },
          ],
        },
    },
    {
        path: '/counter',
        name: 'Counter',
        component: CounterView,
        meta: {
          pageTitle: 'Count Page',
          breadcrumb: [
            {
              title: 'Inicio',
              active: true,
              to: '/',
            },
            {
              title: 'Card',
              active: true,
              to: '/card'
            },
            {
              title: 'Contador',
              to: '/'
            },
          ],
        },
    },
    {
      path: '/card',
      name: 'Card',
      component: CardView,
      meta: {
        pageTitle: 'Card Page',
        breadcrumb: [
          {
            title: 'Inicio',
            active: true,
            to: '/',
          },
          {
            title: 'Contador',
            active: true,
            to: '/counter',
          },
          {
            title: 'Card',
            to: '/card'
          },
        ],
      },
  }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
