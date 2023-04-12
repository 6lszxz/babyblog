import * as vueRouter from 'vue-router'
import {useUserAccountStore} from '../stores/userAccount'
import Cookies from 'js-cookie'
import { pinia } from '../stores/store'

import home from '../pages/home.vue'
import register from '../pages/register.vue'
import login from '../pages/login.vue'
import articleEditor from '../pages/articleEditor.vue'
import articleReading from '../pages/articleReading.vue'
import space from '../pages/space.vue'
import articleList from '../components/articleList.vue'
import mySpace from '../pages/mySpace.vue'


const routes =[
    {path: '/', component: home},
    {path: '/register', component: register},
    {path: '/login', component: login},
    {path: '/articleEditor', component: articleEditor},
    {path: '/article/:id', component: articleReading},
    {path:'/space/:id',component: space, name: 'space',
        children:[
            {path:'articles', component: articleList},
        ],
    },
    {path: '/mySpace', component: mySpace}
]


const router = vueRouter.createRouter({
    history: vueRouter.createWebHistory(),
    routes: routes,
})

const userAccountStore = useUserAccountStore(pinia);

router.beforeEach( (to, from)=>{
    if(to.path === '/articleEditor' && !userAccountStore.isLogged){
        alert('您还未登录，请先登录！');
        return false;
    }
    if(to.name === 'space' && userAccountStore.id === to.params.id){
        router.push('/mySpace');
    }
})

export{
    router
}