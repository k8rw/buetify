<script setup lang="ts">
import menus from "@/menus";
import MainMenu from "@/components/navigation/MainMenu.vue";
import { useThemeStore } from "@/store/themeStore";
const theme = useThemeStore();
const navigation = ref(menus.navigation);

</script>

<template>
  <v-navigation-drawer
    border="none"
    elevation="1"
    v-model="theme.mainSidebar"
    id="mainMenu"
  >
    <template v-slot:prepend>
        <v-card height="60" class="ma-1 d-flex align-center justify-center">
          <v-card-title :style="{ background: 'linear-gradient(to right, ' +
          $vuetify.theme.themes.light.colors.primary + ', ' + 
          $vuetify.theme.themes.light.colors.background + ')',
          '-webkit-background-clip': 'text', 'color': 'transparent' }">
      K8RW / Buetify
    </v-card-title>
      </v-card>
    </template>
    <main-menu :menu="navigation.menu"></main-menu>
  </v-navigation-drawer>
</template>

<style scoped lang="scss"></style>
