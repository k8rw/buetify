<template>
    <v-card height="100%" class="d-flex justify-center align-center text-center">
        <div>
            <Vue3Lottie animationLink="https://cdn.jsdelivr.net/gh/k8rw/buetify/assets/error/404.json" height="60vh" />
            <v-btn color=primary class="mb-4 text-white" to="/">{{ $t("error.back") }}</v-btn>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
</script>