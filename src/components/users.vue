<template>



    <div v-for="user in users">
        <router-link to="user/user.id">user {{user.id}} {{user.username}}</router-link>
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

           this.users = response.data;
        })

    }

}
</script>


<style scoped>

</style>