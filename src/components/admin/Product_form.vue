<template>
    <div>
        <h2 class="text-center">Create Product</h2>
        <p class="text-center help-block">Please fill in the details correctly</p>
        <el-container>
            <el-card class="box-card-outer">
                <p v-if="errors.length">
                <div class="error">
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </div>
                <el-row>
                    <el-col :span="12">
                        <el-form ref="form" :model="form" label-width="120px">
                            <el-form-item label="Product Model: ">
                                <el-input class="inpt" placeholder="PlayStation" v-model="form.product_name"></el-input>
                            </el-form-item>
                            <el-form-item label="Product Type: ">
                                <el-input class="inpt" placeholder="PS4 Pro" v-model="form.product_type"></el-input>
                            </el-form-item>
                            <el-form-item label="Description: ">
                                <el-input class="inpt" placeholder="500GB, 2 GAMES ..." v-model="form.product_desc"></el-input>
                            </el-form-item>
                            <el-form-item label="Product Price: ">
                                <el-input class="inpt" v-model="form.product_price"></el-input>
                            </el-form-item>
                            <el-input v-model="form.product_id" type="hidden" value="1"/>
                            <el-form-item label="Product Stock: ">
                                <el-input class="inpt" v-model="form.product_stock"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="success" class="" @click="addItem()"><span class="glyphicon glyphicon-plus"></span>&nbsp;PRODUCT
                                </el-button>
                            </el-form-item>

                        </el-form>
                    </el-col>
                </el-row>

            </el-card>
        </el-container>
    </div>
</template>

<script>
    import {ref} from '../../firebase.conf'
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                productDialog: false,
                form: {
                    product_name: '',
                    product_type: '',
                    product_desc: '',
                    product_price: 0,
                    product_stock: 0,
                },
                products: [],
                errors: [],
                product:''
            }
        },

        methods: {
            ...mapActions(['addProduct']),

            addItem() {
                this.errors = [];

                if (!this.form.product_name) {
                    this.errors.push('Product Name required.');
                }
                if (!this.form.product_type) {
                    this.errors.push('Product Type required.');
                }
                if (!this.form.product_desc) {
                    this.errors.push('Description required.');
                }
                if (!this.form.product_price) {
                    this.errors.push('Price required.');
                }
                if (!this.form.product_stock) {
                    this.errors.push('Stock required.');
                }

                if (this.form.product_stock && this.form.product_price && this.form.product_type && this.form.product_desc && this.form.product_name) {

                    // this.$firebaseListener.product.push({
                    //     name: this.form.product_name,
                    //     type: this.form.product_type,
                    //     desc: this.form.product_desc,
                    //     price: this.form.product_price,
                    //     stock: this.form.product_stock,
                    //     edit: false
                    // })

                    // adds to store
                    // this.$store.dispatch('AddProducts', this.form).then(() => {
                    //     this.form = {};
                    //     this.open();
                    //     this.goHome();
                    // });

                    this.addProduct(this.form).then(()=>{
                        this.form = {};
                            this.open();
                            this.goHome();
                    })


                    return true;

                }
            },
            
            open() {

                this.$message({
                    type: 'success',
                    message: 'Product added to shop.',
                });

            },

            goHome()
            {
                this.$router.push({name: 'admin'});
            },

        }
    }
</script>

<style scoped>
    .box-card-outer {
        margin: 20px auto;
        width: 500px;
    }

    .inpt {
        width: 300px;
    }

    .error {
        background: #F56C6C;
        border-radius: 5px;
    }

    ul li {
        list-style: none;
    }
</style>