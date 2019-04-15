// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/**
 * 全局引入vue ydui组件库
 */
import 'vue-ydui/dist/ydui.rem.css';
import YDUI from 'vue-ydui';
Vue.use(YDUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
