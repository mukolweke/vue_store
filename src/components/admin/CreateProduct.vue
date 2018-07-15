<template>
    <div>
        <button @click="logout">Logout</button>
        <h1>Admin View</h1>
            <router-link to="/admin">DASHBOARD</router-link>
            <router-link to="/admin/create">CREATE</router-link>
            <router-link to="/admin/orders">VIEW ORDERS</router-link>
        <!--create form-->
        <product_form><slot></slot></product_form>
    </div>
</template>

<script>
    import product_form from './product_form'
    import firebase from 'firebase'


    export default {
        name: "CreateProduct",
        components:{product_form},
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

</style>