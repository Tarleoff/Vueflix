import { defineStore } from "pinia";

export const authStore = defineStore("auth", {
  state: () => {
    return {
      email: null,
      acces_token: null,
      isAuthenticated: false,
    };
  },
  actions: {
    async login(email, password) {
      const response = await fetch("https://m08gbi.herokuapp.com/api/login", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.acces_token) {
        this.isAuthenticated = true;
        this.email = email;
        this.acces_token = data.acces_token;
      }
    },
  },
});
