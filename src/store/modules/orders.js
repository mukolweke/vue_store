const state = {
    isLoading: true,
    orders: [
        {
            order_name: 'John Doe',
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
            total: 0,
        },
        {
            order_name: 'William Kuku',
            shopping_list: [
                {
                    product_name: 'XBOX-LIVE',
                    product_quantity: 1,
                    product_price: 15000
                },
            ],
            total: 0,
        },
        {
            order_name: 'Okoyoo Charles',
            shopping_list: [
                {
                    product_name: 'FIFA 18',
                    product_quantity: 1,
                    product_price: 6000
                },
            ],
            total: 0,
        },

    ]

};

const mutations = {};

const actions = {}

const getters = {

    getOrders: (state) => {

        return state.orders;

    }
};

export default {
    state,
    mutations,
    actions,
    getters
}