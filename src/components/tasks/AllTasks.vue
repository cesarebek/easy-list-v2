<template>
  <div class="mx-3">
    <h1 v-if="isLoading">Loading...</h1>
    <div v-else>
      <Task
        class="mb-3"
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :completed="task.completed"
        :id="task.id"
      />
    </div>
    <div v-if="tasks.length === 0" class="alert alert-primary" role="alert">
      Hey {{ user.name }}, let's start use Easy-List adding your first task!
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
    tasks() {
      return this.$store.getters.tasks;
    },
    user() {
      return JSON.parse(localStorage.getItem('user'));
    },
  },
};
</script>
