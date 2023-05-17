import { createApp } from 'vue'
import App from './App.vue'
import {router} from './scripts/route'
import {pinia} from './stores/store'
import '@6lszxz/easy-components';

import './assets/main.css'

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(easyComponents);
app.mount('#app')
