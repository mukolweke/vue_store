<script>
    import {mapActions} from 'vuex';

    export default {
        props: ['cartItem'],

        computed: {

            subtotal() {

                return this.cartItem.product_quantity * this.cartItem.product_price;
            },

        },

        watch: {

            'cartItem.product_quantity': function (newValue) {

                this.addStock(this.cartItem);

            }

        },

        methods: {
            ...mapActions(['updateCart', 'removeItemInCart', 'addStock']),

            removeItem() {

                let order = {...this.cartItem, isRemove: true}

                this.removeItemInCart(order);
            },

            updateQuantity(event) {

                let order = {...this.cartItem, product_quantity: (parseInt(event.target.value)), isAdd: false}

                this.updateCart(order);
            }

        }
    }
</script>

<template>
    <tr>
        <td data-th="Product">
            <div class="row">
                <div class="col-sm-2 hidden-xs">
                    <img :src="cartItem.product_image" alt="..." class="img-responsive"/>
                </div>
                <div class="col-sm-10">
                    <h4 class="nomargin">{{ cartItem.product_name }}</h4>
                    <p>{{ cartItem.product_desc }}</p>
                </div>
            </div>
        </td>
        <td data-th="Price">{{ cartItem.product_price }}</td>
        <td data-th="Quantity">
            <input type="number" class="form-control text-center"
                   :value="cartItem.product_quantity"

                   @input="updateQuantity"
                   min="0">
        </td>
        <td data-th="Subtotal" class="text-center">${{ subtotal }}</td>
        <td class="actions" data-th="">
            <button class="btn btn-danger btn-sm" @click="removeItem"><i class="fa fa-trash-o"></i></button>
        </td>
    </tr>
</template>
