import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import mobileViewMixin from './mixins/mobileView'


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mixin(mobileViewMixin);

app.mount('#app');
