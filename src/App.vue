<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

</script>

<template>
  <header>
  </header>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/cards">Cards</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/posts">Posts</router-link>
    </nav>

  <main>
      <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {

    nav{
        display:flex;
        gap :12px;
    }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
