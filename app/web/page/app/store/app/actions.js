'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const host = 'http://localhost:7001';

const actions = {

  // FETCH_ARTICLE_LIST: ({ commit, dispatch, state }) => {
  //   if (!state.articleList.length) {
  //     return axios.get(`${host}/app/api/article/list`)
  //       .then(response => {
  //         const data = response.data.list;
  //         commit(Type.SET_ARTICLE_LIST, data);
  //         return data;
  //       });
  //   }
  //   return Promise.resolve();
  // },
};

export default actions;

