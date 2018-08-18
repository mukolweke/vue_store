<template>
    <div class="container">
        <table id="cart" class="table table-hover table-condensed">
            <thead>
            <tr>
                <th style="width:20%">Customer</th>
                <th style="width:30%">Ordered Date</th>
                <th style="width:30%" class="text-center">Total</th>
                <th style="width:10%" class="text-center">Status</th>
                <th style="width:10%">Action</th>
            </tr>
            </thead>

            <transition-group name="list-shopping-cart" tag="tbody">
                <app-order-item v-for="(order,index) in getOrders" :order="order" :index="index"
                                :key="index"></app-order-item>

            </transition-group>

        </table>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import OrderItem from './OrderAdminItem'
    import OrderView from './OrderView'

    export default {
        name: "Orders",

        computed: {
            ...mapGetters(['getOrders'])

        },

        components: {

            appOrderItem: OrderItem,

        }

    }
</script>

<style scoped>

</style>