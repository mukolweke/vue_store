const state = {
	isLoading: true,
	productList: [
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
            product_desc: 'Original Game Pads',
            product_price: '500',
            product_stock: 10,
            product_id: 3
        },
	]
}

const mutations = {
	'UPDATE_PRODUCT_LIST' (state, productList) {
		state.productList = productList;
		state.isLoading = false;
	}
}

const actions = {

}

const getters = {
	products: (state) => {
		return state.productList;
	},
	isProductLoading: (state) => {
		return state.isLoading;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}