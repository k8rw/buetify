<template>
  <v-app-bar>
    <v-spacer></v-spacer>
    <v-divider vertical thickness="2" inset class="ml-5 mr-1"></v-divider>
    <div class="d-flex">
      <ToolbarLogin />
    </div>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import ToolbarLogin from "../toolbar/login.vue";
</script>
