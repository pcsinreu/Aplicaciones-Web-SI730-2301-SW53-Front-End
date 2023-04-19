<template>

    <p/>
    <label for="username">Username :</label>
    <pv-input-text id="username" v-model="username"></pv-input-text>
      <p/>
    <label for="email">Email :</label>
    <pv-input-text id="email" v-model="email"></pv-input-text>

    <p/>
  <pv-button @click="handleClick()" label="save"></pv-button>
</template>

<script>
import {UsersApiService} from "@/services/users-api.service";

export default {
    name: "create-user",
    data(){
        return{
            username:'',
            email:'',
            userService: new UsersApiService()
        }
    },
    methods: {
        handleClick() {

            const body = {"username": this.username, "email": this.email};

            this.userService.createUser(body)
                .then((response) => {
                    if (response.status === 201) {
                        alert("user created")
                    } else {
                        alert("user not created")
                    }
            })
        }
    }
}
</script>

<style scoped>

</style>