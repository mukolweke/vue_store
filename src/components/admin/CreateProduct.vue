<template>
    <div>
        <navbar><slot></slot></navbar>
        <!--create form-->
        <product_form><slot></slot></product_form>
    </div>
</template>

<script>
    import product_form from './Product_form'
    import firebase from 'firebase'
    import navbar from './Navbar'


    export default {
        name: "CreateProduct",
        components:{product_form, navbar},
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