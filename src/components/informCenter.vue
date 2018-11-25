<template>
  <div style="background:#fdfdeb;height:667px;">
    <div class="life-title">
      <router-link to="/">
        <div class="title-left">< 首页</div>
      </router-link>
      <div class="title-center">消息通知</div>
      <!--<router-link to="/">-->
        <!--<div class="title-right">设置</div>-->
      <!--</router-link>-->
    </div>
    <div style="background: #fff;">
      <div v-bind:class="[{ active: unRead },'tabs-title']" @click="change(true)">未阅读</div>
      <div v-bind:class="[{ active: !unRead },'tabs-title']" @click="change(false)">已阅读</div>
      <div class="tabs-content" v-show=unRead>
        <div class="inform-content">
          <div class="inform-content-title">
            小区停水通知 未阅读
          </div>
          <div class="inform-content-msg">
            因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。
            请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！
          </div>
        </div>
        <div class="inform-content">
          <div class="inform-content-title">
            小区停水通知
          </div>
          <div class="inform-content-msg">
            因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。
            请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！
          </div>
        </div>
        <div class="inform-content">
          <div class="inform-content-title">
            小区停水通知
          </div>
          <div class="inform-content-msg">
            因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。
            请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！
          </div>
        </div>
        <div class="inform-content">
          <div class="inform-content-title">
            小区停水通知
          </div>
          <div class="inform-content-msg">
            因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。
            请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！
          </div>
        </div>
        <div class="inform-content">
          <div class="inform-content-title">
            小区停水通知
          </div>
          <div class="inform-content-msg">
            因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。
            请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！
          </div>
        </div>
      </div>
      <div class="tabs-content" v-show=!unRead>
        <div class="inform-content">
          <div class="inform-content-title">
            小区停水通知 已阅读
          </div>
          <div class="inform-content-msg">
            因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。
            请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！
          </div>
        </div>
        <div class="inform-content">
          <div class="inform-content-title">
            小区停水通知
          </div>
          <div class="inform-content-msg">
            因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。
            请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！
          </div>
        </div>
        <div class="inform-content">
          <div class="inform-content-title">
            小区停水通知
          </div>
          <div class="inform-content-msg">
            因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。
            请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！
          </div>
        </div>
        <div class="inform-content">
          <div class="inform-content-title">
            小区停水通知
          </div>
          <div class="inform-content-msg">
            因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。
            请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！
          </div>
        </div>
        <div class="inform-content">
          <div class="inform-content-title">
            小区停水通知
          </div>
          <div class="inform-content-msg">
            因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。
            请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！
          </div>
        </div>
      </div>
      <!--<template>-->
        <!--<el-tabs v-model="activeName">-->
          <!--<el-tab-pane label="未阅读" name="first">-->
            <!--<div class="inform-content">-->
              <!--<div class="inform-content-title">-->
                <!--小区停水通知-->
              <!--</div>-->
              <!--<div class="inform-content-msg">-->
                <!--因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。-->
                <!--请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="inform-content">-->
              <!--<div class="inform-content-title">-->
                <!--小区停水通知-->
              <!--</div>-->
              <!--<div class="inform-content-msg">-->
                <!--因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。-->
                <!--请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="inform-content">-->
              <!--<div class="inform-content-title">-->
                <!--小区停水通知-->
              <!--</div>-->
              <!--<div class="inform-content-msg">-->
                <!--因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。-->
                <!--请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="inform-content">-->
              <!--<div class="inform-content-title">-->
                <!--小区停水通知-->
              <!--</div>-->
              <!--<div class="inform-content-msg">-->
                <!--因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。-->
                <!--请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-tab-pane>-->
          <!--<el-tab-pane label="已阅读" name="second">-->
            <!--<div class="inform-content">-->
              <!--<div class="inform-content-title">-->
                <!--小区停水通知-->
              <!--</div>-->
              <!--<div class="inform-content-msg">-->
                <!--因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。-->
                <!--请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="inform-content">-->
              <!--<div class="inform-content-title">-->
                <!--小区停水通知-->
              <!--</div>-->
              <!--<div class="inform-content-msg">-->
                <!--因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。-->
                <!--请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="inform-content">-->
              <!--<div class="inform-content-title">-->
                <!--小区停水通知-->
              <!--</div>-->
              <!--<div class="inform-content-msg">-->
                <!--因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。-->
                <!--请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="inform-content">-->
              <!--<div class="inform-content-title">-->
                <!--小区停水通知-->
              <!--</div>-->
              <!--<div class="inform-content-msg">-->
                <!--因上下水管改造，各管线衔接。2号楼定于6月24日上午8：00-下午17：00停水。-->
                <!--请住户们提前准备好生活用水并在邻里间相互转告。给大家生活带来不便，敬请谅解。谢谢合作！-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-tab-pane>-->
        <!--</el-tabs>-->
      <!--</template>-->
    </div>

    <div class="footer">
       -----------------------------到底了-----------------------------
    </div>
  </div>
</template>

<script>
  export default {
    name: 'informCenter',
    data () {
      return {
        activeName: 'first',
        unRead: true
      }
    },
    methods: {
      change: function (status) {
        this.unRead = status
      }
    },
    created () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    margin:0;
    padding:0;
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
    /*margin-bottom:15px;*/
    color:#fff;
  }
  .life-title .title-left{
    float:left;
    width:15%;
    margin-left:3%;
    color:#fff;
  }
  .life-title .title-center{
    float:left;
    margin-left:24%;
  }
  .life-title .title-right{
    float:right;
    width:20%;
    color:#fff;
  }
  .tabs-title{
    width: 50%;height:35px;line-height:35px;
    text-align:center;float: left;
    border-bottom: 1px solid #ccc;
  }
  .tabs-content{
    clear: both;
  }
  .active{
    color:#fb9c28;
  }
  /**/
  /*
  */
  .inform-content{
    width:97%;height:100px;padding:10px;background:#fff;
    margin-bottom: 20px;
  }
  .inform-content .inform-content-msg{
    font-size: 14px;text-indent:20px;
  }
  .footer{
    /*height:100px;*/
    clear:both;
    text-align: center;
    padding:30px 0;
  }
</style>
