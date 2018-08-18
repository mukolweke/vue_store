<template>
    <div class="col-sm-4 col-lg-4 col-md-4 item" :class="{'list-group-item': products}">
        <div class="thumbnail ">
            <img :src="item.product_image" alt="" class="grow thumbnail-image">
            <div class="caption margin-left-sm">

                <h4 class="pull-right">{{ item.product_price | toFixed(2) | toKSH}}</h4>

                <h4 style="color: #5cb85c;">{{ item.product_name  | camel}}</h4>

                <p>{{ item.product_type }}</p>

                <p class="truncate">{{ item.product_desc | readMore(10, '...')}}</p>

            </div>
            <div class="ratings margin-left-sm">

                <span>{{ item.product_stock }} left in stock</span>

                <p class="pull-right">

                    <button class="btn btn-primary" @click="dialogVisible = true"><span
                            class="glyphicon glyphicon-edit"></span></button>
                    <button class="btn btn-danger" @click="removeProduct(item.product_id)"><span
                            class="glyphicon glyphicon-trash"></span></button>

                </p>

                <div class="clearfix"></div>
            </div>
        </div>

        <!--edit dialog-->
        <el-dialog
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <h3 class="text-center">Edit Product Details</h3>
            <p class="text-center help-block">Please fill in the details correctly</p>
            <hr/>
            <p v-if="errors.length">
            <div class="error">
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
            <el-row>
                <el-col>
                    <el-form ref="form" :model="form" label-width="120px">
                        <el-form-item label="Product Model: ">
                            <el-input class="inpt" placeholder="PlayStation" v-model="form.product_name"></el-input>
                        </el-form-item>
                        <el-form-item label="Product Type: ">
                            <el-input class="inpt" placeholder="PS4 Pro" v-model="form.product_type"></el-input>
                        </el-form-item>
                        <el-form-item label="Description: ">
                            <el-input class="inpt" placeholder="500GB, 2 GAMES ..."
                                      v-model="form.product_desc"></el-input>
                        </el-form-item>
                        <el-form-item label="Product Price: ">
                            <el-input class="inpt" v-model="form.product_price"></el-input>
                        </el-form-item>
                        <el-input v-model="form.product_id" type="hidden" value="1"/>
                        <el-form-item label="Product Stock: ">
                            <el-input class="inpt" v-model="form.product_stock"></el-input>
                        </el-form-item>

                    </el-form>
                </el-col>
            </el-row>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">CANCEL</el-button>
                <el-button type="success" @click="dialogVisible = false"><span class="glyphicon glyphicon-edit"></span>&nbsp;PRODUCT</el-button>
              </span>
        </el-dialog>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {

        props: ['item', 'products'],

        data() {
            return {
                input: '',
                product: null,
                prod_id: null,
                errors: [],
                form: this.item,
                dialogVisible: false
            }
        },

        methods: {
            ...mapActions(['updateProductList']),

            removeProduct: function (key) {

                this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    // delete product
                    this.updateProductList(key)

                    this.$message({
                        type: 'success',
                        message: 'Delete completed'
                    });
                    this.productDialog = false;

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Delete canceled'
                    });
                });
            },

            setEditProduct: function (key) {

                // edit product

            },

            saveEdit: function (product) {
                // save edit

            },

            cancelEdit: function (key) {

                // cancel edit
            },

            handleClose(done) {
                this.$confirm('Confirm cancel edit Product?')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            }


        },

        filters: {

            shortDescription(value) {

                if (value && value.length > 100) {

                    return value.substring(0, 100) + '...';
                } else {
                    return value;
                }
            }
        },

    }
</script>

<style scoped>
    div.thumbnail {
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
