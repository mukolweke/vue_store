// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Axios from 'axios'
import store from './store/store'
import vuexaxi from 'vue-axios'
import ElementUI from 'element-ui'
import VueFire from 'vuefire'
import {firebaseListener} from './firebase.conf'
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'vue-moment'

require('./filter/filter');

Vue.use(ElementUI, {locale});
Vue.use(Vuex);
Vue.use(VueFire);
Vue.config.productionTip = false
Vue.use(moment);

firebaseListener(authStatusChange);


/* eslint-disable no-new */
let app;


new Vue({
    el: '#app',
    router,
    Axios,
    ElementUI,
    moment,
    vuexaxi,
    store,
    components: {App},
    template: '<App/>'
})

function authStatusChange(loggedIn, user) {
    if (store) {
        store.commit('AUTH_STATUS_CHANGE');
        if (user) {
            store.dispatch('getShoppingCart', {uid: user.uid, currentCart: store.getters.cartItemList});
        }
    }

}