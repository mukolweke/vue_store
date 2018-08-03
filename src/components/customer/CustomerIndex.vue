<template>
    <div class="container" :class="{loadingItem: isProductLoading}">
        <div class="is-flex" v-if="!isProductLoading">
            <app-product-item v-for="prod in products" :item="prod" :key="prod.id" :displayList="displayList"></app-product-item>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ProductItem from './ProductItem.vue';

    export default {

        data() {
            return {
                displayList: false,
                products: [
                    {
                    product_name: 'PLAYSTATION',
                    product_type: 'PS2',
                    product_desc: '2ND HAND, CHIPPED',
                    product_price: '9000',
                    product_stock: 20,
                    product_id: 1
                    },
                    {
                        product_name: 'GAMES',
                        product_type: 'NBA 2K19',
                        product_desc: 'SEALED',
                        product_price: '6500',
                        product_stock: 10,
                        product_id: 2
                    },
                    {
                        product_name: 'GAME PADS',
                        product_type: 'PS2',
                        product_desc: 'Original',
                        product_price: '500',
                        product_stock: 10,
                        product_id: 3
                    },],
            }
        },
        computed: {
            ...mapGetters(['isProductLoading']),
        },
        components: {
            appProductItem: ProductItem,

        },
        methods: {
            changeDisplay(isList) {
                this.displayList = isList;
            }
        }
    }
</script>

<style scoped>
    .is-flex {
        display: flex;
        flex-wrap: wrap;
    }

    .loadingItem {
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .is-flex>[class*='col-'] {
        display: flex;
        flex-direction: column;
    }

    .action-panel {
        margin-bottom: 10px;
        margin-right: 5px;
    }
</style>
