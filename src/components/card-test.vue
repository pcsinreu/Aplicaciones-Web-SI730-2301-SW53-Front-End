<template>
  <div class="my-class">My component {{name}}</div>
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
      background: blue;
      color: white;
  }
</style>