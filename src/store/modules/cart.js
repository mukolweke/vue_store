const state = {
    cartItemList: [
        // {
        //     product_name: 'PLAYSTATION',
        //     product_type: 'PS2',
        //     product_desc: '2ND HAND, CHIPPED',
        //     product_price: '9000',
        //     product_stock: 21,
        //     product_quantity: 1,
        //     isAdd: true,
        //     product_id: 1
        // },
    ]
};

const mutations = {

    'UPDATE_CART'(state, order) {

        console.log(order.order.product_id)


        const record = state.cartItemList.filter(element => element.product_id === order.order.product_id);

        console.log(record)

        // if it exist update the product quantity
        if (record) {
            if (order.order.isAdd) {
                record.product_quantity += order.order.product_quantity;


            } else {
                record.product_quantity = order.order.product_quantity;

            }
        } else {

            state.cartItemList.push(order.order)

        }
    },

    'SET_CART'(state, productList) {

        if (productList) {

            state.cartItemList = productList;
        }
    },

    'REMOVE_CART_ITEM'(state, {item}) {
        const record = state.cartItemList.find(element => element.id === item.id);

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
