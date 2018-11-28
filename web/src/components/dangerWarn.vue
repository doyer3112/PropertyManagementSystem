<template>
  <div style="background:#fdfdeb;height:667px;">
    <div class="life-title">
      <router-link to="/">
        <div class="title-left">< 首页</div>
      </router-link>
      <div class="title-center">危险警告</div>
      <router-link to="/">
        <div class="title-right">设置</div>
      </router-link>
    </div>
    <div class="inform-content">
      <div class="inform-content-title">
        小区防盗安全
      </div>
      <div class="inform-content-msg pd">
        1、外出及夜晚休息时锁好门窗；<br>
        2、发现异常人员或响动，及时联系24小时安全控制中心45XXX23；<br>
        3、请随手关门，谨防人员尾随，提高自我防范意识。<br>
      </div>
    </div>
    <div class="inform-content">
      <div class="inform-content-title">
        小区防盗公告
      </div>
      <div class="inform-content-msg indent">
        10月14日下午小区*栋发生一起盗窃分子技术开锁事件，先后接到和排查有4户业主被技术开锁，服务中心接到信息后第一时间协助报警、保护现场、积极配合警方调查并展开排查。
        通过现场侦查及服务中心连夜调阅现场录像，初步判断嫌疑人系通过尾随H2-1单元一位业主进入该栋楼，
      </div>
    </div>
    <div class="inform-content">
      <div class="inform-content-title">
        小区防盗安全
      </div>
      <div class="inform-content-msg pd">
        1、外出及夜晚休息时锁好门窗；<br>
        2、发现异常人员或响动，及时联系24小时安全控制中心45XXX23；<br>
        3、请随手关门，谨防人员尾随，提高自我防范意识。<br>
      </div>
    </div>
    <div class="inform-content">
      <div class="inform-content-title">
        小区防盗公告
      </div>
      <div class="inform-content-msg indent">
        10月14日下午小区*栋发生一起盗窃分子技术开锁事件，先后接到和排查有4户业主被技术开锁，服务中心接到信息后第一时间协助报警、保护现场、积极配合警方调查并展开排查。
        通过现场侦查及服务中心连夜调阅现场录像，初步判断嫌疑人系通过尾随H2-1单元一位业主进入该栋楼，
      </div>
    </div>
    <div class="inform-content">
      <div class="inform-content-title">
        小区防盗公告
      </div>
      <div class="inform-content-msg indent">
        10月14日下午小区*栋发生一起盗窃分子技术开锁事件，先后接到和排查有4户业主被技术开锁，服务中心接到信息后第一时间协助报警、保护现场、积极配合警方调查并展开排查。
        通过现场侦查及服务中心连夜调阅现场录像，初步判断嫌疑人系通过尾随H2-1单元一位业主进入该栋楼，
      </div>
    </div>
    <!--<div class="footer">-->
      <!-- -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;到底了-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'dangerWarn',
    data () {
      return {

      }
    },
    components: {
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
    width:97%;height:108px;padding:10px;background:#fff;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .inform-content .inform-content-msg{
    font-size: 14px;
  }
  .inform-content .pd{
    padding-left:10px;
  }
  .inform-content .indent{
    text-indent:20px;
  }
  .footer{
    /*height:100px;*/
    clear:both;
    text-align: center;
    padding:30px 0;
  }
</style>
