import { createRouter, createWebHistory } from "vue-router";
import AppVue from "./components/App.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
       {
        path:'/',
        name:'AppVue',
        components:AppVue
       }

    ]
})
export default router