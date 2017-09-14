import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import { createState } from './state';

Vue.use(Vuex);

export function createStore(state: any) {
  return new Vuex.Store({
    state: state,
    getters,
    actions,
    mutations
  });
}