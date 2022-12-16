import { defineStore } from 'pinia';


export const useDrawerStore = defineStore('drawer', {

    state: () => ({
        drawer: true,
    }),

    actions: {
        toggle( value: boolean ) {
            this.drawer = value;
        }
    }
})



