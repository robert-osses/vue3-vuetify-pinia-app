<template>
    <v-row class="text-center">
        <v-col cols="12">
            <h1>
                Couter View: {{ counterStore.counter }}!!!
            </h1>
            <v-btn-group>
                <v-btn color="primary" prepend-icon="mdi-plus" small @click="increaseBy(1)">1</v-btn>
                <v-btn color="info" prepend-icon="mdi-plus" small @click="increaseBy(2)">2</v-btn>
                <v-btn color="warning" prepend-icon="mdi-plus" small @click="increaseBy(5)">5</v-btn>
            </v-btn-group>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">

import { useCounterStore } from '../stores/counter';


const counterStore = useCounterStore();

const increaseBy = ( value: number) => {
    counterStore.incrementBy( value );
}

</script>
