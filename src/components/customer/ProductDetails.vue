<template>
    <div class="container">
        <div class="col-md-12">
            <div class="thumbnail">
                <img class="img-responsive img_logo" src="../../assets/ps4.jpg" alt="">
                <div class="caption-full">
                    <h4 class="pull-right">{{ item.product_price | toKSH }}</h4>
                    <h4> {{ item.product_name }}</h4>
                    <p> {{ item.product_desc | shortDescription}} </p>
                </div>
                <div class="ratings">
                    <span>{{ item.product_stock }} left in stock</span>
                    <p class="pull-right">
                        <button @click="addItem" :disabled="item.product_quantity === 0" class="btn btn-success">
                            Add to cart
                        </button>
                    </p>
                    <div class="clearfix"></div>
                </div>
            </div>


        </div>

    </div>
</template>

<script>

    import {mapGetters} from 'vuex';
    import {addItemMixin} from "../../mixins/addItemMixin";

    export default {
        mixins: [addItemMixin],

        data() {
            return {}
        },
        computed: {
            ...mapGetters(['isProductLoading', 'shopProductList']),

            item() {
                let id = this.$route.params.id;

                if (this.shopProductList.length >= 1) {

                    const result = this.shopProductList.filter(productlist => productlist.product_id == id);

                    return result[0]||{};
                }
                return {};
            }
        },

    }
</script>

<style scoped>
    .caption-full {
        padding-right: 10px;
        padding-left: 10px;
    }

    .ratings {
        padding-right: 10px;
        padding-left: 10px;
        color: #d17581;
    }

    .img_logo{
        height: 300px;
    }
</style>
