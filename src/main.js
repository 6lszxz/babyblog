import { createApp } from 'vue'
import App from './App.vue'
import {router} from './scripts/route'
import {pinia} from './stores/store'

import './assets/main.css'

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app')
