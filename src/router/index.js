import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login';
import Signup from '@/views/Signup';
import Dushboard from '@/views/Dushboard';
import Home from '@/views/Home';
import NotFound from '@/components/NotFound';
import AllTasks from '@/components/tasks/AllTasks';
import CompleteTasks from '@/components/tasks/CompleteTasks';
import RunningTasks from '@/components/tasks/RunningTasks';
import store from '@/store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: { requiresUnAuth: true },
    },
    {
      path: '/tasks',
      redirect: '/tasks/all',
      component: Dushboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'all',
          component: AllTasks,
        },
        {
          path: 'complete',
          component: CompleteTasks,
        },
        {
          path: 'running',
          component: RunningTasks,
        },
      ],
    },
    {
      path: '/login',
      component: Login,
      meta: { requiresUnAuth: true },
    },
    {
      path: '/signup',
      component: Signup,
      meta: { requiresUnAuth: true },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

router.beforeEach(function(to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isLogged) {
    next('/');
  } else if (to.meta.requiresUnAuth && store.getters.isLogged) {
    next('/tasks/all');
  } else next();
});

export default router;
