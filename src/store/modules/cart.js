const state = {
    cartItemList: [],
};

const mutations = {

    'UPDATE_CART'(state, order) {

        const record = state.cartItemList.find(element => element.product_id === order.order.product_id);

        // if it exist update the product quantity
        if (record) {
            if (order.order.isAdd) {

                record.product_quantity += order.order.product_quantity;

                this.prods.product_stock -= order.order.product_quantity;

            } else {

                record.product_quantity = order.order.product_quantity;

            }
        } else {

            state.cartItemList.push(order.order);

            this.prods.product_stock -= order.order.product_quantity;

        }
    },

    'SET_CART'(state, productList) {

        if (productList) {

            state.cartItemList = productList;
        }
    },

    'REMOVE_CART_ITEM'(state, order) {
        const record = state.cartItemList.find(element => element.product_id === order.order.product_id);

        state.cartItemList.splice(state.cartItemList.indexOf(record), 1);
    }
};

const actions = {
    clearCart: ({commit}) => {

        commit('SET_CART', []);
    }
};

const getters = {

    cartItemList: (state) => {

        return state.cartItemList;

    },
    
    cartValue: (state) => {
        let res = 0;

        state.cartItemList.map(item => {

            res += item.product_price * item.product_quantity;

        });

        return res;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
