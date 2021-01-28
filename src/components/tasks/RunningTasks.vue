<template>
  <div class="mx-3">
    <h1 v-if="isLoading">Loading...</h1>
    <div v-else>
      <Task
        class="mb-3"
        v-for="task in runningTasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :completed="task.completed"
        :id="task.id"
      />
    </div>
    <div
      v-if="runningTasks.length === 0"
      class="alert alert-primary"
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
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    runningTasks() {
      return this.$store.getters.runningTasks;
    },
    user() {
      return JSON.parse(localStorage.getItem('user'));
    },
  },
};
</script>
