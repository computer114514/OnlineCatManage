import {
    createRouter,
    createWebHashHistory
} from "vue-router"

import NotFound from "@/pages/NotFound.vue";
import index from "@/pages/index.vue";
import login from "@/pages/login.vue";

const routes=[
    {
        path:'/:pathMatch(.*)*',
        component:NotFound
    },
    {
        path:'/',
        component:index
    },
    {
        path:'/login',
        component:login
    },
];

const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;