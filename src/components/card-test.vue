<template>
  <div class="my-class">My component {{name}}</div>
  <button>Click me!</button>
  <pv-button label="click me!" rounded class="my-class"/>
  <input type="text">
  <label for="username">Username</label>
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