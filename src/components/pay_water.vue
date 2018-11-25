<template>
  <div class="pay_water" style="background:#fdfdeb;height:667px;">
    <div class="life-title">
      <router-link to="/lifePay">
        <div class="title-left">< 返回</div>
      </router-link>
      <div class="title-center">生活缴费</div>
      <router-link to="/payCord">
        <div class="title-right">...</div>
      </router-link>
    </div>
    <div class="pay-form">
      <div class="pay-form-title">
        电费
      </div>
      <div class="pay-form-center">
          暂未查到欠费
      </div>
      <div class="pay-form-bottom">
        <div>
          缴费单位 <span>国网上海市电力公司(银行代收)</span>
        </div>
        <div>
          缴费户号 <span>0131144509</span>
        </div>
        <div>
          代扣 <span>暂未开通</span>
        </div>
      </div>
    </div>

    <div class="footer">
      <router-link class="router-style" to="/">缴费代扣 </router-link>|
      <router-link class="router-style" to="/">户号管理 </router-link>|
      <router-link class="router-style" to="/">帮助中心</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pay_water',
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
    /*margin-bottom:15px;*/
  }
  .life-title .title-left{
    float:left;
    width:15%;
    margin-left:3%;
    color:#fff;
    background:#fb9c28;
  }
  .life-title .title-center{
    float:left;
    margin-left:24%;
    color:#fff;
  }
  .life-title .title-right{
    float:right;
    width:14%;
    color:#fff;
    font-size:40px;
    font-weight: normal;
    background:#fb9c28;
  }
  /**/
  .pay-form{
    background:#fff;
    height:450px;
    margin-bottom: 15px;
  }
  .pay-form .pay-form-title{
    height:70px;
    line-height:70px;
    text-indent:50px;
    border-bottom: 1px solid #ddd;
    background: url(../assets/bgimg/water.png) 10px 12px no-repeat;
  }
  .pay-form .pay-form-center{
    height:60px;
    padding-top:190px;
    padding-left:36%;
    border-bottom: 1px solid #ddd;
    background: url(../assets/bgimg/search.jpg) 50% 25px no-repeat;
  }
  .pay-form .pay-form-bottom{
    padding:20px;
  }
  .pay-form .pay-form-bottom div{
    margin-bottom: 10px;
  }
  .pay-form .pay-form-bottom div span{
    float: right;
  }
  .footer{
    /*height:100px;*/
    clear:both;
    text-align: center;
    padding:30px 0;
  }
  .router-style{
    text-decoration: none;
    color:#333;
  }
</style>
