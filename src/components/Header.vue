<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Easy List</a>
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
            <a class="nav-link active" aria-current="page" href="#">Board</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
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
export default {
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
  methods: {
    logout() {
      try {
        this.$store.dispatch('logout');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
