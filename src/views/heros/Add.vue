<template>
    <div>
        <h2 class="sub-header">添加列表</h2>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">英雄名称</label>
              <input  class="form-control" id="exampleInputEmail1"  v-model="addlist.name">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">英雄性别</label>
              <input class="form-control" id="exampleInputPassword1" v-model="addlist.gender">
            </div>
            <button type="submit" class="btn btn-success" @click.prevent="handleAdd">添加</button>
          </form>

    </div>
  
</template>

<script>
//导入axios模块
//import axios from 'axios';
  //到处组件
    export default{
      data(){
        return{
          addlist:{
            name:'',
            gender:''
          }
        }
      },
    methods:{
      handleAdd(){
        this.$http
          .post('heroes',this.addlist)
          .then((res)=>{
              const {status,data} = res;
                if(status===201){
                  //判断添加是否成功，成功跳转页面到英雄列表
                  console.log(this);
                  this.$router.push({name:'heros'});
                }else{
                  alert('添加失败');
                }

          })
      }
    }
    }
</script>

<style>


</style>

