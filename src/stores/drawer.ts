import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDrawerStore = defineStore('drawer', () => {

    const drawer = ref<boolean>(true)
    const navigationItems = ref([
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
            icon: 'mdi-smart-card',
            title: 'Cards',
            to: { name : 'card' },
        },
        {
            icon: 'mdi-monitor-cellphone-star',
            title: 'Dashboard',
            to: { name : 'dashboard' },
        },
        {
            icon: 'mdi-format-list-bulleted-square',
            title: 'DataTable',
            to: { name : 'table' },
        },
        {
            icon: 'mdi-map',
            title: 'Leaflet',
            to: { name : 'map' },
        },
    ])

    function toggle() {
        drawer.value = !drawer.value
    }

    return {
        // state properties
        drawer, 
        navigationItems, 
        
        // getters

        // actions
        toggle,
    }
})