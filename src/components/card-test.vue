<template>
  <div class="my-class"> {{name}}</div>
    <label for="username">{{$t('username')}}</label>
  <label for="username"> {{title}} </label>
    <pv-input-text id="username" @input="handleInput('Hola')" />
    <pv-check-box />
  <pv-button :label="$t('clickme')" rounded class="my-class" @click="handleClick()"/>
</template>

<script>
export default {

    props: ['name'],
    name: "card-test",
    data(){
      return{
        title:' titulo 1'
      }
    },
    beforeMount() {
      console.log('---before mounted')
    },
    mounted() {
      console.log('--- mounted')
    },
    unmounted() {
      console.log('--- unmounted')
    },
    updated() {
      console.log('--- updated')
    },
   methods:{
      handleInput(a){
        console.log('typing something' + a)
        this.title =' new title';
      },
     handleClick(){
       console.log('clicked' )
       this.title =' new title after click';

     }
  }

}
</script>

<style scoped>
  .my-class{
      //background: blue;
      color: white;
  }
</style>