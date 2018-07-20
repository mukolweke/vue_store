<template>
    <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to="/admin/">Galatec Store Admin</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/admin/create">Create Product</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/admin/orders">View Orders</router-link></el-menu-item>
        <el-menu-item index="4"><button @click="logout">Logout</button></el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Navbar",

        methods:{

            logout: function () {

                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            },

        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
</style>