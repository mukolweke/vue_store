<template>
    <div class="container">
        <table id="cart" class="table table-hover table-condensed">
            <thead>
            <tr>
                <th style="width:30%">Customer</th>
                <th style="width:40%">Shopping</th>
                <th style="width:20%">Total</th>
                <th style="width:10%"></th>
            </tr>
            </thead>

            <transition-group name="list-shopping-cart" tag="tbody">
                <app-order-item v-for="(order,index) in getOrders" :order="order" :key="index"></app-order-item>
            </transition-group>

        </table>
    </div>
</template>

<script>
    import { mapGetters }from 'vuex'
    import OrderItem from './OrderItem'

    export default {
        name: "Orders",

        computed:{
            ...mapGetters(['getOrders'])

        },

        components: {

            appOrderItem: OrderItem

        }

    }
</script>

<style scoped>

</style>