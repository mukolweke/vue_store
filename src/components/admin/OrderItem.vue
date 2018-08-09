<template>
    <tr>
        <td data-th="Customer">{{ order.order_name }}</td>
        <td data-th="Shopping">
            <div class="row" v-for="(order_desc,index) in order.shopping_list">
                <div class="col-sm-2 hidden-xs">
                    <img src="../../assets/ps4.jpg" alt="..." class="img-responsive"/>
                </div>
                <div class="col-sm-10">
                    <p>
                        <span class="pname" style="width:30%">{{ order_desc.product_name }}</span>
                        <span class="qty" style="width:10%">{{order_desc.product_quantity }}</span>
                        <span class="price" style="width:30%">{{order_desc.product_price}}</span>
                    </p>
                </div>
            </div>
        </td>
        <td data-th="Subtotal" class="text-center">1000</td>
        <td class="actions" data-th="">
            <button class="btn btn-success btn-sm"><i class="">SEND</i></button>
        </td>
    </tr>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['order'],
        computed: {

        },
        methods: {

        }
    }
</script>

<style scoped>
    .pname{
        font-weight: bold;
    }

    .qty{
        color: #d17581;
    }

    .price{
        color: #d17581;
    }


</style>