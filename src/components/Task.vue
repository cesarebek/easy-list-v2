<template>
  <div class="row">
    <div class="card p-3 shadow-sm col-sm-12">
      <div class="col-sm-12">
        <h2 :class="lineThroughMain">{{ title }}</h2>
        <p :class="lineThroughSub">{{ description }}</p>
      </div>
      <div class="col-sm-12 col-md-12">
        <button
          class="btn btn-success col-md-6 col-12 mb-2 mr-sm-2"
          @click="updateState"
        >
          {{ completedLabel }}
        </button>
        <button class="btn btn-primary col-md-6 col-12 mb-2">
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'completed', 'id'],
  data() {
    return {
      completedUpd: this.completed,
    };
  },
  computed: {
    completedState() {
      return this.completed === 1 ? false : true;
    },
    completedLabel() {
      return this.completed === 1 ? 'Uncomplete' : 'Complete';
    },
    lineThroughMain() {
      return this.completed === 1
        ? 'card-title text-decoration-line-through text-secondary'
        : 'card-title';
    },
    lineThroughSub() {
      return this.completed === 1
        ? 'card-text text-decoration-line-through text-secondary'
        : 'card-text';
    },
  },
  methods: {
    async updateState() {
      await this.$store.dispatch('completeTask', {
        id: this.id,
        completed: this.completedState,
      });
    },
  },
};
</script>
