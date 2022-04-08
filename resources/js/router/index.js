import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/pages/Home'

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes:[
       {
        path:'/',
        name:'home',
        component:Home
       }

    ]
})
export default router