<template>
  <div class="dush-background pb-4 pb-lg-5 rounded">
    <h1 class="p-4 p-md-5">{{ activeTask }} Tasks</h1>
    <div v-if="isLoading" class="spinner-border m-5" role="status"></div>
    <div v-else class="row flex-wrap mx-4 mx-md-5 g-2">
      <Task
        class="col-md-6"
        v-for="task in runningTasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :completed="task.completed"
        :id="task.id"
      />
    </div>
    <div
      v-if="runningTasks.length === 0 && !isLoading"
      class="alert alert-primary mx-5"
      role="alert"
    >
      Well done {{ user.name }}, all tasks are completed!
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task';

export default {
  components: { Task },
  computed: {
    runningTasks() {
      return this.$store.getters.runningTasks;
    },
    user() {
      return JSON.parse(localStorage.getItem('user'));
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
}
</style>
