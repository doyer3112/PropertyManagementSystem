<template>
  <div style="background:#fdfdeb;height:667px;">
    <div class="life-title">
      <router-link to="/">
        <div class="title-left">< 首页</div>
      </router-link>
      <div class="title-center">居民信息</div>
      <!--<router-link to="/">-->
        <!--<div class="title-right">设置</div>-->
      <!--</router-link>-->
    </div>
    <div class="inform-content" style="width:100%;height:100%;">
      <div class="inform-query" style="padding:10px;">
        姓名：
        <el-input placeholder="请输入内容" v-model="query_msg" size="mini" style="width:50%;margin-bottom:10px;"></el-input>
        <el-button  size="mini" type="primary" style="background: #fb9c28;color:#fff;border:none;" @click="query()">查询</el-button>
      </div>
      <template>
        <el-table
          :data="userInformData"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="姓名"
            width="65">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            width="50">
          </el-table-column>
          <el-table-column
            prop="tel"
            label="联系电话"
            width="110">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="50"
            v-if=isAdmin
          >
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index,userInformData)"
                type="text"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
  import api from './../axios/api.js'
  export default {
    name: 'more',
    data () {
      return {
        userInformData: [],
        totalData: [],
        query_msg: '',
        isAdmin: Boolean(Number(window.localStorage.admin))
      }
    },
    components: {
    },
    created () {
      this.setUserInform()
      console.log(Boolean(Number(window.localStorage.admin)))
    },
    methods: {
      setUserInform: function () {
        api.JH_news('/user/inform', 'type=top&key=123456')
          .then(res => {
            console.log(res)
            var loginData = {
              'name': window.localStorage.user_name,
              'sex': window.localStorage.user_sex,
              'tel': window.localStorage.user_tel,
              'address': window.localStorage.user_address
            }
            res.userInform[0] = loginData
            this.userInformData = res.userInform
            this.totalData = res.userInform
          })
      },
      query: function () {
        this.userInformData = []
        var _this = this
        if (this.query_msg === '') {
          this.userInformData = this.totalData
        }
        this._.forEach(this.totalData, function (item) {
          if (_this.query_msg === item.name) {
            _this.userInformData.push(item)
          }
        })
      },
      deleteRow (index, rows) {
        rows.splice(index, 1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    margin:0;
    padding:0;
    background: red;
  }
  ul li{
    list-style:none;
  }
  .life-title {
    width:100%;
    height:40px;
    line-height:40px;
    font-weight: bold;
    background:#fb9c28;
    color:#fff;
    /*margin-bottom:15px;*/
  }
  .life-title .title-left{
    float:left;
    width:15%;
    margin-left:3%;
    color:#fff;
    /*background:red;*/
  }
  .life-title .title-center{
    float:left;
    margin-left:24%;
  }
  .life-title .title-right{
    float:right;
    width:20%;
    color:#fff;
    /*background:red;*/
  }
  /**/
  /*
  */
  .inform-content{
    width:97%;height:100px;padding:10px 0;background:#fff;
    margin-bottom: 20px;
  }
  .inform-content .inform-content-msg{
    font-size: 14px;text-indent:20px;
  }
</style>
