<template>
  <appToolbar />

  <v-row>
    <v-col cols="12" class="text-center">
      <appBreadcrumb />
    </v-col>
  </v-row>

  <router-view></router-view>
</template>

<script setup lang="ts">
    import appBreadcrumb from './components/appBreadcrumb.vue'
    import appToolbar from './components/appToolbar.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
