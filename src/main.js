import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import mobileViewMixin from './mixins/mobileView'
import i18n from './locales/i18n'
import FlagIcon from 'vue-flag-icon'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mixin(mobileViewMixin);
app.use(i18n);
app.use(FlagIcon);

app.mount('#app');
