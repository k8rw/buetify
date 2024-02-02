<template>
  <v-app>
    <component :is="currentLayout" v-if="isRouterLoaded">
      <router-view />
    </component>
  </v-app>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import DefaultLayout from "@/layouts/default.vue";
import UILayout from "@/layouts/ui.vue";

const route = useRoute();

const isRouterLoaded = computed(() => {
  if (route.name !== null) return true;
  return false;
});

const layouts = {
  default: DefaultLayout,
  ui: UILayout
};

type LayoutName = "default" | "ui";

const currentLayout = computed(() => {
  const layoutName = route.meta.layout as LayoutName;
  if (!layoutName) {
    return DefaultLayout;
  }
  return layouts[layoutName];
});

</script>
