<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex';
    import CartItem from './CartItem.vue';

    export default {
        data() {
            return {
                activeName: '1'
            };
        },

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

<template src="./shoppingCart.php">

</template>



