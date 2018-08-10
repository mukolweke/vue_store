<template>
    <div class="container">
        <table id="cart" class="table table-hover table-condensed">
            <thead>
            <tr>
                <th style="width:10%">Customer</th>
                <th style="width:40%">Shopping</th>
                <th style="width:30%" class="text-center">Total</th>
                <th style="width:10%" class="text-center">STATUS</th>
                <th style="width:10%">Action</th>
            </tr>
            </thead>
            <tr is="cust-order-item" v-for="(order,index) in myOrders(my_email) " :order="order" :key="order.order_id"></tr>

        </table>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import OrderItem from './OrderCustomerItem'

    export default {
        name: "MyOrders",

        data() {

            return {

                my_email: this.$store.getters.currentUser.email,
            }
        },

        computed: {

            myOrders(my_email) {

                return this.getMyOrders(my_email);

            }
        },


        components: {

            custOrderItem: OrderItem

        },

        methods: {
            ...mapGetters(['getMyOrders']),
        }
    }
</script>

<style scoped>

</style>