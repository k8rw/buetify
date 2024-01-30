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
    <!-- ---------------------------------------------- -->
    <!---Top Area -->
    <!-- ---------------------------------------------- -->
    <template v-if="!theme.miniSidebar" v-slot:prepend>
      <v-card
        style="box-shadow: rgba(0, 0, 0, 0.05) 0px 25px 15px -20px"
        height="100"
        class="d-flex align-center justify-center"
      >
      </v-card>
    </template>
    <main-menu :menu="navigation.menu"></main-menu>
  </v-navigation-drawer>
</template>

<style scoped lang="scss"></style>
