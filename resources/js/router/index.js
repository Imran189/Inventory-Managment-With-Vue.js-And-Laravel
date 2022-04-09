import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/pages/Home'
import loginVue from "../components/auth/login.vue";

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
       }

    ]
})
export default router