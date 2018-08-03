const state = {
    cartItemList: []
}

const mutations = {
    'UPDATE_CART'(state, {item, quantity, isAdd}) {
        const record = state.cartItemList.find(element => element.id === item.id);
        if (record) {
            if (isAdd) {
                record.product_stock += quantity;
            } else {
                record.product_stock = quantity;
            }
        } else {
            state.cartItemList.push({
                ...item,
                quantity
            });
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
}

const actions = {
    clearCart: ({commit}) => {
        commit('SET_CART', []);
    }
}

const getters = {
    cartItemList: (state) => {
        return state.cartItemList;
    },
    cartValue: (state) => {
        let res = 0;
        state.cartItemList.map(item => {
            res += item.product_price * item.quantity;
        });
        return res;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
