<template>
    <div>
        <button @click="logout">Logout</button>
        <h1>Admin View</h1>

        <router-link to="/admin">DASHBOARD</router-link>
        <router-link to="/admin/create">CREATE</router-link>
        <router-link to="/admin/orders">VIEW ORDERS</router-link>
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
                                    <p> {{prod.name}} </p><p>Type:&nbsp;{{prod.type}}  </p><p> KSH
                                        {{prod.price}} </p><p>Stock:&nbsp;{{prod.stock}}</p>
                                    <el-button @click="setEditProduct(prod['.key'])" type="primary">EDIT</el-button>
                                    <el-button @click="removeProduct(prod['.key'])" type="danger">REMOVE</el-button>
                                </div>
                                <div v-else>
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
        <!--<div>-->
            <!--<ul>-->
                <!--<li v-for="prod in product" v-bind:key="prod['.key']">-->
                    <!--<div v-if="!prod.edit">&lt;!&ndash;angular used&ndash;&gt;-->
                        <!--<p> {{prod.name}} {{prod.price}}</p>-->
                        <!--<button @click="removeProduct(prod['.key'])">Remove</button>-->
                        <!--<button @click="setEditProduct(prod['.key'])">Edit</button>-->
                    <!--</div>-->
                    <!--<div v-else>-->
                        <!--<input type="text" v-model="prod.name"/>-->
                        <!--<input type="text" v-model="prod.price"/>-->
                        <!--<button @click="saveEdit(prod)">save</button>-->
                        <!--<button @click="cancelEdit(prod['.key'])">cancel </button>-->
                    <!--</div>-->
                <!--</li>-->
            <!--</ul>-->
        <!--</div>-->

        </el-card>

        <el-row>
            <el-dialog
                    :visible.sync="productVisibleDialog"
                    width="70%"
                    center>
                <el-row>
                    <button @click="cancelEdit(prod['.key'])">cancel </button>
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
    import product_form from './Product_form'
    import {db} from '../../firebase.conf'
    import firebase from 'firebase'

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
        firebase :{
            product: db.ref('product')
        },
        computed: {

        },
        methods: {

            logout: function () {

                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            },

            removeProduct: function(key){
                this.$firebaseRefs.product.child(key).remove();

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