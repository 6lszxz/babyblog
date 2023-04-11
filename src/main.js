import { createApp } from 'vue'
import * as vueRouter from 'vue-router'
import App from './App.vue'
import {createPinia} from 'pinia'

import home from './pages/home.vue'
import register from './pages/register.vue'
import login from './pages/login.vue'
import articleEditor from './pages/articleEditor.vue'
import articleReading from './pages/articleReading.vue'
import space from './pages/space.vue'
import articleList from './components/articleList.vue'

import './assets/main.css'

const routes =[
    {path: '/', component: home},
    {path: '/register', component: register},
    {path: '/login', component: login},
    {path: '/articleEditor', component: articleEditor},
    {path: '/article/:id', component: articleReading},
    {path:'/space/:id',component: space, children:[
        {path:'articles', component: articleList},
    ]}
]

const router = vueRouter.createRouter({
    history: vueRouter.createWebHistory(),
    routes: routes,
})

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app')
