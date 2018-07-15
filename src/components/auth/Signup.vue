<template>
    <div class="signUp">
        <h3>Sign Up</h3>
        <p>Create Account Up Here</p>
        <input type="email" v-model="email" placeholder="Email"/><br>
        <input type="password" v-model="password" placeholder="Password"/><br>
        <button @click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">Login</router-link></span>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Signup",
        data:function(){
            return{
                email:'',
                password: '',

            }
        },
        methods:{

            signUp: function () {

                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(

                     (user) => {
                        this.$router.replace('hello')
                    },

                     (err) => {
                        alert('Ooops. '+ err.message)
                    }

                )
            }


        }

    }
</script>

<style scoped>
    .signUp{
        margin-top: 40px;
    }
    input{
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button{
        margin-top: 20px;
        width: 25%;
        height: 25%;
        cursor: pointer;
    }
    span{
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>