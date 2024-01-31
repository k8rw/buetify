<script setup lang="ts">
import { useThemeStore } from "@/store/themeStore";
const theme = useThemeStore();

const props = defineProps({
    // Data
    menu: {
        type: Array<any>,
        default: () => [],
    },
});
</script>
<template>
    <v-list nav dense color="primary">
        <template v-for="menuArea in props.menu" :key="menuArea.key">
            <template v-if="menuArea.items">
                <template v-for="menuItem in menuArea.items" :key="menuItem.key">
                    <!-- menu level 1 -->
                    <v-list-item v-if="!menuItem.items" :to="menuItem.link"
                        :prepend-icon="menuItem.icon || 'mdi-circle-medium'" density="compact">
                        <v-list-item-title v-text="menuItem.key ? $t(menuItem.key) : menuItem.text"></v-list-item-title>
                    </v-list-item>
                </template>
            </template>
        </template>
    </v-list>
</template>

<style scoped></style>
