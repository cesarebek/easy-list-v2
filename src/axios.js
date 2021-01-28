import http from 'axios';

const token = localStorage.getItem('access_token');

const axios = http.create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axios;
