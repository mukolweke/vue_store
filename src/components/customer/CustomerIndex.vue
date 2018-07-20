<template>
    <div class="app">
        <navbar>
            <slot></slot>
        </navbar>
        <div class="error">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>
        <el-row>
            <el-col :span="18">
                <!--using store array-->
                <ul>
                    <li v-for="prod in getProducts" v-bind:key="prod.id">
                        <el-col>
                            <div class="grid-content" style="text-align: left;">
                                <div><!--angular used-->
                                    <img class="my_images disabled" @click="productDialog()"
                                         src="../../assets/ps4.jpg" alt="image"/>
                                    <p>Name:&nbsp;{{prod.product_name}} </p>
                                    <p>Type:&nbsp;{{prod.product_type}} </p>
                                    <p>Ksh:&nbsp;{{prod.product_price}} </p>
                                    <p>Stock:&nbsp;{{prod.product_stock}}</p>
                                    <el-button type="success" @click="addCart(prod.product_id)"><i class="el-icon-check"></i> Add to Cart</el-button>
                                </div>
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
    import {db} from '../../firebase.conf'
    import shoppingCart from './ShoppingCart'
    import firebase from 'firebase/app'
    import 'firebase/auth'
    import navbar from './Navbar'

    export default {
        name: 'customer',
        data() {
            return {
                msg:'User View',
                product_id:null,
                form: {
                    item_name: '',
                    item_quantity: '',
                    item_price: '',
                    item_id:''
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
                console.log(id);
                this.$store.dispatch("AddToCart",id);
            },

            open() {
                this.$message({
                    type: 'success',
                    message: 'Cart added',
                });

            },
        },
        components:{shoppingCart, navbar},

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
