<template>
    <div>
        <h1>Admin View</h1>
        <el-card class="box-card-outer">
            <el-row>
                <input type="text" name="search" class="search" style="height: 30px;" placeholder="Search..">
            </el-row>
            <hr style="width: 100px;">
            <br>
            <el-row>
                <ul>
                    <li v-for="product in getProducts">
                        <el-col :span="10">
                            <div class="grid-content">
                                <!--<router-link :to></router-link>-->
                                <img class="my_images" @click="productDialog(product.product_id)"
                                     src="../../assets/ps4.jpg" alt="image"/>
                                <p> {{product.product_name}} <br> {{product.product_type}} <br> KSH
                                    {{product.product_price}}</p>
                            </div>
                        </el-col>
                    </li>
                </ul>
            </el-row>

        </el-card>
        <el-row>
            <el-dialog
                    :visible.sync="productVisibleDialog"
                    width="70%"
                    center>
                <el-row>
                    <el-col :span="12">
                        <img class="my_pop_images" src="../../assets/ps4.jpg" alt="image"/>
                    </el-col>
                    <el-col :span="12">
                        <h1>PLAYSTATION</h1>
                        <h3>PS4 PRO</h3>
                        <h4>Description</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <el-input placeholder="Please input" :disabled="true" v-model="input"></el-input>
                        <br><br>
                        <el-row>
                            <el-col :span="12">
                                <el-button @click="open2" type="danger">DELETE PRODUCT</el-button>
                            </el-col>
                            <el-col :span="12">
                                <el-button @click="innerVisible" type="primary">EDIT PRODUCT</el-button>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-dialog
                        width="70%"
                        :visible.sync="innerVisibleDialog"
                        append-to-body>
                    <product_form>
                        <slot></slot>
                    </product_form>
                </el-dialog>
            </el-dialog>
            <!---->
        </el-row>
    </div>

</template>

<script>
    import product_form from './product_form'

    export default {
        name: "AdminIndex",
        components: {product_form},
        data() {
            return {
                input: '',
                product: null,
                prod_id: null,
                productVisibleDialog: false,
                innerVisibleDialog: false,
                options: [{
                    value: '1',
                    label: '1'
                }, {
                    value: '2',
                    label: '2'
                }, {
                    value: '3',
                    label: '3'
                }, {
                    value: '4',
                    label: '5'
                }, {
                    value: '6',
                    label: '6'
                }],
                value4: '',
                products: []
            }
        },
        computed: {

            getProducts() {
                return this.$store.getters.getProducts
            },

            getProductDetails() {
                return this.$store.getters.getProduct
            },

        },
        methods: {
            open2() {
                this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    this.deleteProduct($id);
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
            deleteProduct($id) {
                this.$store.dispatch('deleteProduct', $id);
            },
            productDialog($id) {
                this.productVisibleDialog = true;
                this.getProduct($id);
            },
            innerVisible() {
                this.innerVisibleDialog = true;
            },
            getProduct($id) {
                this.product = this.$store.dispatch('getProduct', $id);
                this.prod_id = this.product.product_id;
                console.log(this.prod_id)
            }
        },
    }
</script>

<style scoped>

</style>