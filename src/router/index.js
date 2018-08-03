import Vue from 'vue'
import Router from 'vue-router'
import CustomerIndex from '@/components/customer/CustomerIndex'
import AdminIndex from '@/components/admin/AdminIndex'
import CreateProduct from '@/components/admin/CreateProduct'
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'
import firebase from 'firebase'
import ShoppingCart from '@/components/customer/ShoppingCart'
import ProductDetails from '@/components/customer/ProductDetails';



Vue.use(Router)

let router = new Router({
    routes: [
        // any path not existing sent to login
        {path: '*', redirect: '/'},

        {
            path: '/',
            component: Login
        },

        {
            path: '/login',
            name: 'Login',
            component: Login
        },

        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },


        {
            path: '/customer',
            name: 'customer',
            component: CustomerIndex,
            meta: {
                requiresAuth: true
            }

        },

        {
            path: '/admin',
            name: 'admin',
            component: AdminIndex,
            meta: {
                requiresAuth: true
            }

        },

        {
            path: '/admin/create',
            name: 'admin-create',
            component: CreateProduct,
            meta: {
                requiresAuth: true
            }

        },

        {
            path: '/cart',
            component: ShoppingCart,
            name: 'shoppingcart',
            meta: {
                requiresAuth: true
            }

        },

        {
            path: '/product/:id',
            component: ProductDetails,
            name: 'product'},


    ]
})

export default router;
