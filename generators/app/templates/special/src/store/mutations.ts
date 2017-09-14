import * as ACTION from './mutation-types';
import { State } from './state';

const mutations = {
  [ACTION.INCREMENT](state: State) {
    state.counter++;
  }
};

export default mutations;