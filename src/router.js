import Home from "@/components/Home.vue";
import cardContainer from "@/components/card-container.vue";
import {createRouter ,createWebHashHistory} from 'vue-router';
import about from "@/components/about.vue";
import user from "@/components/user.vue";
import notFound from "@/components/not-found.vue";
import users from "@/components/users.vue";
import createUser from "@/components/create-user.vue";


const routes = [
    { path:'/', component:Home},
    {path:'/cards',component: cardContainer},
    {path:'/user/:id',component: user , name:'user'},
    {path:'/about',component: about},
    {path:'/users',component: users},
    {path: '/createuser',component:createUser},
    {path:'/:pathMatch(.*)*' , component: notFound}
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


export  default router;