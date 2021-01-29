<template>
  <div class="container rounded p-4">
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
