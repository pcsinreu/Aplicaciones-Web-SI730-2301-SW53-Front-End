<template>

    <p/>
    <router-link to="/createuser"> New user</router-link>
    <div v-for="user in users">
        <router-link  :to="1">user {{user.id}} {{user.username}}</router-link>
    </div>


</template>

<script>
import {UsersApiService} from "@/services/users-api.service";
import CardTest from "@/components/card-test.vue";

export default {
    name: "users",
    components: {CardTest},
    data(){
        return{
            users :[],
            userService : new UsersApiService()
        }
    },
    beforeMount() {
        // invocar API
        this.userService.getAll().then((response)=>{
            alert(response.status)
           this.users = response.data;
        })

    }

}
</script>


<style scoped>

</style>