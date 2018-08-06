<template>
    <div>
        <navbar><slot></slot></navbar>
        <el-card class="box-card-outer">
            <hr style="width: 100px;">
            <br>
            <el-row>
                <ul>
                    <li v-for="prod in product" v-bind:key="prod['.key']">
                        <el-col :span="12">
                            <div class="grid-content" style="text-align: left;">
                                <div v-if="!prod.edit"><!--angular used-->
                                <img class="my_images disabled" @click="productDialog()"
                                     src="../../assets/ps4.jpg" alt="image"/>
                                    <p>Name:&nbsp;{{prod.name}} </p>
                                    <p>Type:&nbsp;{{prod.type}} </p>
                                    <p>Desc:&nbsp;{{prod.desc}}</p>
                                    <p>KSH:&nbsp;{{prod.price}} </p>
                                    <p>Stock:&nbsp;{{prod.stock}}</p>
                                    <el-button @click="setEditProduct(prod['.key'])" type="primary">EDIT</el-button>
                                    <el-button @click="removeProduct(prod['.key'])" type="danger">REMOVE</el-button>
                                </div>
                                <div v-else>
                                    <div v-if="prod.edit"><!--angular used-->
                                        <img class="my_images disabled" @click="productDialog()"
                                             src="../../assets/ps4.jpg" alt="image"/>
                                        <p>Name:&nbsp;{{prod.name}} </p>
                                        <p>Type:&nbsp;{{prod.type}} </p>
                                        <p>Desc:&nbsp;{{prod.desc}}</p>
                                        <p>KSH:&nbsp;{{prod.price}} </p>
                                        <p>Stock:&nbsp;{{prod.stock}}</p>
                                        <el-button @click="setEditProduct(prod['.key'])" type="primary">EDIT</el-button>
                                        <el-button @click="removeProduct(prod['.key'])" type="danger">REMOVE</el-button>
                                    </div>
                                    <input type="text" v-model="prod.name"/>
                                    <input type="text" v-model="prod.price"/>

                                    <el-button @click="saveEdit(prod)" type="success">SAVE</el-button>
                                    <el-button @click="cancelEdit(prod['.key'])" type="">CANCEL</el-button>

                                </div>
                            </div>
                        </el-col>
                    </li>
                </ul>
            </el-row>
            <hr style="width: 100px;">

        </el-card>

    </div>

</template>

<script>
    import product_form from './Product_form'
    import {ref} from '../../firebase.conf'
    import firebase from 'firebase/app'
    import 'firebase/auth'
    import navbar from './Navbar'

    export default {
        name: "AdminIndex",
        props:['key'],
        components: {product_form, navbar},
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
                products: [
                    {
                        product_name: 'PLAYSTATION',
                        product_type: 'PS2',
                        product_desc: '2ND HAND, CHIPPED',
                        product_price: '9000',
                        product_stock: 21,
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
                        product_desc: 'Original Game Pads',
                        product_price: '500',
                        product_stock: 10,
                        product_id: 3
                    },
                    {
                        product_name: 'X-BOX',
                        product_type: 'XBOX-PADS',
                        product_desc: 'Wireless, Chargable',
                        product_price: '3500',
                        product_stock: 20,
                        product_id: 4
                    },
                    {
                        product_name: 'BEATS BY DRE',
                        product_type: 'BEATS PEAL',
                        product_desc: 'Original',
                        product_price: '4500',
                        product_stock: 10,
                        product_id: 5
                    },
                    {
                        product_name: 'SONY EARPHONES',
                        product_type: 'EARPIECE',
                        product_desc: 'Original, White, 3 circle ...',
                        product_price: '500',
                        product_stock: 10,
                        product_id: 6
                    },]
            }
        },
        firebase :{
            // product: ref.ref('product')
        },
        computed: {

        },
        methods: {

            removeProduct: function(key){
                this.open2(key)
                // this.$firebaseRefs.product.child(key).remove();
            },

            setEditProduct: function(key){
                this.$firebaseRefs.product.child(key).update({edit:true})
             },

            saveEdit: function(product){
                const key = product['.key']
                this.$firebaseRefs.product.child(key).set({product:product, edit:false})

            },

            cancelEdit: function(key){
                this.$firebaseRefs.product.child(key).update({edit:false})
            },

            open2(key) {
                this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    // delete
                    this.$firebaseRefs.product.child(key).remove();
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

            productDialog() {
                this.productVisibleDialog = true;
            },
            innerVisible() {
                this.innerVisibleDialog = true;
            },
        },
    }
</script>

<style scoped>
    ul li {
        list-style: none;
        /*display: inline-flex;*/
    }

    .my_images {
        width: 200px;
        height: 200px;
        cursor: pointer;
    }

    .my_pop_images {
        width: 400px;
        height: 400px;
    }

    .grid-content {
        border-radius: 4px;
        /*min-height: 36px;*/
        padding: 5px;
        text-align: center;
    }

    .box-card-outer {
        margin: 20px auto;
    }

    input[type=text] {
        width: 130px;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
    }

    /* When the input field gets focus, change its width to 100% */
    input[type=text]:focus {
        width: 100%;
    }

    @media screen and (max-height: 450px) {
        .sidenav {
            padding-top: 15px;
        }

        .sidenav a {
            font-size: 18px;
        }
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>