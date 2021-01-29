<template>
  <div class="dush-background rounded pb-3">
    <h1 class="p-4 p-md-5">{{ activeTask }} Tasks</h1>
    <!-- <div v-if="isLoading" class="spinner-border m-5" role="status"></div> -->
    <div class="row flex-wrap mx-4 mx-md-5 g-2">
      <Task
        class="col-md-6"
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :completed="task.completed"
        :id="task.id"
      />
    </div>
    <div
      v-if="tasks.length === 0 && !isLoading"
      class="alert alert-primary mx-5"
      role="alert"
    >
      Hey {{ user.name }}, let's start use Easy-List adding your first task!
    </div>
    <AddTask
      class="mx-auto"
      @click="openInput"
      @close-dialog="isOpen = false"
      :isOpen="isOpen"
    />
  </div>
</template>

<script>
import Task from '@/components/Task';
import AddTask from '@/components/AddTask';

export default {
  components: { Task, AddTask },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openInput() {
      this.isOpen = true;
    },
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
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
