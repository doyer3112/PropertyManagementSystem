<template>
  <div style="background:#fdfdeb;">
    <div class="life-title">
      <router-link to="/">
        <div class="title-left">< 首页</div>
      </router-link>
      <div class="title-center">用户基本信息</div>
      <router-link to="/editMyForm">
      <div class="title-right">修改</div>
      </router-link>
    </div>
    <div class="user_header" style="">
        <div class="user_name_img" style=""></div>
        <div class="user_name">{{userData.user_nikename}}</div>
    </div>
    <div class="user_inform" :model="userData">
      <ul>
        <li><div class="left">姓名</div><div class="right">{{userData.user_name}}</div></li>
        <li><div class="left">性别</div><div class="right">{{userData.user_sex}}</div></li>
        <li><div class="left">联系电话</div><div class="right">{{userData.user_tel}}</div></li>
        <li><div class="left">住户地址</div><div class="right">{{userData.user_address}}</div></li>
        <li><div class="left">小区用户信息</div><div class="right">上海市徐汇区徐家汇</div></li>
      </ul>
    </div>
    <el-button type="primary" @click="loginout()" style="width:90%;margin:5% 5% 0 5%;background:#FB9C28;border-color:#FB9C28;">退出登录</el-button>
  </div>
</template>

<script>
  export default {
    name: 'myForm',
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
//                  "id":0,
//                    "admin":true,
//                    "user":"15518986601",
//                    "user_pwd":"123456",
//                    "user_name":"任青",
//                    "user_nikename":"bess",
//                    "user_sex":"女",
//                    "user_tel":"15518986601",
//                    "user_address":"乐山路33号"
      }
    },
    created () {
    },
    methods: {
      loginout: function () {
        window.localStorage.removeItem('user')
        this.$router.replace({ path: '/login' })
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
    width:15%;
    margin-left:3%;
    color:#fff;
    /*background:#FB9C28;*/
  }
  .life-title .title-center{
    float:left;
    margin-left:23%;
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
    position: absolute;left:30px;bottom:45px;
    background: url(../assets/bgimg/user_head.jpg) no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
  }
  .user_name{
    width:100px;
    text-align: center;
    font-size: 16px;
    position: absolute;left:30px;bottom:8px;
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
</style>
