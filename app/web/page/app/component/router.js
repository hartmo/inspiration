import Vue from 'vue';

import VueRouter from 'vue-router';

import indexView from './index/index';
import bookshelfView from './bookshelf/bookshelf';
import crawlerView from './crawler/crawler';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/app',
  routes: [
    // {
    //   path: '/',
    //   component: indexView
    // },
    {
      path: '/',
      component: crawlerView
    },
    {
      path: '/crawler',
      component: bookshelfView
    }
  ]
});

export default router;
