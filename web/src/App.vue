<template>
  <v-app>
    <component :is="currentLayout" v-if="isRouterLoaded">
      <router-view />
    </component>
  </v-app>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import DefaultLayout from "@/layouts/default.vue";

const route = useRoute();

const isRouterLoaded = computed(() => {
  if (route.name !== null) return true;
  return false;
});

const layouts = {
  default: DefaultLayout
};

type LayoutName = "default" | "ui" | "landing" | "auth" | "error";

const currentLayout = computed(() => {
  const layoutName = route.meta.layout as LayoutName;
  if (!layoutName) {
    return DefaultLayout;
  }
  return layouts[layoutName];
});

</script>
