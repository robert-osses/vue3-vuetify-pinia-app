import { defineStore } from 'pinia';


export const useDrawerStore = defineStore('drawer', {

    state: () => ({
        drawer: true,
        rail: true,
        navigationItems : [
            {
                icon: 'mdi-home',
                title: 'Inicio',
                to: { name : 'home' },
            },
            {
                icon: 'mdi-plus-circle',
                title: 'Contadores',
                to: { name : 'counter' },
            },
            {
                icon: 'mdi-tag',
                title: 'Cards',
                to: { name : 'card' },
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



