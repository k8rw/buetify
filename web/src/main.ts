/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import piniaPersist from "pinia-plugin-persist";
import Vue3Lottie from "vue3-lottie";

// Styles
import "@/styles/main.scss";

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App)

app.use(pinia);
app.use(Vue3Lottie, { name: "LottieAnimation" });

registerPlugins(app)

app.mount('#app')
