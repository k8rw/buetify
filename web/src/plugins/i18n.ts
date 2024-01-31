import { createI18n } from "vue-i18n";
import enMessages from "@/locales/en";
import zhHansMessages from "@/locales/zhHans";


const messages = {
    en: enMessages,
    zhHans: zhHansMessages,
  };

const i18n = createI18n({
  legacy: false,
  locale: "en", // 设置默认语言
  fallbackLocale: "en", // 设置回退语言
  messages,
});

export default i18n;