//const Vue = require('vue')
//es6的导入模块 ==>入口路由。。与上面一样
import Vue from 'vue'
import App from './App.vue'
//导入模块《import放在页面最上面》
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'
// 导入路由模块
import router from './routes/router'
//导入axios模块
import axios from 'axios';
//配置全局的公共路径
axios.defaults.baseURL ="http://localhost:3000/";
//配置全局的axios到vue构造函数的实例上取
Vue.prototype.$http = axios;
new Vue({
  el: '#app',//dom元素
  render: h => h(App),
  router
})
