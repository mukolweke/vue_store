<template>
    <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="1">
            <router-link to="/customer">Galatec Store</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <button @click="logout">Logout</button>
        </el-menu-item>
    </el-menu>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'

    export default {
        name: "Navbar",

        methods: {
            logout: function () {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            },
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>