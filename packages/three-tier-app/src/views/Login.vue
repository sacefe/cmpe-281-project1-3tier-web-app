<template>
       <b-container class="d-flex justify-content-center h-100 align-items-center">
        <b-card class="border-0 shadow login-card" header-bg-variant="primary">
            <template v-slot:header>
               <h5 class="mb-2 text- text-center"> <fa :icon="['fas', 'user']"/>  User Login </h5> 
            </template>
            <b-form>
                <b-form-group 
                    label="Email address:">
                    <b-form-input v-model="user.email" size="sm" type="email" required placeholder="Enter Email"></b-form-input>
                </b-form-group>
                <b-form-group 
                    label="Password:">
                    <b-form-input v-model="user.password" size="sm" type="password" required placeholder="Enter Password"></b-form-input>
                </b-form-group>
                <div class="text-center">
                    <b-btn @click="loginUser" variant="outline-primary" size="sm" class="btn-block">Sign In</b-btn>
                    <b-btn variant="primary" size="sm" class="btn-block" to="/register">Create an account</b-btn>
                    <b-btn variant="light" size="sm" class="btn-block shadow-sm"><img src="@/assets/icons/facebook-icon.svg" width="18" alt="facebook"> Sign in with Facebook</b-btn>
                    <b-btn variant="light" size="sm" class="btn-block shadow-sm"><img src="@/assets/icons/google-icon.svg" width="18" alt="google"> Sign in with Google</b-btn> 
                </div>
            </b-form>
        </b-card>
    </b-container>

 </template>


<script>
import {
    login,
    // setToken
    } from '@/services';

export default {
   data: () => ({
      user: {
            email: '',
            password: '',
            strategy: 'local'
            },
    }),

    methods: {
        async loginUser() {
            try{
                const response = await login(this.user);
                console.log(response.data);
                this.$store.dispatch('auth/setLoggedIn', {isLoggedIn: true, user: response.data.user, accessToken: response.data.accessToken});
                // const response2 = await setToken(response.data.accessToken);
                // console.log(response2.data);
                this.$router.push('admin');
            }catch(err) {
                console.log(err.response);
            }
        },
    }
}
</script>


<style lang="scss">
    .login-card{
        width: 450px;
    }
</style>