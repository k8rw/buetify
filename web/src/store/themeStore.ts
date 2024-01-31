import { defineStore } from "pinia";

interface State {
  mainSidebar: boolean;
  darkTheme: boolean;
  localCode: string;
}

export const useThemeStore = defineStore({
  id: "themeStore",
  state: (): State => ({
    mainSidebar: true,
    darkTheme: false,
    localCode: "en",
  }),

  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["darkTheme", "mainSidebar", "localCode"],
      },
    ],
  },

  getters: {},
  actions: {
    setLocalCode(localCode: string) {
      this.localCode = localCode;
    },
  },
});
