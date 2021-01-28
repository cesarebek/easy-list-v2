<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="md-col-6 sm-col-12 mx-auto py-4 ">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <img :src="trello" class="my-width mb-5" alt="logo" />
          <h2 class="card-title mb-2 text-center">
            Welcome from Easy List!
          </h2>
          <p class="mb-4 text-center">
            The best app for busy people
          </p>

          <button class="btn btn-success mb-4" @click="goRegister">
            Signup for Free!
          </button>
          <p>or already have an account?</p>
          <button class="btn btn-outline-success" @click="goLogin">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trello from '@/assets/trello.png';

export default {
  data() {
    return {
      trello: trello,
    };
  },
  methods: {
    goRegister() {
      this.$router.replace('/signup');
    },
    goLogin() {
      this.$router.replace('/login');
    },
  },
};
</script>

<style scoped>
img {
  width: 20vw;
}
</style>
