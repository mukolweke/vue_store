import filter from '../../filter/filter'

const state = {
    searchedOrder: [],
    orders: [
        {
            order_name: 'Mike Doe',
            email: 'mikemike@gmail.com',
            shopping_list: [
                {
                    product_name: 'PS 4',
                    product_quantity: 1,
                    product_price: 35000
                },
                {
                    product_name: 'EARPHONES',
                    product_quantity: 5,
                    product_price: 350
                }
            ],
            status:0,
            created_at: (new Date() | filter.formatDate),
            order_id:1,
        },
        {
            order_name: 'William Kuku',
            email: 'william@gmail.com',
            shopping_list: [
                {
                    product_name: 'XBOX-LIVE',
                    product_quantity: 1,
                    product_price: 15000
                },
            ],
            status:1,
            created_at: (new Date() | filter.formatDate),
            order_id:2,
        },
        {
            order_name: 'Okoyoo Charles',
            email: 'okoyoocharles@gmail.com',
            shopping_list: [
                {
                    product_name: 'FIFA 18',
                    product_quantity: 1,
                    product_price: 6000
                },
            ],
            status:0,
            created_at: (new Date() | filter.formatDate),
            order_id:3
        },

    ]
};

const mutations = {

    'REMOVE_ORDER_ITEM'(state, order) {
        const record = state.orders.find(element => element.order_id === order.order.order_id);

        let indx = state.orders.indexOf(record);

        state.orders.splice(indx, 1);
    },

    'SEARCH_ORDER_DETAILS'(state, id) {

        const record = state.orders.find(element => element.order_id === id);

        state.searchedOrder.push(record);

    }

};

const actions = {

    searchingOrder: ({commit}, id) => {

        commit('SEARCH_ORDER_DETAILS', id);

    },
}

const getters = {

    getOrders: (state) => {

        return state.orders;

    },

    getMyOrders: (state, email) => {

        return state.orders.find(element => element.email === email.currentUser.email);

    },

    getSearchedOrder: (state)=>{

        return state.getSearchedOrder;

    },

};

export default {
    state,
    mutations,
    actions,
    getters
}