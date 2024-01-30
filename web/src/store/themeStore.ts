import { defineStore } from "pinia";

interface State {
  mainSidebar: boolean;
  darkTheme: boolean;
}

export const useThemeStore = defineStore({
  id: "themeStore",
  state: (): State => ({
    mainSidebar: true,
    darkTheme: false,
  }),

  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["darkTheme", "mainSidebar"],
      },
    ],
  },

  getters: {},
  actions: {},
});
