import {mapActions} from 'vuex'

export const addItemMixin =  {

    methods: {

        ...mapActions(['updateCart','reduceStock']),

        addItem() {
           let vm = this;
            let order = {...this.item,product_quantity:1, isAdd: true}

            this.updateCart(order).then(()=>{

                this.reduceStock(order)

            });
        }
    },
}