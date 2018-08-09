<template>
    <nav class="navbar navbar-inverse" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <ul class="nav navbar-nav navbar-left">
                    <li><img src="../../assets/Chicken.png" class="logo_img" alt=""></li>

                    <!--customer links-->
                    <li v-if="getCustomerPermission">
                        <router-link to="/dashboard" class="navbar-brand">Kuku Gamers Store</router-link>
                    </li>
                    <li v-if="!isLoggedIn">
                        <router-link to="/" class="navbar-brand">Kuku Gamers Store</router-link>
                    </li>

                    <!--admin links-->
                    <li v-if="getAdminPermission">
                        <router-link to="/admin" class="navbar-brand">Kuku Gamers Store</router-link>
                    </li>
                    <li v-if="getAdminPermission">
                        <router-link to="/admin/create" class="navbar-brand">Create Product</router-link>
                    </li>
                </ul>

            </div>
            <ul class="nav navbar-nav navbar-right">
                <!--customer cart link-->
                <li v-if="getCustomerPermission">
                    <router-link to="/cart" class="btn btn-success navbar-btn" tag="button">
                        Checkout <span class="badge">{{ numItems }}&nbsp;items&nbsp;Ksh&nbsp;{{ cartValue }}</span>
                    </router-link>
                </li>

                <!--admin order link-->
                <li v-if="getAdminPermission">
                    <router-link to="/orders" class="btn btn-success navbar-btn" tag="button">
                        Order <span class="badge">{{ numItems }}&nbsp;items</span>
                    </router-link>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <span v-if="!isLoggedIn">MENU</span><span v-if="isLoggedIn">{{ userEmail }}</span> <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">

                        <router-link to="/login" tag="li" v-if="!isLoggedIn"><a>Login</a></router-link>
                        <li role="separator" v-if="!isLoggedIn" class="divider"></li>
                        <router-link to="/signup" tag="li" v-if="!isLoggedIn"><a>Register</a></router-link>
                        <li v-if="isLoggedIn" class="li-pointer text-center"><a @click="logout">Logout <span class="glyphicon glyphicon-log-out"></span></a></li>

                    </ul>
                </li>

            </ul>

        </div>
        <!-- /.container -->
    </nav>
</template>

<script>
    import {
        mapActions, mapGetters
    } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['isLoggedIn', 'cartValue', 'currentUser', 'cartItemList']),

            numItems() {
                return this.cartItemList.reduce((total, item) => {

                    total += item.product_quantity;

                    return total
                }, 0);
            },
            userEmail() {

                return this.isLoggedIn ? this.currentUser.email : ''
            },

            getAdminPermission(){

                return this.isLoggedIn && (this.currentUser.email == "admin@admin.com");
            },

            getCustomerPermission(){

                return this.isLoggedIn && !(this.currentUser.email == "admin@admin.com");
            }
        },
        methods: {

            logout: function () {
                let vm = this;

                this.$store.dispatch("logout").then(() => {

                    vm.$router.push("/")
                })

            }
        }
    }
</script>

<style scoped>
    .navbar-btn a {
        color: white;
    }

    .logo_img {
        width: 50px;
        height: 50px;
    }

    .li-pointer {
        cursor: pointer;
    }

    .li-pointer:hover {
        cursor: pointer;
    }
</style>