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

// Styles
import "@/styles/main.scss";

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App)
app.use(pinia);


registerPlugins(app)

app.mount('#app')
