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
                <!--using store array-->
                <ul>
                    <li v-for="product in getProducts">
                        <el-col :span="10">
                            <div class="grid-content">

                                <img class="my_images" @click="productDialog = true" src="../../assets/ps4.jpg" alt="image"/>
                                <p> {{product.product_name}} <br> {{product.product_type}} <br> KSH {{product.product_price}}</p>

                                <el-button type="success" @click="addCart(product.product_id)"><i class="el-icon-check"></i> Add to Cart</el-button>




                                <!--<el-form ref="form" :model="form" label-width="120px">-->
                                    <!--<el-form-item label="Product name: ">-->
                                        <!--<el-input class="inpt" type="text" v-model="form.item_name" >1</el-input>-->
                                    <!--</el-form-item>-->
                                    <!--<el-form-item label="Product id: ">-->
                                        <!--<el-input class="inpt" type="number" v-model="form.item_price"></el-input>-->
                                    <!--</el-form-item>-->
                                    <!--<el-form-item label="Product qnty: ">-->
                                        <!--<el-input class="inpt" type="number" v-model="form.item_quantity"></el-input>-->
                                    <!--</el-form-item>-->
                                    <!--<el-form-item label="Product price: ">-->
                                        <!--<el-input class="inpt" type="number" v-model="form.item_price">{{product.product_price}}</el-input>-->
                                    <!--</el-form-item>-->
                                    <!--<el-form-item>-->
                                        <!--<el-button type="success" @click="addToCart()"><i class="el-icon-check"></i> Add to Cart</el-button>-->
                                    <!--</el-form-item>-->
                                <!--</el-form>-->
                            </div>
                        </el-col>
                    </li>
                </ul>


                <!--using firebase-->
                <!--<div class="grid-content">-->
                    <!--<ul>-->
                        <!--<li v-for="prod in product" v-bind:key="prod['.key']">-->
                            <!--<el-col :span="12">-->
                                <!--<div class="grid-content" style="text-align: left;">-->
                                    <!--<img class="my_images disabled" @click="productDialog()"-->
                                         <!--src="../../assets/ps4.jpg" alt="image"/>-->
                                    <!--<p> {{prod.name}} </p><p>Type:&nbsp;{{prod.type}}  </p>-->
                                    <!--<p> KSH {{prod.price}} </p>-->
                                    <!--<p>Stock:&nbsp;{{prod.stock}}</p>-->
                                    <!--<el-button type="success" @click="addCart(prod.id)"><i class="el-icon-check"></i> Add to Cart</el-button>-->
                                <!--</div>-->
                            <!--</el-col>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->



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
    import {db} from '../../firebase.conf'
    import shoppingCart from './shoppingCart'

    export default {
        name: 'customer',
        data() {
            return {
                msg:'User View',
                product_id:null,
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
        firebase :{
            product: db.ref('product')
        },
        methods: {

            logout: function () {

                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            },


            addCart(id){
                this.$store.dispatch("AddToCart",id);
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
