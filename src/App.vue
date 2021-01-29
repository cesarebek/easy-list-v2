<template>
  <div class="background pb-5">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'App',
  components: { Header },
  created() {
    this.$store.dispatch('tryLogin');
  },
};
</script>

<style scoped>
.background {
  background: linear-gradient(-45deg, #d7499d, #2c1974);
  min-height: 100vh;
}
</style>
