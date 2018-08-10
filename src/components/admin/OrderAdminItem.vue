<template>
    <tr>
        <td style="width:20%" data-th="Customer">{{ order.order_name }}</td>
        <td style="width:40%" data-th="Shopping">
            <div class="row" v-for="(order_desc,index) in order.shopping_list">
                <div class="col-sm-2 hidden-xs">
                    <img src="../../assets/ps4.jpg" alt="..." class="img-responsive"/>
                </div>
                <div class="col-sm-10">
                    <p>
                        <span class="pname">{{ order_desc.product_name }}</span>
                        <span class="qty">QTY:&nbsp;{{order_desc.product_quantity }}</span>
                        <span class="price">PRICE:&nbsp;{{order_desc.product_price}}</span>
                    </p>
                </div>
            </div>
        </td>
        <td style="width:30%" data-th="Subtotal" class="text-center">{{orderTotal}}</td>
        <td style="width:10%" class="actions" data-th="">
            <button class="btn btn-success btn-sm" @click="cancelOrder(order.order_id)"><i class="">SEND ORDER&nbsp;<span
                    class="glyphicon glyphicon-send"></span></i></button>
        </td>

    </tr>
</template>

<script>
    import {mapActions} from 'vuex';
    import {orderMixin} from "../../mixins/orderMixin";

    export default {
        props: ['order'],

        mixins: [orderMixin],

        data() {
            return {
                shoppingList: [],
            }
        },

        computed: {

            orderTotal() {

                return this.order.shopping_list.reduce((acc, current) => acc + (current.product_quantity * current.product_price), 0);

            },

        },
    }
</script>

<style scoped>
    .pname {
        font-weight: bold;
        padding-left: 1em;
    }

    .qty {
        padding-left: 3em;
    }

    .price {
        padding-left: 3em;
    }


</style>