<template>
    <div>
      <h2 class="sub-header">英雄列表</h2>
      <!-- <a class="btn btn-success" href="add.html">Add</a> -->
       <router-link class="btn btn-success" :to="{ name: 'heroadd' }">Add</router-link>
      <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>名称</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="item.id" v-for="(item, index) in list ">
                  <td>{{ index+1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.gender }}</td>
                  <td>
                    <!-- <a href="edit.html">edit</a> -->
                    <router-link :to="{ name:'heroedit',params:{id:item.id}}">修改</router-link>
                    &nbsp;&nbsp;
                    <a href="#" @click.prevent="handleDelete(item.id)">删除</a>
                    
                  </td>
                </tr>
            
              </tbody>
            </table>
          </div>

    </div>
</template>

<script>
//引入axios模块
// import axios from 'axios';
//导出组件
    export default{
        data(){
          return{
            list:[]
          }
        } ,
        //在页面加载完成之后加载数据
        created() {
          this.loadData();
        },
        methods:{
          //加载英雄列表，也就是读取文件数据
          loadData(){
            this.$http
              .get('heroes')
              .then((res)=>{
                  //得到的res为返回的状态吗和数据列表
                  const {status , data} = res;
                  if(status === 200){
                    this.list = data;
                  }
              })
              .catch((err)=>{
                console.log(err);
              })
          },
        //删除操作
          handleDelete(id){
            if(!confirm('您确定删除吗')){
              return;
            }
           this.$http
              .delete(`heroes/${id}`)
              .then((res)=>{
                console.log(res);
                const {status,data} = res;
                if(status===200){
                  //重新加载页面
                    this.loadData();
                }else{
                  alert('删除失败')
                }
              })
          }
        } 
    }
</script>

<style>

</style>

