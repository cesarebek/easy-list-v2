<template>
  <button v-if="!this.isOpen" class="d-flex btn btn-outline-secondary">
    <i class="bi bi-plus-square mx-1"></i>
    Add a card
  </button>
  <div v-else class="d-flex flex-column col-8 col-md-6 col-lg-4 col-xl-3">
    <div class="form">
      <input
        v-model="title"
        class="form-control mb-2"
        placeholder="Enter a title for this card..."
      />
    </div>
    <div class="d-flex flex-row align-items-center">
      <button class="btn btn-success btn-sm" @click="addTask">
        Add a Card
      </button>
      <button class="btn-close ms-2" @click="close" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['isOpen'],
  data() {
    return {
      isOpenUpd: this.isOpen,
      title: '',
    };
  },
  methods: {
    async addTask() {
      if (this.title === '') {
        return;
      }
      await this.$store.dispatch('addTask', {
        title: this.title,
      });
      this.title = '';
      this.$emit('closeDialog');
    },
    close() {
      console.log('close');
      this.$emit('closeDialog');
    },
  },
};
</script>
