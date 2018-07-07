//引入axios
import axios from 'axios';
//插件必须有一个公开的install方法
const MyAxios = {};
MyAxios.install=function(Vue){
    //创建公共路径
  axios.defaults.baseURL = 'http://localhost:3000/';
    //创建公共axios
  Vue.prototype.$http = axios;
}

//导出
export default MyAxios;