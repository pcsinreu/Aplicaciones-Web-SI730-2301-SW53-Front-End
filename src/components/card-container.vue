
<script>

import CardTest from "@/components/card-test.vue";

export default {
    name: "card-container",
    components: {CardTest},
    data(){
        return{
            listCards:[]
        }
    },
    beforeMount() {
      //Invocar API
      this.listCards = [{ name: 'Foo' }, { name: 'Bar' }, { name: 'Test' }, { name: 'Test 2' }]
  }
}
</script>

<template>
    <div class="containerGrid">

        <div v-for="detail in listCards">
          <card-test :name=detail.name />
        </div>

    </div>
</template>


<style scoped>

.container{
    display: flex;
}

.containerGrid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px ;
}


</style>