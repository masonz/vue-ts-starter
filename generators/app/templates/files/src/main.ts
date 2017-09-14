import Vue from 'vue';
import router from './router';
<%_ if (useVuex) { _%>import { createState } from './store/state';<% } %>
<%_ if (useVuex) { _%>import { createStore } from './store';<%_ } _%>

import './sass/main.scss';

new Vue({
  el: '#app',
  <%_ if (useVuex) { _%>store: createStore(createState()),<%_ } _%>
  router
});
