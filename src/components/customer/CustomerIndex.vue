<template>
    <div class="container" :class="{loadingItem: isProductLoading}">

        <div class="is-flex" v-if="!isProductLoading">
            <app-product-item v-for="prod in shopProductList" :item="prod" :key="prod.id"></app-product-item>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ProductItem from './ProductItem.vue';

    export default {

        data() {
            return {

            }
        },

        computed: {
            ...mapGetters(['isProductLoading', 'shopProductList']),
        },

        components: {
            appProductItem: ProductItem,
        },

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
