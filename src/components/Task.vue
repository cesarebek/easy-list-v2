<template>
  <div class="card p-3 mb-3">
    <div>
      <h3 :class="lineThroughMain">{{ title }}</h3>
      <p :class="lineThroughSub">{{ description }}</p>
    </div>
    <div class="d-flex justify-content-end mt-2 mb-1">
      <button class="btn btn-success btn-sm" @click="updateState">
        {{ completedLabel }}
      </button>
      <button class="btn btn-primary btn-sm ms-1" @click="modalOpen = true">
        Edit
      </button>

      <teleport to="body">
        <div v-if="modalOpen" class="modal">
          <div>
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Task Edit</h5>
                  <button class="btn-close" @click="modalOpen = false"></button>
                </div>
                <div class="modal-body">
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      type="text"
                      id="title"
                      placeholder="Email"
                      v-model.trim="titleUpd"
                    />
                    <label for="title">Title</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      type="text"
                      id="description"
                      placeholder="description"
                      v-model.trim="descriptionUpd"
                    />
                    <label for="description">Description</label>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    @click="modalOpen = false"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="updateTask"
                  >
                    Save changes
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    @click="deleteTask"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </teleport>
      <!-- MODALE END TEST -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'completed', 'id'],
  data() {
    return {
      modalOpen: false,
      completedUpd: this.completed,
      titleUpd: this.title,
      descriptionUpd: this.description,
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
    editCheck() {
      return this.titleUpd === '' ? true : false;
    },
  },
  methods: {
    async updateState() {
      await this.$store.dispatch('completeTask', {
        id: this.id,
        completed: this.completedState,
      });
    },
    async updateTask() {
      if (this.titleUpd === '') {
        return;
      }
      await this.$store.dispatch('updateTask', {
        id: this.id,
        title: this.titleUpd,
        description: this.descriptionUpd,
      });
      this.modalOpen = false;
    },
    async deleteTask() {
      await this.$store.dispatch('deleteTask', {
        id: this.id,
      });
    },
  },
};
</script>

<style scoped>
.my-color-complete {
  background-color: #5aac44;
  color: white;
  transition: all 0.3s ease;
}
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
