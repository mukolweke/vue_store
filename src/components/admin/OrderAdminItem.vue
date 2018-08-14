<template>
    <tr style="width: 100px;">
        <td style="width:30%" data-th="Customer">{{ order.order_name }}</td>
        <td style="width:30%" data-th="Order Description">
            #&nbsp;{{index + 1}}&nbsp;{{getDate}}
        </td>
        <td style="width:30%" data-th="Subtotal" class="text-center">{{orderTotal | toKSH}}</td>
        <td style="width:10%" class="actions" data-th="">
            <!--<button class="btn btn-success btn-sm" @click="cancelOrder(order.order_id)"><i class="">SEND ORDER&nbsp;<span-->
            <!--class="glyphicon glyphicon-send"></span></i></button>-->
            <router-link :to="{ name: 'order_view', params: { order: order }}"><span
                    class="glyphicon glyphicon-eye-open"></span></router-link>
        </td>

        <!--<div class="row" v-for="(order_desc,index) in order.shopping_list">-->
        <!--<div class="col-sm-2 hidden-xs">-->
        <!--<img src="../../assets/ps4.jpg" alt="..." class="img-responsive"/>-->
        <!--</div>-->
        <!--<div class="col-sm-10">-->
        <!--<p>-->
        <!--<span class="pname">{{ order_desc.product_name | toUp}}</span>-->
        <!--<span class="qty">{{order_desc.product_quantity | toQTY }}</span>-->
        <!--<span class="price">{{order_desc.product_price | toKSH }}</span>-->
        <!--</p>-->
        <!--</div>-->
        <!--</div>-->

    </tr>
</template>

<script>
    import {mapActions} from 'vuex';
    import {orderMixin} from "../../mixins/orderMixin";

    export default {
        props: ['order','index'],

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
            getDate() {
                let myDate = new Date();
                let month = ('0' + (myDate.getMonth() + 1)).slice(-2);
                let date = ('0' + myDate.getDate()).slice(-2);
                let year = myDate.getFullYear();
                return year + '/' + month + '/' + date;
            }

        },
    }
</script>
