<template>
    <v-navigation-drawer
        expand-on-hover
        rail
        elevation="9"
    >
        <v-list>
            <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                title="Sandra Adams"
                subtitle="sandra_a88@gmailcom"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item v-for="{icon, title, value, to} in navigationItems"
                :prepend-icon="icon"
                :title="title"
                :value="value"
                :to="to"
            />
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
    const navigationItems = [
        {
            icon: 'mdi-home',
            title: 'Inicio',
            value: 'inicio',
            to: '/',
        },
        {
            icon: 'mdi-plus-circle',
            title: 'Contadores',
            value: 'counter',
            to: '/counter',
        },
        {
            icon: 'mdi-tag',
            title: 'Cards',
            value: 'card',
            to: '/card',
        },
    ]
</script>
