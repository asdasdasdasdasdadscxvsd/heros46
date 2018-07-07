<template>
    <div>
        <h2 class="sub-header">修改信息</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input  class="form-control" id="exampleInputEmail1" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input class="form-control" id="exampleInputPassword1"  v-model="formData.gender">
          </div>       
          <button type="submit" class="btn btn-success" @click="handleEdit">修改</button>
        </form>
    </div>
</template>

<script>
//添加axios模块
//import axios from 'axios';
    export default{
      data(){
        return{
          formData:{
            name:'',
            gender:''
          },
          //默认点击修改的数据的id是-1
          heroId:-1
        }
      },
      created() {     
        //获取地址栏中传输的id值,路由参数
       this.heroId = this.$route.params.id;
         //渲染页面
        this.loadDate();  
      },
      methods:{
        loadDate(){
          this.$http
          //通过点击修改的数据的id来渲染修改页面
            .get(`heroes/${this.heroId}`,this.formData)//这块一定要加this，不然会define
            .then((res)=>{
              if(res.status === 200){
                this.formData = res.data;
                // console.log(this.formData);
              }
            })
            .catch((err)=>{
              console.log(err);
            })
        },
        //修改操作
        handleEdit(){
          this.$http
            .put(`heroes/${this.heroId}`,this.formData)
            .then((res)=>{
                if(res.status===200){
                  //跳转页面
                  this.$router.push({name:'heros'});
                }else{
                  alert('修改失败')
                }
            })
            .catch((err)=>{
              console.log(err);
            })
        }
      }
    }
</script>

<style>

</style>

