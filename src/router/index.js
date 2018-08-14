import Vue from 'vue'
import Router from 'vue-router'
import CustomerIndex from '@/components/customer/CustomerIndex'
import AdminIndex from '@/components/admin/AdminIndex'
import Order from '@/components/admin/Orders'
import CreateProduct from '@/components/admin/CreateProduct'
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'
import ShoppingCart from '@/components/customer/ShoppingCart'
import ProductDetails from '@/components/customer/ProductDetails';
import WelcomeDash from '@/components/auth/WelcomeDash';
import MyOrder from '@/components/customer/MyOrders';
import OrderView from '@/components/admin/OrderView';

Vue.use(Router)

let router = new Router({

    routes: [
        // any path not existing sent to login
        {path: '*', redirect: '/'},

        {
            path: '/',
            component: WelcomeDash
        },

        {
            path: '/login',
            name: 'Login',
            component: Login
        },

        {
            path: '/customer-dashboard',
            name: 'customer-dashboard',
            component: CustomerIndex,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/my-orders',
            name: 'my-order',
            component: MyOrder,
            meta: {
                requiresAuth: true
            }
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
            path: '/admin-dashboard',
            name: 'admin-dashboard',
            component: AdminIndex,
            meta: {
                requiresAuth: true
            }

        },
        {
            path: '/orders',
            name: 'order',
            component: Order,
            meta: {
                requiresAuth: true
            }

        },
        {
            path: '/order_view',
            name: 'order_view',
            component: OrderView,
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
            name: 'product',
            meta: {
                requiresAuth: true
            }
        },


    ]
})

export default router;
