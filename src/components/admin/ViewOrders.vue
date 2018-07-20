<template>
    <div>
        <navbar>
            <slot></slot>
        </navbar>
        <h1>Orders listed</h1>
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import navbar from './Navbar'

    export default {
        name: "ViewOrders",
        methods: {

            logout: function () {

                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            },
        },
        components:{navbar}
    }
</script>

<style scoped>

</style>