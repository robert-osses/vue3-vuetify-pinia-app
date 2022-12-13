<template>
    <h1>
        Couter View: {{ counterStore.counter }}!!!
    </h1>
    <v-btn color="primary" prepend-icon="mdi-account-group" small @click="increaseBy(1)">+1</v-btn>
    <v-btn color="secondary" icon small @click="increaseBy(2)">
        <v-icon icon="mdi-wrench"></v-icon>
    </v-btn>
    <v-btn color="warning" icon small @click="increaseBy(5)">+5</v-btn>

</template>

<script setup lang="ts">

import { useCounterStore } from '../stores/counter';


const counterStore = useCounterStore();

const increaseBy = ( value: number) => {
    counterStore.incrementBy( value );
}

</script>
