<template>
    <div>User {{id}}</div>
    <div> {{nameUser}}</div>
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
    beforeMount() {
        this.id =  this.$route.params.id
        // invocar API User
        this.nameUser='';

    }
}
</script>

<style scoped>

</style>