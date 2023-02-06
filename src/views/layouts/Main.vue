<template>
    <v-app>
        <appBar />
        <appNavigationDrawer />
        <v-main>
            <v-row>
                <v-col cols="12" class="text-center">
                    <breadcrumb />
                </v-col>
            </v-row>
            <router-view :key="$route.path" />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
    import breadcrumb from '@/components/breadcrumb.vue'
    import appBar from '@/components/appBar.vue'
    import appNavigationDrawer from '@/components/appNavigationDrawer.vue'
</script>
