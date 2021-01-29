import { createStore } from 'vuex';
import axios from '@/axios';
import Axios from 'axios';
import router from '@/router';

const store = createStore({
  state: {
    user: null,
    token: null,
    tasks: [],
    isLoading: false,
  },
  //------------------------------------------//
  getters: {
    isLogged(state) {
      return !!state.token;
    },
    isLoading(state) {
      return state.isLoading;
    },
    user(state) {
      return state.user;
    },
    tasks(state) {
      return state.tasks;
    },
    completeTasks(state) {
      return state.tasks.filter((task) => {
        return task.completed === 1;
      });
    },
    runningTasks(state) {
      return state.tasks.filter((task) => {
        return task.completed !== 1;
      });
    },
  },
  //------------------------------------------//
  mutations: {
    //Setting User
    setUser(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
    },
    //Setting Tasks
    setTasks(state, payload) {
      state.tasks = payload.tasks;
    },
    //Setting Loading
    setLoading(state, payload) {
      state.isLoading = payload.state;
    },
  },
  //------------------------------------------//
  actions: {
    //Login
    async login({ commit }, payload) {
      const res = await axios.post('login', {
        email: payload.email,
        password: payload.password,
      });
      commit('setUser', {
        user: res.data.data,
        token: res.data.token,
      });
      localStorage.setItem('access_token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.data));
      router.replace('/tasks/all');
      console.log('User logged!');
    },

    //Signup
    async signUp({ commit }, payload) {
      const res = await axios.post('register', {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });
      commit('setUser', {
        user: res.data.data,
        token: res.data.token,
      });
      localStorage.setItem('access_token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.data));
      router.replace('/tasks/all');
      console.log('User registered!');
    },

    //Logout
    logout({ commit }) {
      commit('setUser', {
        user: null,
        token: null,
      });
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      console.log('User logged-out!');
    },

    //Auto login
    tryLogin({ commit }) {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('access_token');
      commit('setUser', {
        user: user,
        token: token,
      });
    },

    //Tasks
    async tasks({ commit, state }) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;
      commit('setLoading', { state: true });
      const res = await Axios.get('http://127.0.0.1:8000/api/tasks');
      commit('setTasks', {
        tasks: res.data.data,
      });
      commit('setLoading', { state: false });
      console.log(res.data);
    },

    //Complete Task
    async completeTask({ dispatch }, payload) {
      await axios.put(`task/${payload.id}`, {
        completed: payload.completed,
      });
      dispatch('tasks');
    },

    //Update Task
    async updateTask({ dispatch }, payload) {
      await axios.put(`task/${payload.id}`, {
        title: payload.title,
        description: payload.description,
      });
      dispatch('tasks');
    },

    //Add Task
    async addTask({ dispatch }, payload) {
      await axios.post('task/store', {
        title: payload.title,
        description: payload.description,
      });
      dispatch('tasks');
    },

    //Delete Task
    async deleteTask({ dispatch }, payload) {
      await axios.delete(`task/${payload.id}`);
      dispatch('tasks');
    },
  },

  modules: {},
});

export default store;
