<script>
import Header from '../components/Header.vue'
</script>

<template>
  <div v-if="$auth.isAuthenticated">
    <Header></Header>
    <movie-list></movie-list>
  </div>
  <div v-else>
      <router-link to="/login"> Logueate :P </router-link>
  </div>
</template>
