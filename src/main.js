import { createApp } from 'vue'
import * as vueRouter from 'vue-router'
import home from './pages/home.vue'
import register from './pages/register.vue'
import App from './App.vue'

import './assets/main.css'

const routes =[
    {path: '/', component: home},
    {path: '/register', component: register}
]

const router = vueRouter.createRouter({
    history: vueRouter.createWebHistory(),
    routes: routes,
})

const app = createApp(App);
app.use(router)
app.mount('#app')
