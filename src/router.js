import Router from 'vue-router'
import Reportes from './views/Reports';
import Vue from 'vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
     name: 'reports',
     component: Reportes
    },
  ]
})
