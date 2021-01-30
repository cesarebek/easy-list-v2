<template>
  <div class="container ">
    <div class="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto mt-5">
      <div class="card shadow">
        <div class="card-body border">
          <h2 class="card-title">Signup for Free</h2>
          <form class="my-4" @submit.prevent="signup">
            <div class="form-floating mb-3">
              <input
                class="form-control "
                type="text"
                id="name"
                placeholder="Name"
                v-model.trim="name"
              />
              <label for="name">Name</label>
            </div>
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
            <div class="form-floating mb-3">
              <input
                class="form-control"
                type="password"
                id="passwordMatch"
                placeholder="Confirm password"
                v-model.trim="passwordMatch"
              />
              <label for="password">Confirm password</label>
            </div>
            <button class="btn btn-success d-grid col-12  mx-auto">
              Signup
            </button>
          </form>
          <div class="alert alert-danger" role="alert" v-if="message">
            {{ message.error || message }}
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
      name: null,
      email: null,
      password: null,
      passwordMatch: null,
      message: null,
    };
  },

  methods: {
    async signup() {
      this.message = null;
      if (this.password !== this.passwordMatch) {
        return (this.message = "Password does't match with the confirmed one.");
      } else if (!this.name || !this.email || !this.password) {
        return (this.message = 'Before signup, please fill all fields.');
      }
      try {
        await this.$store.dispatch('signUp', {
          name: this.name,
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
