<template>
  <h1>Login</h1>
  <input v-model="email" type="email" placeholder="Email" />
  <input v-model="password" type="password" placeholder="Password" />
  <button @click="login">Log in</button>
</template>

<script>
export default {
  created(){
    this.$auth.$subscribe((mutation, state) => {
      if (state.isAuthenticated) {
        this.$router.push('/');
      }
    })
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$auth.login(this.password, this.email);
    },
  },
};
</script>

<style scoped></style>
