import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login';
import Signup from '@/views/Signup';
import Dushboard from '@/views/Dushboard';
import cookies from 'vue-cookies';

const routes = [
  {
    path: '/',
    name: 'Dushboard',
    component: Dushboard,
    beforeEnter(to, from, next) {
      if (cookies.get('access_token') !== null) {
        console.log('user allowed');
        next();
      } else {
        console.log('Please login');
        next('/login');
      }
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
