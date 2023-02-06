import { defineStore } from 'pinia';


export const useDrawerStore = defineStore('drawer', {

    state: () => ({
        drawer: true,
        rail: true,
        navigationItems : [
            {
                icon: 'mdi-home',
                title: 'Inicio',
                value: 'inicio',
                to: 'home',
            },
            {
                icon: 'mdi-plus-circle',
                title: 'Contadores',
                value: 'counter',
                to: 'counter',
            },
            {
                icon: 'mdi-tag',
                title: 'Cards',
                value: 'card',
                to: 'card',
            },
        ],
    }),

    actions: {
        toggle() {
            this.drawer = !this.drawer
            this.rail = this.drawer ? false : true
        }
    },
})



