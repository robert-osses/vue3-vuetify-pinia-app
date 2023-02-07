<script setup lang="ts">
    import { useDrawerStore } from '@/stores/drawer';
    const drawerStore = useDrawerStore();
</script>

<template>
    <v-navigation-drawer
        expand-on-hover
        :rail="drawerStore.rail"
        elevation="9"
        v-model="drawerStore.drawer"
    >
        <v-list>
            <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                title="Sandra Adams"
                :subtitle="'san@gmailcom'"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item v-for="{ icon, title, to } in drawerStore.navigationItems"
                :prepend-icon="icon"
                :title="title"
                :to="to"
            />
        </v-list>
    </v-navigation-drawer>
</template>
