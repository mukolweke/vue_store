<template>
    <div class="cart">
        <p class="cart-title">Shopping Cart</p>
        <p class="cart-empty" v-if="cart_count <= 0">Your Shopping Cart is Empty!</p>
        <div class="items" v-else>
            <div class="item clearfix" v-for="item,index in getProductsInCart">

                <span class="btn" @click="clear(item)" style="cursor: pointer;color: red;"><el-tag type="danger">X</el-tag></span>&nbsp;&nbsp;

                <span class="btn" @click="increaseProduct(item)" style="cursor: pointer;"><el-tag type="sucess">+</el-tag></span>&nbsp;&nbsp;

                <span @click="decreaseProduct(item)" class="btn" style="cursor: pointer;"><el-tag type="info">-</el-tag></span>&nbsp;&nbsp;

                <span class="item-title">{{item.product_name}}</span>

                <span style="margin-left: 40px;">x&nbsp;{{item.item_quantity}}</span>&nbsp;

                <span class="right">$ {{Number(item.item_quantity) * Number(item.product_price)}}</span>
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
                item: {
                    item_name: '',
                    item_quantity: '',
                    item_price: '',
                    item_id: ''
                }
            }
        },
        computed: {
            total() {
                // reduce function
               return this.$store.getters.getItemsInCart.reduce((ac, cartItem)=>Number(ac)+Number((cartItem.item_quantity*cartItem.product_price)),0);

            },

            getProductsInCart() {
                return (this.$store.getters.getItemsInCart);
            }
        },
        methods: {

            clear: function ($id) {
                console.log('view: '+$id);

                this.$store.dispatch('removeFromCart', $id);
            },

            increaseProduct: function ($id) {
                this.$store.dispatch('incrementItemQuantity', $id);

            },

            decreaseProduct: function ($id) {

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
        mounted: {}

    }
</script>
<style>
    .cart {
        margin-left: 1em;
    }

    .checkout {
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