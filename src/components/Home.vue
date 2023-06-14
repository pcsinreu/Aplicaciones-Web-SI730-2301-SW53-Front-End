<template>



<p/>
    <label for="username">username</label>
    <pv-input-text v-model="username" id="username"></pv-input-text>
    <p/>
    <label for="password">password</label>
    <pv-input-text v-model="password" id="password"></pv-input-text>
  <p/>
  <pv-button label="login" @click="login()"></pv-button>
  <pv-button label="log out" @click="logout()"></pv-button>




</template>

<script>

import { UsersApiService } from "@/services/users-api.service";
export default {
    name: "Home",
    data(){
        return{
            usersApiService : new UsersApiService(),
            username :'',
            password:''
        }
    },
    methods:{
        login() {

            const body ={
                "username": this.username,
                "password": this.password
            }
            this.usersApiService.login(body).then((response)=>{
               window.sessionStorage.setItem('jwt',response.data)
            
            })
        },
        logout(){
            window.sessionStorage.removeItem('jwt')
        }
    }
}
</script>

<style scoped>

</style>