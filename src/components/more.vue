<template>
  <div style="background:#ddd;height:667px;">
    <div class="life-title">
      <router-link to="/">
        <div class="title-left">< 首页</div>
      </router-link>
      <div class="title-center">居民信息</div>
      <router-link to="/">
        <div class="title-right">设置</div>
      </router-link>
    </div>
    <div class="inform-content" style="width:100%;height:100%;">
      <div class="inform-query" style="padding:10px;">
        姓名：
        <el-input placeholder="请输入内容" size="mini" style="width:50%;margin-bottom:10px;"></el-input>
        <el-button  size="mini" type="primary">查询</el-button>
      </div>
      <template>
        <el-table
          :data="newsListShow"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="姓名"
            width="80">
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
        tableData3: [{
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '王小虎',
          sex: '男',
          tel: '15518986601',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        newsListShow: []
      }
    },
    components: {
    },
    created () {
      this.setNewsApi()
    },
    methods: {
      setNewsApi: function () {
        api.JH_news('/user/inform', 'type=top&key=123456')
          .then(res => {
            console.log(res)
            this.newsListShow = res.articles
          })
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
    background:#fff;
    margin-bottom:15px;
  }
  .life-title .title-left{
    float:left;
    width:15%;
    margin-left:3%;
    color:deepskyblue;
    /*background:red;*/
  }
  .life-title .title-center{
    float:left;
    margin-left:24%;
  }
  .life-title .title-right{
    float:right;
    width:20%;
    color:deepskyblue;
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
