<template>
    <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <!-- <li class="active">
                <a href="#/heros">英雄列表<span class="sr-only">(current)</span></a>
                </li>
            <li><a href="#/wuqi">武器列表</a></li>
            <li><a href="#/zhuangbei">装备列表</a></li> -->
            <router-link  tag="li" to="/heros">
                <a>英雄列表</a>
            </router-link>
              <router-link  tag="li" to="/wuqi">
                <a>武器列表</a>
            </router-link>
             <router-link  tag="li" to="/zhuangbei">
                <a>装备列表</a>
            </router-link>
          </ul>
    </div>
</template>

<script>
    //导入模块
    export default{
      
    }
</script>

<style>

</style>

