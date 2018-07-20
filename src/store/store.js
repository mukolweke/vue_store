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
        users: [{username: 'admin', useremail: 'admin@admin.com', userphone: '123456789', password: 'admin'}],
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

        Cart: [
            {item_name: 'PS4', item_quantity: 12, item_price: 200, item_id: 1},
            {item_name: 'PS3', item_quantity: 10, item_price: 2000, item_id: 2}
        ]

    },

    mutations: {

        ADD_USER(state, newUser) {
            state.users.push(newUser);
        },

        ADD_PRODUCT(state, newProduct) {
            state.products.push(newProduct);
        },

        ADD_CART(state, addCartItem) {
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


        INC_ITEM_CART(state, id) {
            const cartItem = state.Cart.find(item => item.item_id === id)
            const productItem = state.products.find(product => product.product_id === id)
            if (cartItem.item_quantity < productItem.product_stock) {
                cartItem.item_quantity++
            }
        },

        DEC_ITEM_CART(state, id) {
            const cartItem = state.Cart.find(item => item.item_id === id)
            const productItem = state.products.find(product => product.product_id === id)
            if (cartItem.item_quantity > 0) {
                cartItem.item_quantity--
            }
        },

        GET_PRODUCT(state, id) {

            const product = state.products.find(product => product.product_id === id);
        },

        CLEAR_CART(state){
            state.Cart = [];
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
