<template>
    <SideBar />
    <AppBar />
    <v-main class="main-container">
        <div class="flex-fill">
            <slot></slot>
        </div>
    </v-main>
</template>

<script lang="ts" setup>
import SideBar from "./toolbar/SideBar.vue";
import AppBar from "./toolbar/AppBar.vue";
</script>

<style scoped>
.main-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>