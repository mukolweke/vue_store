<template>
    <div>
        <div class="login">
            <img src="../../assets/Chicken.png" alt="" class="img_logo"/>
            <h3 class="text-center">Sign In</h3>
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
                <el-button @click="login" type="success" class="medium">LogIn&nbsp;<i class="fa fa-sign-in"></i></el-button>

            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'

    export default {
        name: "Login",

        data: function () {
            return {
                email: '',
                password: ''
            }
        },

        methods: {

            login: function () {

                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        if (this.email === "michaelolukaka@gmail.com") {
                            this.$router.replace('admin')
                        } else {
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
    .img_logo{
        width: 100px;
        height: 100px;
        margin-left: 510px;
    }
    .login {
        margin: 100px auto;
    }

    .form_panel {
        margin: 0 auto;
        width: 400px;
    }

    .medium{
        width: 400px;
    }

    p{
        font-size: 2em;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }

    button {
        margin-top: 20px;
        width: 25%;
        height: 25%;
        cursor: pointer;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>