import Router from 'vue-router'
import Reportes from './views/Reports';
import Vue from 'vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/reports',
     name: 'reports',
     component: Reportes
    },
  ]
})
