<template>

    <div class="container">
        <a type="button" @click="showOrders" class="cursor:pointer;"><span class="glyphicon glyphicon-eye-close"></span></a>
        <table id="cart" class="table table-hover table-condensed">
            <thead>
            <tr>
                <th style="width:20%">Customer</th>
                <th style="width:30%">Details</th>
                <th style="width:30%" class="text-center">Total</th>
            </tr>
            </thead>

            <tr style="height: 80px;">
                <td style="width:30%;padding-top: 30px;" data-th="Customer">{{ order.order_name }}</td>
                <td style="width:20%;padding-top: 30px;" data-th="Order Description">
                    #&nbsp;{{index + 1}}&nbsp;{{getDate}}
                </td>
                <td style="width:20%;padding-top: 30px;" data-th="Subtotal" class="text-center">{{orderTotal | toKSH}}</td>
                <td style="width:30%;padding-top: 30px;" data-th="Subtotal" v-if="order.status == 0" class="text-center">
                    <span class="alert alert-danger" role="alert"> Pending </span>
                </td>
            </tr>
        </table>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data () {
            return {

            }
        },

        created () {

            this.searchOrder();

        },

        methods: {
            ...mapActions(['searchingOrder']),

            ...mapGetters(['getSearchedOrder']),

            searchOrder () {

                this.searchingOrder(this.$route.params.order_id)
            },

            getSearchOrder(){

                return this.getSearchedOrder();

            }

        },

        computed:{



        }
    }
</script>

<style scoped>

</style>