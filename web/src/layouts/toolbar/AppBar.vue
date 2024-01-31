<template>
    <v-app-bar>
        <v-app-bar-nav-icon @click="theme.mainSidebar = !theme.mainSidebar"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-divider vertical thickness="2" inset class="ml-5 mr-1"></v-divider>
        <div class="d-flex">
            <ToolbarLanguage />
            <ToolbarLogout />
        </div>
    </v-app-bar>
</template>
  
<script lang="ts" setup>
import ToolbarLogout from "../toolbar/Logout.vue";
import ToolbarLanguage from "../toolbar/Language.vue";
import { useThemeStore } from "@/store/themeStore";
const theme = useThemeStore();
</script>
  