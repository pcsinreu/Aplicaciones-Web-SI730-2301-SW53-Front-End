import Home from "@/components/Home.vue";
import cardContainer from "@/components/card-container.vue";
import {createRouter ,createWebHashHistory} from 'vue-router';
import about from "@/components/about.vue";
import user from "@/components/user.vue";


const routes = [
    { path:'/', component:Home},
    {path:'/cards',component: cardContainer},
    {path:'/user/:id',component: user},
    {path:'/about',component: about}
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


export  default router;