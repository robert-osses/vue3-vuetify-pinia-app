<template>
    <v-app>
        <v-main>
            <router-view :key="$route.path" />
        </v-main>
    </v-app>
</template>

<style scoped>
    main {
        --v-layout-bottom: 18px !important;
        margin-right: 18px;
        margin-left: 18px;
    }
</style>
