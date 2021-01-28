<template>
  <div class="container">
    <div class="col-6 mx-auto mt-5">
      <div class="card shadow">
        <div class="card-body border">
          <h2 class="card-title">Login</h2>
          <form class="my-4" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input
                class="form-control "
                type="email"
                id="email"
                placeholder="Email"
                v-model.trim="email"
              />
              <label for="email">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                class="form-control"
                type="password"
                id="password"
                placeholder="password"
                v-model.trim="password"
              />
              <label for="password">Password</label>
            </div>

            <button class="btn btn-success d-grid mx-auto col-12">
              Login
            </button>
          </form>
          <div class="alert alert-danger" role="alert" v-if="message">
            {{ message.error }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      message: null,
    };
  },
  methods: {
    async login() {
      this.message = null;
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        });
      } catch (e) {
        this.message = {
          error:
            e.response.data.message ||
            'Failed to authenticate, please try later.',
        };
      }
    },
  },
};
</script>
