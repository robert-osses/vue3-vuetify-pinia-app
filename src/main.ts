// Composables
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Components
import App from '@/App.vue';
import router from '@/router';

// Plugins
import { registerPlugins } from '@/plugins'
import { VueQueryPlugin } from '@tanstack/vue-query';

const pinia = createPinia()

const app = createApp(App)

app.use( pinia )
app.use( router )

VueQueryPlugin.install( app, {
    queryClientConfig: {
        defaultOptions:  {
            queries: {
                cacheTime: 1000 * 60, // 1 minuto
            }
        }
    }
});

registerPlugins(app)

app.mount('#app')
