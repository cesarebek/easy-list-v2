import http from 'axios';
import cookies from 'vue-cookies';

const access_token = cookies.get('access_token');

const axios = http.create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
});

export default axios;
