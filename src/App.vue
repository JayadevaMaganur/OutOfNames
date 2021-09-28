<template>
<<<<<<< HEAD
  <div class="app-wrapper">
      <div class = "appp">
          
          <Navigation v-if="!navigation"/>
          <router-view /> 
      </div>
  </div>
=======
    <div class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">TECHNO TOOLS</a>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/login">Login</router-link>
            </li>
        </ul>
    </div>
    
    <div class="container py-4">
        <router-view />
    </div>
>>>>>>> 923f2b0a05057f79fb37408a3fc87b08ef83cb4c
</template>

<script>
import Navigation from "./components/Navigation.vue"

export default {
    name: "app",
    components: {Navigation},
    data() {
        return {
            navigation: null,
        };
    },
    created() {
        this.checkRoute();
    },
    mounted() {},
    methods: {
        checkRoute() {
            if (this.$route.name == "Login" || this.$route.name == "Signup" || this.$route.name == "Logout") {
                this.navigation = true;
                return;
            }
            this.navigation = false;
        }
    },
    watch: {
        $route() {
            this.checkRoute();
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
