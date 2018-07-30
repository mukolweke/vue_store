import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash';


Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        username: '',
        useremail: '',
        userphone: '',
        password: '',
        users: [],
        products: [
            {
                product_name: 'PLAYSTATION',
                product_type: 'PS2',
                product_desc: '2ND HAND, CHIPPED',
                product_price: '9000',
                product_stock: 20,
                product_id: 1
            },
            {
                product_name: 'GAMES',
                product_type: 'NBA 2K19',
                product_desc: 'SEALED',
                product_price: '6500',
                product_stock: 10,
                product_id: 2
            },
            {
                product_name: 'GAME PADS',
                product_type: 'PS2',
                product_desc: 'Original',
                product_price: '500',
                product_stock: 10,
                product_id: 3
            },
        ],
        total:0,

        Cart: []

    },

    mutations: {

        ADD_USER(state, newUser) {
            state.users.push(newUser);
        },

        ADD_PRODUCT(state, newProduct) {
            //
            state.products.push(newProduct);
        },

        ADD_CART(state, addCartItem) {
            addCartItem.item_quantity=1;
            state.Cart.push(addCartItem);
        },

        DEL_PRODUCT(state, id) {
            let index = state.products.indexOf(id);
            if (index > -1) {
                state.products.splice(index, 1);
            }
        },

        REMOVE_FROM_CART(state, id) {
            let index = state.Cart.indexOf(id);
            if (index > -1) {
                state.Cart.splice(index, 1);
            }
        },


        INC_ITEM_CART(state, product) {

             let productInstore=  state.products.find(item => item.product_id === product.product_id);

             let productinCart= state.Cart.find(item => item.product_id === product.product_id);

                if (productinCart.item_quantity < productInstore.product_stock) {
                    state.Cart=
                        state.Cart.map(cartItem => cartItem.product_id === product.product_id? {...cartItem, item_quantity : Number(cartItem.item_quantity||0)+1} : cartItem);
                }

        },

        DEC_ITEM_CART(state, product) {
            let productInstore=  state.products.find(item => item.product_id === product.product_id);

            let productinCart= state.Cart.find(item => item.product_id === product.product_id);

            if (productinCart.item_quantity > 0) {
                state.Cart=
                    state.Cart.map(cartItem => cartItem.product_id === product.product_id? {...cartItem, item_quantity : Number(cartItem.item_quantity)-1} : cartItem);
            }
        },

        GET_PRODUCT(state, id) {

            const product = state.products.find(product => product.product_id === id);
        },

        CLEAR_CART(state){
            state.Cart = [];
            state.total = 0;
        }

    },
    actions: {

        AddUser(store, newuser) {
            store.commit('ADD_USER', newuser);
        },

        AddProducts(store, newProduct) {
            store.commit('ADD_PRODUCT', newProduct);
        },

        deleteProduct(store, id) {
            store.commit('DEL_PRODUCT', newProduct);
        },

        AddToCart(store, addCartItem) {
            store.commit('ADD_CART', addCartItem);
        },

        incrementItemQuantity(store, id) {
            store.commit('INC_ITEM_CART', id);
        },

        decrementItemQuantity(store, id) {
            store.commit('DEC_ITEM_CART', id);
        },

        getProduct(store, id) {
            store.commit('GET_PRODUCT', id);
        },

        removeFromCart(store, index) {
            store.commit('REMOVE_FROM_CART', index);
        },

        clearCart(store){
            store.commit('CLEAR_CART');
        }

    },

    getters: {
        getUsers: state => state.users,

        getProducts: state => state.products,

        getItemsInCart: state => state.Cart,

        forSale: state => state.forSale,

    }
})

export default store
