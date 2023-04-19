<template>
    <div>User {{id}}</div>
    <div> {{nameUser}}</div>
    <pv-button label="Back to Home" @click="backToHome()" />
</template>

<script>
export default {
    name: "user",
    data(){
        return{
            id:0,
            nameUser:''
        }
    },
    methods:{
        backToHome:function (){
            this.$router.push('/');
        }
    },
    beforeMount() {
        this.id =  this.$route.params.id
        // invocar API User
        this.nameUser='';

    }
}
</script>

<style scoped>

</style>