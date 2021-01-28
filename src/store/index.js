import { createStore } from 'vuex';
import axios from '../axios';
import router from '@/router';
import cookies from 'vue-cookies';

export default createStore({
  state: {
    user: null,
    isLogged: false,
  },
  getters: {
    isLogged(state) {
      return state.isLogged;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
      state.isLogged = payload.isLogged;
    },
  },
  actions: {
    //Login
    async login({ commit }, payload) {
      const res = await axios.post('login', {
        email: payload.email,
        password: payload.password,
      });
      commit('setUser', {
        user: res.data.data,
        isLogged: true,
      });

      cookies.set('access_token', res.data.token);
      router.push('/');
      console.log(res.data);
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
        isLogged: true,
      });
      console.log(res.data);
    },

    //Logout
    async logout({ commit }) {
      const res = await axios.post('logout');
      commit('setUser', {
        user: null,
        isLogged: false,
      });
      this.$cookies.keys().forEach((cookie) => this.$cookies.remove(cookie));
      console.log(res.data);
    },
  },
  modules: {},
});
