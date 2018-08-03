<template>
    <nav class="navbar navbar-inverse" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <ul class="nav navbar-nav navbar-left">
                    <li><img src="../../assets/Chicken.png" class="logo_img" alt=""></li>
                    <li>
                        <router-link to="/" class="navbar-brand">Kuku Gamers Store</router-link>
                    </li>
                </ul>

            </div>
            <ul class="nav navbar-nav navbar-right">

                <router-link to="/login" tag="li" v-if="!isLoggedIn"><a>Login</a></router-link>

                <li v-if="isLoggedIn" class="li-pointer"><a @click="logout">Logout {{ userEmail }}</a></li>

                <router-link to="/signup" tag="li" v-if="!isLoggedIn"><a>Register</a></router-link>
                <li>
                    <router-link to="/cart" class="btn btn-success navbar-btn" tag="button">
                        Checkout <span class="badge">{{ numItems }} (Ksh {{ cartValue }})</span>
                    </router-link>
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
                    total += item.quantity;
                    return total
                }, 0);
            },
            userEmail() {
                return this.isLoggedIn ? this.currentUser.email : ''
            }
        },
        methods: {
            ...mapActions(['logout'])
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