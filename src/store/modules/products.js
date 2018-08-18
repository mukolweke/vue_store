const state = {
    isLoading: true,
    products: [
        {
            product_image: 'https://www.masoko.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/c/u/cuh1206a.jpg',
            product_name: 'PLAYSTATION',
            product_type: 'PS2',
            product_desc: '2ND HAND, CHIPPED',
            product_price: '9000',
            product_stock: 21,
            product_id: 1
        },
        {
            product_image: 'https://www.masoko.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/s/o/sony_ps4_game_fifa_18.jpg',
            product_name: 'GAMES',
            product_type: 'FIFA 18',
            product_desc: 'SEALED',
            product_price: '6500',
            product_stock: 10,
            product_id: 2
        },
        {
            product_image: 'https://www.masoko.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/b/l/blackk.jpg',
            product_name: 'GAME PADS',
            product_type: 'PS2',
            product_desc: 'Original Game Pads',
            product_price: '500',
            product_stock: 10,
            product_id: 3
        },
        {
            product_image: 'https://apollo-ireland.akamaized.net/v1/files/xcgnpn6jak66-KE/image;s=780x0;q=60',
            product_name: 'X-BOX',
            product_type: 'XBOX-PADS',
            product_desc: 'Wireless, Chargable',
            product_price: '3500',
            product_stock: 20,
            product_id: 4
        },
        {
            product_image: 'https://www.masoko.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/m/amplify_pro_play_series_bluetooth_headphones.jpg',
            product_name: 'BEATS BY DRE',
            product_type: 'BEATS PEAL',
            product_desc: 'Original',
            product_price: '4500',
            product_stock: 10,
            product_id: 5
        },
        {
            product_image: 'https://www.masoko.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/4/9/49_inch_lg_smart_49lj550v.jpg',
            product_name: 'TV',
            product_type: 'LG SMART TV ',
            product_desc: 'Screen Size: 49 inches, Color: Black, Warranty: 1 Year',
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