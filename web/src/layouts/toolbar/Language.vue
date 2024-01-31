<template>
    <v-menu scroll-y>
        <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
                <!-- <Icon :icon="`twemoji:flag-${currentLocale.name}`" /> -->
                <v-icon color="primary">mdi-translate</v-icon>
            </v-btn>
        </template>
        <v-list density="compact" nav>
            <v-list-item v-for="locale in availableLocaleList" :key="locale.code" @click="setLocale(locale.code)"
                :active="locale.code === current">
                <template v-slot:prepend>
                    <Icon :icon="`twemoji:flag-${locale.name}`" class="mr-3" />
                </template>

                <v-list-item-title> {{ locale.label }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useLocale } from "vuetify";
import { useThemeStore } from "@/store/themeStore";
import i18n from "@/plugins/i18n";

const { current } = useLocale();
const theme = useThemeStore();

const availableLocaleList = ref([
    {
        code: "en",
        flag: "us",
        name: "united-states",
        label: "English",
    },
    {
        code: "zhHans",
        flag: "cn",
        name: "china",
        label: "中文",
    },
]);

onMounted(() => {
    setLocale(theme.localCode);
});

const setLocale = (locale: string) => {
    current.value = locale;
};
</script>
