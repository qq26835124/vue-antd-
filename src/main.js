// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Antd from 'ant-design-vue';
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor';


Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import "ant-design-vue/dist/antd.css"
import 'vue2-animate/dist/vue2-animate.min.css'
import 'mavon-editor/dist/css/index.css'

Vue.use(Antd)
Vue.use(mavonEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
