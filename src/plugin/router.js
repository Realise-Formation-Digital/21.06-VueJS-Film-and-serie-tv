import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

//Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import FilmList from "../pages/FilmList";
import AboutUs from "../pages/AboutUs";

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/films-list', component: FilmList },
    { path: '/about-us', component: AboutUs }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
})

export default router
