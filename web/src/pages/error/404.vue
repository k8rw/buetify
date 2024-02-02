<template>
    <v-container height="100%" class="d-flex justify-center align-center text-center">
        <div>
            <Vue3Lottie animationLink="https://cdn.jsdelivr.net/gh/k8rw/buetify/web/src/assets/error/404.json" height="78vh" />
            <v-btn color=primary class="mb-4 text-white" to="/">{{ $t("error.back") }}</v-btn>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
</script>