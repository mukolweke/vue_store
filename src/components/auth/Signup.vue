<template>
    <div class="signUp">
        <img src="../../assets/Chicken.png" alt="" class="img_logo"/>
        <h3 class="text-center">Sign Up</h3>
        <div class="form_panel">
            <el-input
                    type="email"
                    placeholder="Email"
                    v-model="email"
                    clearable>
            </el-input>
            <br/><br/>
            <el-input
                    type="password"
                    placeholder="Password"
                    v-model="password"
                    clearable>
            </el-input>
            <el-button @click="signUp" type="success" class="medium">Sign Up&nbsp;<i class="fa fa-sign-out"></i></el-button>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'

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
                        this.$router.push('customer')
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
    .img_logo{
        width: 100px;
        height: 100px;
        margin-left: 510px;
    }

    body{
        font-size: 5em;
    }
    .signUp{
        margin: 100px auto;
    }

    .form_panel {
        margin: 0 auto;
        width: 400px;
    }

    .medium{
        width: 400px;
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