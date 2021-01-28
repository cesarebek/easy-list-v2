<template>
  <div class="mx-3">
    <h1 v-if="isLoading">Loading...</h1>
    <div v-else>
      <Task
        class="mb-3"
        v-for="task in completeTasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :completed="task.completed"
        :id="task.id"
      />
    </div>
    <div
      v-if="completeTasks.length === 0"
      class="alert alert-primary"
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
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    completeTasks() {
      return this.$store.getters.completeTasks;
    },
  },
};
</script>
