<template>

    <p/>
    <router-link to="/createuser"> New user</router-link>
    <div v-for="user in users">
        user {{user.id}} {{user.username}}
        <router-link  :to="{ name: 'user', params: { id: user.id }}"> edit</router-link>
        <pv-button label="delete" @click="deleteUSer(user.id)"></pv-button>
    </div>


</template>

<script>
import CardTest from "@/components/card-test.vue";
import { UsersApiService } from "@/services/users-api.service";

export default {
    name: "users",
    components: { CardTest},
    data(){
        return{
            users :[],
            userService : new UsersApiService()
        }
    },
    methods:{
      deleteUSer(id){
          this.userService.delete(id).then((response)=>{
              if(response.status === 200){
                  alert("user deleted")
                  this.getAll()
              }
              else(
                  alert("error deleting user")
              )
          })
      },
        getAll(){
            this.userService.getAll().then((response)=> {
                this.users = response.data;
            })
        }
    },
    beforeMount() {
        // invocar API
            this.getAll()

    },
    beforeCreate(){
        if(!window.sessionStorage.getItem('jwt')){ 
            this.$router.push('/');
        }
    }

}
</script>


<style scoped>

</style>