<template>
  <div class="container pt-4">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('tasks');
  },
};
</script>
