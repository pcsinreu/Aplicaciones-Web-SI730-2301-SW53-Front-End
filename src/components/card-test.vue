<template>
  <div class="my-class">My component {{name}}</div>

    <img src="ruta" alt="gato" >

    <label for="username">{{$t('username')}}</label>
    <pv-input-text id="username" />

    <pv-check-box />
  <pv-button :label="$t('clickme')" rounded class="my-class"/>
</template>

<script>
export default {

    props: ['name'],
    name: "card-test",
    mounted() {
        console.log(name)
    }
}
</script>

<style scoped>
  .my-class{
      //background: blue;
      color: white;
  }
</style>