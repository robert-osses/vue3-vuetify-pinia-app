<script setup lang="ts">
    import { useDisplay } from 'vuetify'
    import { useDrawerStore } from '@/stores/drawer'
    import { storeToRefs } from 'pinia';
    
    const drawerStore = useDrawerStore()
    const { drawer } = storeToRefs(drawerStore)

	const { name } = useDisplay()
</script>

<template>
    <v-navigation-drawer
        expand-on-hover
        :rail="['xs','md'].includes(name) ? false : true"
        elevation="9"
        v-model="drawer"
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
