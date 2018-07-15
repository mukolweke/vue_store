import Vue from 'vue'
import Router from 'vue-router'
import CustomerIndex from '@/components/customer/CustomerIndex'
import AdminIndex from '@/components/admin/AdminIndex'
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'
import firebase from 'firebase'

Vue.use(Router)

let router =  new Router({
    routes: [
        // any path not existing sent to login
        {
            path: '*',
            redirect: '/login'
        },

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
            // help verify user login
            meta:{
                requiresAuth: true
            }

        },

        {
            path: '/admin',
            name: 'admin',
            component: AdminIndex,
            // help verify user login
            meta:{
                requiresAuth: true
            }

        },
    ]
})

//check if user is logged in; guard used
router.beforeEach((to,from,next)=>{
    //get current user
    let currentUser= firebase.auth().currentUser;
    let requiresAuth= to.matched.some(record=>record.meta.requiresAuth);

    if(requiresAuth && !currentUser) next('login')
    else if(!requiresAuth && currentUser) next('hello')
    else next();

})

export default router;