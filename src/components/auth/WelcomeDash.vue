<template>
    <div>
        <div class="login">
            <img src="../../assets/Chicken.png" alt="" class="img_logo"/>
            <h1 class="text-center">Welcome to Kuku Game Store</h1>
            <h4 class="text-center" v-if="!isLoggedIn"> Please Login to do shop ...</h4>
            <h4 class="text-center" v-if="isLoggedIn"> Go to <router-link to="/dashboard">Dashboard</router-link> to shop...</h4>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'
    import {
        mapActions, mapGetters
    } from 'vuex';

    export default {
        name: "WelcomeDash",

        data: function () {
            return {
                email: '',
                password: ''
            }
        },

        methods: {

            login: function () {

                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        if (this.email === "michaelolukaka@gmail.com") {
                            this.$router.replace('admin')
                        } else {
                            this.$router.replace('customer')
                        }
                    },

                    (err) => {
                        alert('Ooops. ' + err.message)
                    }
                )

            }

        },

        computed: {
            ...mapGetters(['isLoggedIn']),

            userEmail() {
                return this.isLoggedIn ? this.currentUser.email : ''
            }
        },

    }
</script>

<style scoped>
    .img_logo{
        width: 300px;
        height: 300px;
        margin-left: 400px;
    }
    .login {
        margin: 100px auto;
    }

    p{
        font-size: 2em;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>