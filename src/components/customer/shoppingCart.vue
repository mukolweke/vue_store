<template>
    <div class="cart">
        <p class="cart-title">Shopping Cart</p>
        <p class="cart-empty" v-if="cart_count <= 0">Your Shopping Cart is Empty!</p>
        <div class="items" v-else>
            <div class="item clearfix" v-for="item in getProductsInCart">

                <span class="btn" @click="clr(item.item_id)" style="cursor: pointer;color: red;">x</span>&nbsp;&nbsp;

                <span class="btn" @click="inc(item.item_id)" style="cursor: pointer;">+</span>&nbsp;&nbsp;

                <span @click="dec(item.item_id)" class="btn" style="cursor: pointer;">-</span>&nbsp;&nbsp;

                <span class="item-title">{{item.item_name}}</span>

                <!--<span class="item-price">-->
                    <span style="margin-left: 40px;">x&nbsp;{{(item.item_quantity)}}</span>&nbsp;
                    <span class="right">$ {{Number(item.item_quantity) * Number(item.item_price)}}</span>
                <!--</span>-->
            </div>
        </div>
        <div class="cart-total">
            <span>Total</span>
            <span class="right">$ {{total}}</span>
        </div>
        <div class="cart-total">
            <a class="checkout" @click="checkout">CHECKOUT</a>
        </div>
    </div>
</template>
<script>
    import _ from 'lodash'

    export default {
        data() {
            return {

                cart_count: this.$store.getters.getItemsInCart.count,
                items: this.$store.getters.getItemsInCart,
                Cart: [],
                item: null
            }
        },
        computed: {
            total() {

                return _.sumBy(this.items, function (item) {

                    return (Number(item.item_price) * Number(item.item_quantity))

                })

            },

            getProductsInCart() {
                return (this.$store.getters.getItemsInCart);
            }
        },
        methods: {

            clr: function($id) {
                this.$store.dispatch('removeFromCart', $id);
            },

            inc: function ($id) {

                this.$store.dispatch('incrementItemQuantity', $id);

            },

            dec: function ($id) {

                this.$store.dispatch('decrementItemQuantity', $id);

            },

            cart: function () {

                return this.$store.getters.getItemsInCart.map((cartItem) => {

                    return this.$store.getters.getProducts.find((forSaleItem) => {

                        return cartItem === forSaleItem.invId;

                    });

                });
            },

            checkout: function () {

                this.$store.dispatch('clearCart');
                this.open();

            },

            open() {
                this.$message({
                    type: 'success',
                    message: 'Checkout; Till next time',
                });

            },

        },
        mounted: {


        }

    }
</script>
<style>
    .cart {
        margin-left: 1em;
    }

    .checkout{
        background: limegreen;
        cursor: pointer;
        padding: 5px;
        color: white;
        border-radius: 2px;
    }
    .cart-title {
        margin: 0.5em 0 0 0;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        padding: 0.75em;
        background: #35495E;
        color: #fff;
    }

    .cart-empty {
        text-align: center;
        margin: 4em 0 0 0;
        min-height: 300px;
    }

    .cart-total {
        background: #F1F1F1;
        margin: 0;
        padding: 0.75em;
    }

    .items {
        min-height: 300px;
    }

    .item {
        padding: 0.75em 0.75em;
        border-top: 1px solid #ddd;
    }

    .right {
        float: right;
    }

    .item-details {
        width: 100%;
        padding-left: 0.75em;
    }

    .item-title {
        margin: 0;
        font-weight: bold;
    }

    .item-price {
        margin: 0;
        font-size: 0.9em;
    }
</style>