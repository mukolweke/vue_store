
export const orderMixin =  {

    methods: {

        cancelOrder(id) {

            let order = {...this.order, id, isRemove: true};

            this.$store.dispatch('removeItemInOrder', order);
        }
    }
}