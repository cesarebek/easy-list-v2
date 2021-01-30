<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="md-col-6 sm-col-12 mx-auto py-4 ">
        <div class="d-flex justify-content-center">
          <div
            class="d-flex justify-content-center flex-column home-bg p-5 rounded shadow"
          >
            <img :src="logo" class="my-width mb-5 mx-auto d-block" alt="logo" />
            <h2 class="card-title mb-2 text-center">
              Welcome from <span class="fst-italic">todo</span> !
            </h2>
            <p class="mb-4 text-center">
              The best app for busy people
            </p>

            <button class="btn btn-success mb-4" @click="goRegister">
              Signup for Free!
            </button>
            <p class="text-center">instead already have an account?</p>
            <button class="btn btn-outline-success mx-5" @click="goLogin">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png';

export default {
  data() {
    return {
      logo: logo,
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
.home-bg {
  background-color: #ffff;
}
</style>
