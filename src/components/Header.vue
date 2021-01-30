<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark shadow-sm"
    style="background-color: rgba(0,0,0,0.1)"
  >
    <div class="container">
      <img
        :src="logo"
        style="width:3rem"
        class="navbar-brand"
        @click="authorInfo"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              v-if="isLogged"
              @click="all"
              class="nav-link active"
              aria-current="page"
              >All</a
            >
          </li>
          <li class="nav-item">
            <a
              v-if="isLogged"
              @click="completed"
              class="nav-link active"
              aria-current="page"
              >Completed</a
            >
          </li>
          <li class="nav-item">
            <a
              v-if="isLogged"
              @click="running"
              class="nav-link active"
              aria-current="page"
              >Running</a
            >
          </li>
        </ul>
        <router-link
          v-if="isLogged"
          class="btn btn-outline-light mx-2"
          to="/login"
          @click="logout"
        >
          Logout
        </router-link>
        <router-link
          v-if="!isLogged"
          class="btn btn-outline-light mx-2"
          to="/signup"
        >
          Signup
        </router-link>
        <router-link v-if="!isLogged" class="btn btn-outline-light" to="/login">
          Login
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from '@/assets/logo.png';
export default {
  data() {
    return {
      logo: logo,
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout');
      } catch (e) {
        console.log(e);
      }
    },
    all() {
      this.$router.replace('/tasks/all');
    },
    completed() {
      this.$router.replace('/tasks/complete');
    },
    running() {
      this.$router.replace('/tasks/running');
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
  margin: 0 1rem;
}</style
>>
