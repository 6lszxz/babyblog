import { createApp } from 'vue'
import * as vueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import {createPinia} from 'pinia'

import './assets/main.css'

import home from './pages/home.vue'
import register from './pages/register.vue'
import login from './pages/login.vue'
import articleEditor from './pages/articleEditor.vue'

const routes =[
    {path: '/', component: home},
    {path: '/register', component: register},
    {path: '/login', component: login},
    {path: '/articleEditor', component: articleEditor},
]

const router = vueRouter.createRouter({
    history: vueRouter.createWebHistory(),
    routes: routes,
})

const pinia = createPinia();

const app = createApp(App);
app.use(router)
app.use(pinia);
app.mount('#app')
