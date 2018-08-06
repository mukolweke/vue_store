

const state = {
	isLoading: true,
    products:[
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
            product_desc: 'Original, White, 3 circle ...',
            product_price: '500',
            product_stock: 10,
            product_id: 6
        },
    ]

};

const mutations = {
	'UPDATE_PRODUCT_LIST' (state, productList) {
		state.productList = productList;
		state.isLoading = false;
	}
};

const actions = {

}

const getters = {
    shopProductList: (state) => {

		return state.products;

	},

	isProductLoading: (state) => {

		return state.isLoading;

	}
};

export default {
	state,
	mutations,
	actions,
	getters
}