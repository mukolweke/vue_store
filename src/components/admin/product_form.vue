<template>
    <div>
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
                        <el-form-item label="Product Name: ">
                            <el-input class="inpt" v-model="form.product_name"></el-input>
                        </el-form-item>
                        <el-form-item label="Product Type: ">
                            <el-input class="inpt"v-model="form.product_type"></el-input>
                        </el-form-item>
                        <el-form-item label="Description: ">
                            <el-input class="inpt"v-model="form.product_desc"></el-input>
                        </el-form-item>
                        <el-form-item label="Product Price: ">
                            <el-input class="inpt"v-model="form.product_price"></el-input>
                        </el-form-item>
                        <el-input v-model="form.product_id" type="hidden" value="1"/>
                        <el-form-item label="Product Stock: ">
                            <el-input class="inpt"v-model="form.product_stock"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="success" @click="addProduct()"><i class="el-icon-check"></i> Product</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>

        </el-card>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "product_form",
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
                errors:[]
            }
        },
        methods: {

            addProduct:function(){

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
                    this.products.push(this.form);
                    this.$store.dispatch('AddProducts', this.form).then(() => {
                        this.form = {};
                        this.open();
                        // this.$router.push('login');
                    });

                    return true;
                }
            },
            open() {
                this.$message({
                    type: 'success',
                    message: 'Product added to shop.',
                });

            },

        }
    }
</script>

<style scoped>
    .box-card-outer {
        margin: 20px auto;
        width: 500px;
    }
    .inpt{
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