import * as ACTION from './mutation-types';

export default {
  increment({ commit }) {
    commit(ACTION.INCREMENT);
  }
};