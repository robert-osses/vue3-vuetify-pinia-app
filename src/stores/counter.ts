import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useCounterStore = defineStore('counter', () => {

    const counter = ref<number>(0)
    const numberOfChanges = ref<number>(0)

    function incrementBy( value: number ) {
        counter.value = value === 0 ? value : counter.value += value ;
        numberOfChanges.value += 1;
    }

    return {
        // state properties
        counter, 
        numberOfChanges,

        // getters

        // Actions
        incrementBy,
        reset: () => incrementBy(0),
    }
})



