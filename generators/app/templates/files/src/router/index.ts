import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * import your page or compoennt.
 * 
 * grouping components in the same chunk, see: 
 * https://router.vuejs.org/en/advanced/lazy-loading.html
 */
// import { App } from '../components/app';
// import { HomePage } from '../pages/home';
// import { AboutPage } from '../pages/about';
// import { ListPage } from '../pages/list';

const App = () => import(/* webpackChunkName: "home" */'../containers/app').then(m => m.App);
const HomePage = () => import(/* webpackChunkName: "home" */'../pages/home').then(m => m.HomePage);
const AboutPage = () => import(/* webpackChunkName: "about" */'../pages/about').then(m => m.AboutPage);
const ListPage = () => import(/* webpackChunkName: "list" */'../pages/list').then(m => m.ListPage);

/**
 * use router plugin.
 */
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      redirect: '/home',
      children: [
        { path: '/home', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/list', component: ListPage },
      ]
    }
  ]
});