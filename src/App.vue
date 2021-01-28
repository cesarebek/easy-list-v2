<template>
  <div class="min-vh-100">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'App',
  components: { Header },
};
</script>
