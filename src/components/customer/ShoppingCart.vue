<template>
    <div class="container">
        <table id="cart" class="table table-hover table-condensed">
            <thead>
            <tr>
                <th style="width:50%">Product</th>
                <th style="width:10%">Price</th>
                <th style="width:8%">Quantity</th>
                <th style="width:22%" class="text-center">Subtotal</th>
                <th style="width:10%"></th>
            </tr>
            </thead>

            <transition-group name="list-shopping-cart" tag="tbody">
                <app-cart-item v-for="cartItem in cartItemList" :cartItem="cartItem" :key="cartItem.product_id"></app-cart-item>
            </transition-group>

            <tfoot>
            <tr class="visible-xs">
                <td class="text-center"><strong>Total {{ totalValue }}</strong></td>
            </tr>
            <tr>
                <td>
                    <button class="btn btn-warning" @click="saveShoppingCartLocal">
                        <i class="fa fa-angle-left"></i>Continue Shopping
                    </button>
                </td>
                <td colspan="2" class="hidden-xs"></td>
                <td class="hidden-xs text-center"><strong>Total&nbsp;${{ totalValue }}</strong></td>
                <td>
                    <button class="btn btn-success btn-block" @click="checkout">
                        Checkout <i class="fa fa-angle-right"></i>
                    </button>
                </td>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex';
    import CartItem from './CartItem.vue';

    export default {
        computed: {
            ...mapGetters(['cartItemList', 'isLoggedIn', 'shopProductList', 'currentUser']),

            totalValue() {

                let res = 0;

                this.cartItemList.map(item => {

                    res += item.product_price * item.product_quantity;

                });
                return res;
            }

        },

        components: {

            appCartItem: CartItem

        },

        methods: {

            ...mapActions(['saveShoppingCart', 'addMessage', 'saveToTransaction', 'clearCart']),

            checkValidCart(itemList, prodList) {
                let isValid = true;
                let message = "";

                itemList.map(item => {
                    for (let prodIdx = 0; prodIdx < prodList.length; prodIdx++) {

                        if (prodList[prodIdx].product_id === item.id) {

                            if (prodList[prodIdx].product_stock < item.product_quantity) {

                                message = `Only ${prodList[prodIdx].product_stock} ${item.product_name} available in stock`;

                                isValid = false;

                                return;
                            }
                            break;
                        }
                    }
                });
                return {
                    isValid,
                    message
                }
            },

            saveShoppingCartLocal() {

                if (this.isLoggedIn) {

                    let {
                        isValid,
                        message
                    } = this.checkValidCart(this.cartItemList, this.shopProductList);

                    if (isValid) {

                        this.saveShoppingCart({
                            cartItemList: this.cartItemList,

                            uid: this.currentUser.uid
                        }).then(() => {
                            this.addMessage({
                                messageClass: 'success',
                                message: 'Continue Shopping...'
                            });
                            this.$router.push('/customer-dashboard');
                        });
                    } else {
                        this.addMessage({
                            messageClass: 'danger',
                            message: message
                        });
                    }
                } else {
                    this.addMessage({
                        messageClass: 'warning',
                        message: 'Please login to save your cart'
                    });
                }
            },

            checkout() {
                if (this.isLoggedIn) {
                    if (!this.cartItemList || this.cartItemList.length === 0) {
                        this.addMessage({
                            messageClass: 'warning',
                            message: 'Your cart is empty!'
                        });
                        return;
                    }
                    let {
                        isValid,
                        message
                    } = this.checkValidCart(this.cartItemList, this.shopProductList);

                    if (isValid) {
                        this.saveToTransaction({
                            cartItemList: this.cartItemList,
                            uid: this.currentUser.uid
                        }).then(() => {
                            this.addMessage({
                                messageClass: 'success',
                                message: 'Your order has been successfully processed!'
                            });
                            this.saveShoppingCart({
                                cartItemList: [],
                                uid: this.currentUser.uid
                            });
                            this.clearCart();
                            this.$router.push('/');
                        });
                    } else {
                        this.addMessage({
                            messageClass: 'danger',
                            message: message
                        });
                    }
                } else {
                    this.addMessage({
                        messageClass: 'warning',
                        message: 'Please login to checkout'
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .list-shopping-cart-leave-active {
        transition: all 0.4s;
    }

    .list-shopping-cart-leave-to {
        opacity: 0;
        transform: translateX(50px);
    }
</style>
