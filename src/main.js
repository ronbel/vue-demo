import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import store from './store'
import {routes} from "./routes";
import './directives';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.filter('uppercase', val => val.toString().toUpperCase());


Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
