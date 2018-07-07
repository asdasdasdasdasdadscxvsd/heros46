<template>
<!-- 必须只有一个根节点，此处有两个根节点，需要由一个div来包含起来 -->
  <div >
    <!-- 头部 -->
    <app-Header></app-Header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 占位组件 -->
            <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  <!-- //导入header组件 -->
//     <!-- 其中的AppHeader要不是大写要不是帕斯卡 -->
  import AppHeader from './components/AppHeader.vue';
  import AppSidebar from './components/Appsidebar.vue';


//es6导出模块的语法,与module.exports一样
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'　
    }
  },
 components:{//设置组件
   AppHeader,
   AppSidebar
 }
}
//webpack 支持各种模块化的语法 CommomJs Amd es6
</script>

<style>

</style>
