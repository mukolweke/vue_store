<template>
    <div class="app">
        <button @click="logout">Logout</button>
        <h1>{{ msg }}</h1>
        <div class="error">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>
        <el-row>
            <el-col :span="18">
                <ul>
                    <li v-for="product in getProducts">
                        <el-col :span="10">
                            <div class="grid-content">

                                <img class="my_images" @click="productDialog = true" src="../../assets/ps4.jpg" alt="image"/>
                                <p> {{product.product_name}} <br> {{product.product_type}} <br> KSH {{product.product_price}}</p>
                                <el-form ref="form" :model="form" label-width="120px">
                                    <el-form-item label="Product name: ">
                                        <el-input class="inpt" type="text" v-model="form.item_name" v-bind:value="{}">1</el-input>
                                    </el-form-item>
                                    <el-form-item label="Product id: ">
                                        <el-input class="inpt" type="number" v-model="form.item_price">fdsfd</el-input>
                                    </el-form-item>
                                    <el-form-item label="Product qnty: ">
                                        <el-input class="inpt" type="number" v-model="form.item_quantity"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Product price: ">
                                        <el-input class="inpt" type="number" v-model="form.item_price">{{product.product_price}}</el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="success" @click="addToCart()"><i class="el-icon-check"></i> Add to Cart</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-col>
                    </li>
                </ul>
            </el-col>
            <el-col :span="6">
                <div class="shopping-cart">
                    <shoppingCart></shoppingCart>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import firebase from 'firebase'
    import shoppingCart from './shoppingCart'

    export default {
        name: 'customer',
        data() {
            return {
                msg:'User View',
                form: {
                    item_name: '',
                    item_quantity: null,
                    item_price: null,
                    item_id:null
                },
                Cart: [],
                errors:[]
            }
        },
        methods: {

            logout: function () {

                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            },

            addToCart:function () {
                console.log(form.item_name)
                if (this.form.item_name && this.form.item_quantity && this.form.item_price && this.form.item_id) {
                    this.Cart.push(this.form);
                    this.$store.dispatch('AddToCart', this.form).then(() => {
                        // this.form = {};
                        this.open();
                    });

                    return true;
                }
            },

            open() {
                this.$message({
                    type: 'success',
                    message: 'Cart added',
                });

            },
        },
        components:{shoppingCart},

        computed:{
            getProducts() {
                return (this.$store.getters.getProducts);
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .app{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;

    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .my_images {
        width: 200px;
        height: 200px;
        cursor: pointer;
    }

    ul li {
        list-style: none;
        display: inline-flex;
        margin-left: 20px;
    }

    .inpt{
        width: 300px;
    }
    .error {
        background: #F56C6C;
        border-radius: 5px;
    }

    h1, h2 {
        font-weight: normal;
        text-align: center;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
