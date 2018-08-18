<script>
    import {mapGetters} from 'vuex'
    import CustomerOrderItem from './OrderCustomerItem'

    export default {
        name: "MyOrders",

        data() {

            return {

                my_email: this.$store.getters.currentUser.email,
            }
        },

        components: {

            customerOrderItem: CustomerOrderItem

        },

        methods: {
            ...mapGetters(['getOrders', 'getMyOrders']),

            myOrders(email) {

                return this.getMyOrders(email);

            }
        }
    }
</script>

<template>
    <div class="container">
        <table id="cart" class="table table-hover table-condensed">
            <thead>
            <tr>
                <th style="width:10%">Customer</th>
                <th style="width:40%">Shopping</th>
                <th style="width:30%" class="text-center">Total</th>
                <th style="width:10%" class="text-center">Status</th>
                <th style="width:10%">Action</th>
            </tr>
            </thead>

            <!--<tr is="cust-order-item" v-for="(order,index) in myOrders(my_email) " :order="order" :key="order.order_id"></tr>-->

            <transition-group name="list-order-items" tag="tbody">
                <customer-order-item v-for="(order) in myOrders(my_email)" :order="order" :key="order.order_id"></customer-order-item>
            </transition-group>

            <!--<cust-order-item :email="my_email"></cust-order-item>-->

        </table>
    </div>
</template>