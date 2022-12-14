<template>
  <v-app-bar>
    <v-spacer />
    <v-btn icon @click="toggleTheme" :title="theme.global.name.value == 'dark' ? 'Iluminar' : 'Oscurecer'">
      <sun-high-icon v-if="theme.global.name.value == 'dark'" />
      <moon-icon v-else />
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
  import { useTheme } from 'vuetify'
  import { SunHighIcon, MoonIcon } from "vue-tabler-icons";

  const theme = useTheme()

  const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
</script>
