<template>
    <div>
        <button @click="logout">Logout</button>
        <h1>Admin View</h1>
            <router-link to="/admin">DASHBOARD</router-link>
            <router-link to="/admin/create">CREATE</router-link>
            <router-link to="/admin/orders">VIEW ORDERS</router-link>

    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "ViewOrders",
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

</style>