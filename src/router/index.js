import Vue from 'vue'
import VueRouter from 'vue-router'
import {HomePage} from "../pages/Home";
import {Shop} from "../pages/Shop";
import {Cart} from "../pages/Cart";
import {Detail} from "../pages/Detail";
import {CheckOut} from "../pages/CheckOut";
import {About} from "../pages/About";
import {Contact} from "../pages/Contact";
import {Logins} from "@/pages/Login";

Vue.use(VueRouter)

const routes = [
    ...HomePage,
    ...Shop,
    ...Cart,
    ...Detail,
    ...CheckOut,
    ...About,
    ...Contact,
    ...Logins
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    let token = localStorage.getItem('access_token');
    if (to.name !== 'Login' && !token) {
        next();
    }else if(to.name ==='Login' && token){
        localStorage.removeItem('access_token');
        next();
    }
    else {
        next();
    }
})

export default router;