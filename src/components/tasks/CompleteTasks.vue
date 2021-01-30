<template>
  <div class="dush-background pb-4 pb-lg-5">
    <h1 class="p-4 p-md-5">{{ activeTask }} Tasks</h1>
    <div v-if="isLoading" class="spinner-border m-5" role="status"></div>
    <div v-else class="row flex-wrap mx-4 mx-md-5 gy-2 justify-content-evenly">
      <Task
        class="col-md-5"
        v-for="task in completeTasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :completed="task.completed"
        :id="task.id"
      />
    </div>
    <div
      v-if="completeTasks.length === 0 && !isLoading"
      class="alert alert-primary mx-5"
      role="alert"
    >
      Mh... it seems that any task was completed yet!
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task';

export default {
  components: { Task },
  computed: {
    completeTasks() {
      return this.$store.getters.completeTasks;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    activeTask() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.dush-background {
  background-color: #ebecf0;
  border-radius: 1rem;
}
</style>
