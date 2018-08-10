<template>
    <div>
        <!--create form-->
        <product_form><slot></slot></product_form>
    </div>
</template>

<script>
    import product_form from './Product_form'
    import firebase from 'firebase'

    export default {
        name: "CreateProduct",
        
        components:{product_form},
    }
</script>

<style scoped>

</style>