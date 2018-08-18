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

                return 1000;

                // return this.order.shopping_list.reduce((acc, current) => acc + (current.product_quantity * current.product_price), 0);

            },

        },
    }
</script>

<template>
    <tr>
        <td style="width:10%" data-th="Customer">{{ order }}</td>
        <td style="width:40%" data-th="Shopping">
            <!--<div class="row" v-for="(order_desc,index) in order.shopping_list">-->
                <!--<div class="col-sm-2 hidden-xs">-->
                    <!--<img :src="item.product_image" alt="..." class="img-responsive"/>-->
                <!--</div>-->
                <!--<div class="col-sm-10">-->
                    <!--<p>-->
                        <!--<span class="pname">{{ order_desc.product_name }}</span>-->
                        <!--<span class="qty">QTY:&nbsp;{{order_desc.product_quantity }}</span>-->
                        <!--<span class="price">PRICE:&nbsp;{{order_desc.product_price}}</span>-->
                    <!--</p>-->
                <!--</div>-->
            <!--</div>-->
        </td>
        <td style="width:30%" data-th="Subtotal" class="text-center">{{orderTotal}}</td>
        <td style="width:10%" data-th="Subtotal" class="text-center">{{order.status}}</td>
        <td style="width:10%" class="actions" data-th="">
            <button class="btn btn-danger btn-sm" @click="cancelOrder(order.order_id)"><i class="glyphicon glyphicon-trash">&nbsp;ORDER</i></button>
        </td>

    </tr>

    <!--<tr>-->
        <!--<td data-th="Product">-->
            <!--<div class="row">-->
                <!--<div class="col-sm-2 hidden-xs">-->
                    <!--<img :src="order.product_image" alt="..." class="img-responsive"/>-->
                <!--</div>-->
                <!--<div class="col-sm-10">-->
                    <!--<h4 class="nomargin">{{ order.product_name }}</h4>-->
                    <!--<p>{{ order.product_desc }}</p>-->
                <!--</div>-->
            <!--</div>-->
        <!--</td>-->
        <!--<td data-th="Price">{{ order.product_price }}</td>-->
        <!--<td data-th="Quantity">-->
            <!--<input type="number" class="form-control text-center"-->
                   <!--:value="order.product_quantity"-->

                   <!--@input="updateQuantity"-->
                   <!--min="0">-->
        <!--</td>-->
        <!--<td data-th="Subtotal" class="text-center">${{ subtotal }}</td>-->
        <!--<td class="actions" data-th="">-->
            <!--<button class="btn btn-danger btn-sm" @click="removeItem"><i class="fa fa-trash-o"></i></button>-->
        <!--</td>-->
    <!--</tr>-->


</template>