import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
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
            name: 'Login',
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
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld,
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