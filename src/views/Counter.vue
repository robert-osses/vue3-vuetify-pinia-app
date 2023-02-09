<script setup lang="ts">

    import { useCounterStore } from '@/stores/counter'
    import { storeToRefs } from 'pinia';

    const counterStore = useCounterStore()
    const { counter } = storeToRefs( counterStore )
    const { incrementBy } = counterStore

</script>

<template>
    <v-row class="text-center">
        <v-col cols="12">
            <h1>
                Counter View: {{ counter }}!!!
            </h1>
            <v-btn-group>
                <v-btn color="primary" prepend-icon="mdi-plus" small @click="incrementBy(1)">1</v-btn>
                <v-btn color="secondary" prepend-icon="mdi-plus" small @click="incrementBy(2)">2</v-btn>
                <v-btn color="info" prepend-icon="mdi-plus" small @click="incrementBy(5)">5</v-btn>
                <v-btn color="success" prepend-icon="mdi-plus" small @click="incrementBy(9)">9</v-btn>
                <v-btn color="warning" prepend-icon="mdi-plus" small @click="incrementBy(0)">Reset</v-btn>
            </v-btn-group>
        </v-col>
    </v-row>
</template>