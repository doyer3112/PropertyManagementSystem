<template>
  <div style="background:#fff;">
    <div class="life-title">
      <router-link to="/myForm">
        <div class="title-left">< 个人信息</div>
      </router-link>
      <div class="title-center">个人信息修改</div>
      <!--<router-link to="/editMyForm">-->
      <!--<div class="title-right">修改</div>-->
      <!--</router-link>-->
    </div>
    <div class="user_name_img" style=""></div>
    <!--<div class="user_name">{{userData.user_nikename}}</div>-->
    <div class="user_inform"  v-model="userData">
      <ul>
        <li><div class="left">姓名</div><div class="right"><input  v-model="userData.user_name" class="input-text" type="text"></div></li>
        <li><div class="left">昵称</div><div class="right"><input  v-model="userData.user_nikename" class="input-text" type="text"></div></li>
        <li><div class="left">性别</div><div class="right"><input  v-model="userData.user_sex" class="input-text" type="text"></div></li>
        <li><div class="left">联系电话</div><div class="right"><input  v-model="userData.user_tel" class="input-text" type="text"></div></li>
        <li><div class="left">住户地址</div><div class="right"><input  v-model="userData.user_address" class="input-text" type="text"></div></li>
        <li><div class="left">小区用户信息</div><div class="right">上海市徐汇区徐家汇</div></li>
      </ul>
    </div>
    <el-button type="primary" @click="edit()" style="width:90%;position:absolute;bottom:5%;left:5%;background:#FB9C28;border-color:#FB9C28;">保存</el-button>
  </div>
</template>

<script>
  export default {
    name: 'editMyForm',
    data () {
      return {
        userData: {
          user: window.localStorage.user,
          user_name: window.localStorage.user_name,
          user_nikename: window.localStorage.user_nikename,
          user_sex: window.localStorage.user_sex,
          user_tel: window.localStorage.user_tel,
          user_address: window.localStorage.user_address
        }
      }
    },
    created () {
    },
    methods: {
      edit: function () {
        console.log(this.userData)
        window.localStorage.user = this.userData.user
        window.localStorage.user_name = this.userData.user_name
        window.localStorage.user_nikename = this.userData.user_nikename
        window.localStorage.user_sex = this.userData.user_sex
        window.localStorage.user_tel = this.userData.user_tel
        window.localStorage.user_address = this.userData.user_address
        this.$message({
          message: '修改成功',
          type: 'success'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul,li{
    margin:0;
    padding:0;
    list-style: none;
  }
  .life-title {
    width:100%;
    height:40px;
    line-height:40px;
    font-weight: bold;
    background:#FB9C28;
    /*margin-bottom:15px;*/
  }
  .life-title .title-left{
    float:left;
    width:20%;
    margin-left:3%;
    color:#fff;
    /*background:#FB9C28;*/
  }
  .life-title .title-center{
    float:left;
    margin-left:18%;
    color:#fff;
  }
  .life-title .title-right{
    float:right;
    width:10%;
    color:#fff;
  }
  .user_header{
    height:320px;
    background: url(../assets/bgimg/header_bg.jpg) no-repeat;
    background-size: 100% 300px;
    position: relative;
    border-bottom: 1px solid #ccc;
  }
  .user_name_img{
    width:100px;
    height: 100px;
    margin:10% 5%;
    /*position: absolute;left:30px;bottom:45px;*/
    background: url(../assets/bgimg/user_head.jpg) no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
    text-align: center;
  }
  .user_name{
    width:100px;
    text-align: center;
    font-size: 16px;
    /*position: absolute;left:30px;bottom:8px;*/
  }
  .user_inform ul{
    width:100%;
    /*background: pink;*/
  }
  .user_inform ul li{
    /*background: yellow;*/
    height:45px;
    line-height: 45px;
    border-bottom: 1px solid #ccc;
  }
  .user_inform ul li .left{
    width:30%;
    float: left;
    text-indent: 15px;
  }
  .user_inform ul li .right{
    width:65%;
    float: right;
  }
  .input-text{
    border-left:none;
    border-right: none;
    border-top:none ;
    height:30px;
  }
</style>
