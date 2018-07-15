<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="email" v-model="email" placeholder="Email"/><br>
        <input type="password" v-model="password" placeholder="Password"/><br>
        <button @click="login">Sign In</button>
        <p>No account; <router-link to="/signup">Create one</router-link></p>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "Login",
        data:function(){
            return{
                email:'',
                password:''
            }
        },
        methods:{

            login:function () {

                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(

                    (user) => {
                        if(this.email === "mikekuku@gmail.com"){
                            this.$router.replace('admin')
                        }else{
                            this.$router.replace('customer')
                        }
                    },

                    (err) => {
                        alert('Ooops. ' + err.message)
                    }

                )

            }

        }

    }
</script>

<style scoped>
    .login{
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
    p{
        margin-top: 40px;
        font-size: 13px;
    }
    p a{
        text-decoration: underline;
        cursor: pointer;
    }
</style>