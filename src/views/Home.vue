<template>
    <v-row class="text-center mb-2">
        <v-col cols="12" class="d-flex justify-center">
            <v-btn class="ma-2" color="primary">primary</v-btn>
            <v-btn class="ma-2" color="secondary">secondary</v-btn>
            <v-btn class="ma-2" color="accent">accent</v-btn>
            <v-btn class="ma-2" color="error">error</v-btn>
            <v-btn class="ma-2" color="info">info</v-btn>
            <v-btn class="ma-2" color="success">success</v-btn>
            <v-btn class="ma-2" color="warning">warning</v-btn>
        </v-col>
    </v-row>
    <v-row class="text-center mb-2">
        <v-col cols="12" class="d-flex justify-center">
            <v-btn class="ma-2" color="primary" variant="outlined">primary</v-btn>
            <v-btn class="ma-2" color="secondary" variant="outlined">secondary</v-btn>
            <v-btn class="ma-2" color="accent" variant="outlined">accent</v-btn>
            <v-btn class="ma-2" color="error" variant="outlined">error</v-btn>
            <v-btn class="ma-2" color="info" variant="outlined">info</v-btn>
            <v-btn class="ma-2" color="success" variant="outlined">success</v-btn>
            <v-btn class="ma-2" color="warning" variant="outlined">warning</v-btn>
        </v-col>
    </v-row>
    <v-row class="text-center">
        <v-col cols="12">
            <h1>
                Home View: {{ counterStore.counter }}
            </h1>

            <h3>Número de cambios: {{ counterStore.numberOfChanges }}</h3>
        </v-col>
    </v-row>
</template>


<script lang="ts" setup>

import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();

</script>
