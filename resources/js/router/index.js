import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Pages/Home.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
       {
        path:'/',
        name:'home',
        components:Home
       }

    ]
})
export default router