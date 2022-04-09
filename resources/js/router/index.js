import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/pages/Home'
import loginVue from "../components/auth/login.vue";
import registerVue from "../components/auth/register.vue";
import forgetVue from "../components/auth/forget.vue";


const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes:[
       {
        path:'/',
        name:'home',
        component:Home
       },
       {
        path:'/login',
        name:'loginVue',
        component:loginVue
       },
       {
        path:'/register',
        name:'registerVue',
        component:registerVue
       },
       {
        path:'/forget/Pass',
        name:'forgetVue',
        component:forgetVue
       }

    ]
})
export default router