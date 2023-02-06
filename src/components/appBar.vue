<template>
  <v-app-bar>
    <v-btn icon @click="toggleDrawer" class="d-lg-none">
      <menu2-icon />
    </v-btn>
    <v-spacer />
    <v-btn icon @click="toggleDrawer" class="d-lg-none">
      <dots-vertical-icon />
    </v-btn>
    <v-template class="d-none d-lg-block">
      <span class="ma-3">{{name}}</span>
      <v-btn icon @click="armyTheme">
        <flag-icon />
      </v-btn>
      <v-btn icon @click="toggleTheme" :title="theme.global.name.value == 'dark' ? 'Iluminar' : 'Oscurecer'">
        <sun-high-icon v-if="theme.global.name.value == 'dark'" />
        <moon-icon v-else />
      </v-btn>
    </v-template>
  </v-app-bar>
</template>

<script setup lang="ts">
  import { useTheme, useDisplay } from 'vuetify'
  import { SunHighIcon, MoonIcon, FlagIcon, Menu2Icon, DotsVerticalIcon } from "vue-tabler-icons";
  import { useDrawerStore } from '@/stores/drawer';
    
  const drawerStore = useDrawerStore();
  const theme = useTheme()
  const { name } = useDisplay()

  const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  const armyTheme = () => theme.global.name.value = 'armyLight'
  const toggleDrawer = () => drawerStore.toggle();
</script>
