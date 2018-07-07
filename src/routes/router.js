import Vue from 'vue';
//导入vue-router
import VueRouter from 'vue-router';
//导入创建的组件
import HeroList from '../views/heros/list.vue';
import WuqiList from '../views/wuqii/list.vue';
import zhuangbeiList from '../views/zhuangbei/list.vue';
//添加的组件
import HeroAdd from '../views/heros/Add.vue';
//删除的组件
import HeroEdit from '../views/heros/Edit.vue';
//注册插件
Vue.use(VueRouter);
//创建路由对象，
const router = new VueRouter({
  linkExactActiveClass: 'active',//控制高亮显示
    routes: [
    
      { name: 'home', path: '/', redirect: { name: 'heros' } },
      //设置路由规则//强烈注意：：：此处设置的路由component后面的不能为字符串，也就是不要加引号额
      { name: 'heros', path: '/heros', component:HeroList},
      { name: 'wuqi', path: '/wuqi', component: WuqiList},
      { name: 'zhuangbei', path: '/zhuangbei', component: zhuangbeiList},
      //添加
      { name: 'heroadd', path: '/heros/add', component: HeroAdd},
      //修改
      { name: 'heroedit', path: '/heros/edit/:id', component: HeroEdit },  //与list.vue中的对应起来
    ]
})

//导出模块
export default router;