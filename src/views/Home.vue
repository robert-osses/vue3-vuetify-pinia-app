<template>
    <v-layout>
        <v-row class="text-center">
            <v-col cols="12">
                <h1>
                    Home View: {{ counterStore.counter }}
                </h1>

                <h3>Número de cambios: {{ counterStore.numberOfChanges }}</h3>
            </v-col>
        </v-row>
    </v-layout>
</template>


<script lang="ts" setup>

import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();

</script>
