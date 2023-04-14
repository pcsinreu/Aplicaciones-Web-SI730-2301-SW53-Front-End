<template>
  <div class="my-class">My component {{name}}</div>
  <button>{{$t('clickme')}}</button>
  <pv-button :label="$t('clickme')" rounded class="my-class"/>
  <input type="text">
  <label for="username">{{$t('username')}}</label>
  <pv-input-text />
  <pv-check-box />
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