import { createApp } from 'vue'
import * as vueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import {createPinia} from 'pinia'

import './assets/main.css'

import home from './pages/home.vue'
import register from './pages/register.vue'
import login from './pages/login.vue'

const routes =[
    {path: '/', component: home},
    {path: '/register', component: register},
    {path: '/login', component: login}
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
