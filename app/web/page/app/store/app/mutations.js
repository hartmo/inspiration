'use strict';

import {
  SET_ARTICLE_LIST,
  SET_ARTICLE_DETAIL
} from './mutation-type';

const mutations = {
  [SET_ARTICLE_LIST](state, items) {
    state.articleList = items;
  },
};
export default mutations;
