import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//ajax
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//Axios配置
axios.defaults.baseURL = '/api/';

//状态管理
import vuex from 'vuex'
Vue.use(vuex);

//ui
import {Button, Select, Input, Menu, Submenu, MenuItem} from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Input);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
// import store from './store/index'

const service = axios.create({
  baseURL: process.env.VUE_APP_development_URL 
})

// vue有两种形式的代码 compiler（模板）模式和runtime模式（运行时），
//vue模块的package.json的main字段默认为runtime模式， 指向了"dist/vue.runtime.common.js"位置

// compiler
// new Vue({
//   el: '#app',
//   router: router,
//   store: store,
//   template: '<App/>',
//   components: { App }
// })

//runtime
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
