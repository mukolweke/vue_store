<script>
    import {addItemMixin} from "../../mixins/addItemMixin";

    export default {
        data() {
            return {
                disableButton: false
            }
        },

        props: ['item', 'products'],

        mixins: [addItemMixin],

        watch: {
            'item.product_stock': function (newValue) {

                this.disableButton = newValue === 0 ? true : false;

            }

        }

    }
</script>

<template>
    <div class="col-sm-4 col-lg-4 col-md-4 item" :class="{'list-group-item': products}">
        <div class="thumbnail ">
            <img src="../../assets/ps4.jpg" alt="" class="grow thumbnail-image">
            <div class="caption margin-left-sm">

                <h4 class="pull-right">{{ item.product_price | toKSH}}</h4>

                <router-link :to="'/product/' + item.product_id" tag="h4"><a>{{ item.product_name | camel}}</a>
                </router-link>

                <p class="truncate">{{ item.product_desc | readMore(10, '...')}}</p>

            </div>
            <div class="ratings margin-left-sm">

                <span>{{ item.product_stock }} left in stock</span>

                <p class="pull-right">

                    <button class="btn btn-success" :disabled="disableButton" @click="addItem"> Add to cart</button>

                </p>

                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    div.thumbnail-image {
        height: 100%;
    }

    .favourite-icon {
        font-size: 25px;
    }

    .ratings {
        padding-right: 10px;
        padding-left: 10px;
        color: #d17581;
    }

    .grow {
        transition: all .2s ease-in-out;
    }

    .thumbnail:hover .grow {
        transform: scale(1.1);
    }

    .item.list-group-item {
        border: none;
        float: none;
        width: 100%;
        background-color: #fff;
        margin-bottom: 10px;
    }

    .thumbnail-image {
        padding: 20px;
    }

    .list-group-item .thumbnail-image {
        margin-right: 10px;
        max-height: 150px;
    }

    .item.list-group-item .thumbnail {
        margin-bottom: 0px;

    }

    .item.list-group-item img {
        float: left;
    }

    .item.list-group-item:after {
        clear: both;
    }
</style>
