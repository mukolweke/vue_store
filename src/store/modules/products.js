const state = {
    isLoading: true,
    products: [
        {
            product_name: 'PLAYSTATION',
            product_type: 'PS2',
            product_desc: '2ND HAND, CHIPPED',
            product_price: '9000',
            product_stock: 21,
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
            product_desc: 'Original Game Pads',
            product_price: '500',
            product_stock: 10,
            product_id: 3
        },
        {
            product_name: 'X-BOX',
            product_type: 'XBOX-PADS',
            product_desc: 'Wireless, Chargable',
            product_price: '3500',
            product_stock: 20,
            product_id: 4
        },
        {
            product_name: 'BEATS BY DRE',
            product_type: 'BEATS PEAL',
            product_desc: 'Original',
            product_price: '4500',
            product_stock: 10,
            product_id: 5
        },
        {
            product_name: 'SONY EARPHONES',
            product_type: 'EARPIECE',
            product_desc: 'Original, White, 3 circleOriginal, White, 3 circleOriginal, White, 3 circleOriginal, White, 3 circleOriginal, White, 3 circle ...',
            product_price: '500',
            product_stock: 10,
            product_id: 6
        },
    ]

};

const mutations = {

    'UPDATE_PRODUCT_LIST'(state, productList) {

        state.productList = productList;

        state.isLoading = false;
    },

    'ADD_PRODUCT'(state, product){

        state.products.push(product)
    },

    'DELETE_PRODUCT'(state, key){

        let array = state.products;

        let prod = array.find(element => element.product_id === key);

        const index = array.indexOf(prod);

        array.splice(index, 1);
    },

    'REDUCE_STOCK'(state, order){

        const recordCart = state.products.find(element => element.product_id === order.product_id);

        recordCart.product_stock -= order.product_quantity;

    },

    'ADD_STOCK'(state, order){

        const recordCart = state.products.find(element => element.product_id === order.product_id);

        recordCart.product_stock += order.product_quantity;

    }
};

const actions = {
    updateProductList:({commit}, key)=>{

        commit('DELETE_PRODUCT', key);

    },

    addProduct:({commit}, product)=>{

        commit('ADD_PRODUCT', product);

    },

    reduceStock:({commit}, order)=>{

        commit('REDUCE_STOCK', order);

    },

    addStock:({commit}, order)=>{

        commit('ADD_STOCK', order);

    },
}

const getters = {
    shopProductList: (state) => {

        return state.products;

    },

    isProductLoading: (state) => {

        return state.isLoading;

    },

};

export default {
    state,
    mutations,
    actions,
    getters
}