import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home/Home.vue')
const Profile = () => import('../views/Profile/Profile.vue')
const Sort = () => import('../views/Sort/Sort.vue')
const ShopCart = () => import('../views/ShopCart/ShopCart.vue')
const Detail = () => import('../views/Detail/Detail.vue')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        // meta: {
        //     keepAlive: true
        // }
    },
    {
        path: '/sort',
        component: Sort,
        //     meta: {
        //         keepAlive: true
        //     }
    },
    {
        path: '/profile',
        component: Profile,
        // meta: {
        //     keepAlive: true
        // }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        // meta: {
        //     keepAlive: true
        // }
    },
    {
        path: '/detail/:id',
        component: Detail,
        // meta: {
        //     keepAlive: false
        // }
    }
]

const Router = new VueRouter({
    routes,
    mode: 'history'
})

export default Router
