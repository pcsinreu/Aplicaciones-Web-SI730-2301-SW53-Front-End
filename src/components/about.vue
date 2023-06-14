<template>
<div>about</div>
</template>

<script>
export default {
    name: "about",
    beforeCreate(){
        if(!window.sessionStorage.getItem('jwt')){ 
            this.$router.push('/');
        }
    }

}
</script>

<style scoped>

</style>