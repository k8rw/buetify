/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import type { ThemeDefinition } from "vuetify";

// Composables
import { createVuetify } from 'vuetify'
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { useI18n } from "vue-i18n";
import i18n from "@/plugins/i18n";

const LightTheme: ThemeDefinition = {
  dark: false,
  variables: {
    "high-emphasis-opacity": 1,
  },
  colors: {
    background: "#f2f5f8",
    surface: "#ffffff",
    primary: "#334155",
    secondary: "#475466",
    accent: "#705CF6",
    error: "#ef476f",
    info: "#2196F3",
    success: "#06d6a0",
    "on-success": "#ffffff",
    warning: "#ffd166",
  },
};

const DarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#111b27",
    surface: "#1E293B",
    primary: "#705CF6",
    secondary: "#598EF3",
    accent: "#705CF6",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  //
  theme: {
    themes: {
      light: LightTheme,
      dark: DarkTheme,
    },
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
})
