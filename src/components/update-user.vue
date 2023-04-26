<template>
    <p/>
    <label for="username"></label>
    <pv-input-text v-model="username" id="username"></pv-input-text>
    <p/>
    <label for="email"></label>
    <pv-input-text v-model="email" id="email"></pv-input-text>
  <p/>
  <pv-button label="save" @click="update()"></pv-button>


</template>

<script>
import {UsersApiService} from "@/services/users-api.service";

export default {
    name: "update-user",
    data(){
        return{
            id:0,
            usersApiService : new UsersApiService(),
            username :'',
            email:''
        }
    },
    methods:{
        update() {

            const body ={ "username": this.username ,"email" : this.email  };

            this.usersApiService.udapte(this.id,body).then((response)=>{

                if( response.status === 200){
                    alert("user updated")
                    this.$router.push('/users');
                }else{
                    alert("error updating user")
                }
            })
        }
    },
    beforeMount() {
        this.id =  this.$route.params.id
        // invocar API User
        //promesa

        this.usersApiService.getUserById(this.id).then((response)=>{
            console.log('response',response.data)
            this.username = response.data.username;
            this.email = response.data.email;
        })


    }
}
</script>

<style scoped>

</style>