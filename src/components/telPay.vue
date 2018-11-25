<template>
  <div class="lifePay" style="background:#fdfdeb;height:667px;">
    <div class="life-title">
      <router-link to="/">
        <div class="title-left">< 首页</div>
      </router-link>
      <div class="title-center">充值中心</div>
      <router-link to="/">
        <div class="title-right">充值记录</div>
      </router-link>
    </div>
    <div class="telphone-content">
      <div class="tephont">
        15518986601
        <div class="local">默认号码(河南联通)</div>
      </div>
      <div class="person"></div>
    </div>
    <div class="tel-pay">
      <div class="tel-pay-title">
        充话费
      </div>
      <div class="tel-pay-center">
        <ul>
          <li>
            <div class="price">10元</div>
            <div>售价:10.00元</div>
          </li>
          <li>
            <div class="price">20元</div>
            <div>售价:19.87元</div>
          </li>
          <li>
            <div class="price">30元</div>
            <div>售价:29.85元</div>
          </li>
          <li>
            <div class="price">50元</div>
            <div>售价:49.85元</div>
          </li>
          <li>
            <div class="price">100元</div>
            <div>售价:99.98元</div>
          </li>
          <li>
            <div class="price">200元</div>
            <div>售价:199.75元</div>
          </li>
          <li>
            <div class="price">300元</div>
            <div>售价:299.58元</div>
          </li>
          <li>
            <div class="price">500元</div>
            <div>售价:499.28元</div>
          </li>
        </ul>
      </div>
      <div class="tel-pay-title" style="clear: both">
        充流量
      </div>
      <div class="tel-pay-center">
        <ul>
          <li>
            <div class="flow">1G</div>
            <div>售价:10.00元</div>
            <div style="font-size: 12px;color:#a3a3a3;">月底失效</div>
          </li>
          <li>
            <div class="flow">1G</div>
            <div>售价:10.00元</div>
            <div style="font-size: 12px;color:#a3a3a3;">月底失效</div>
          </li>
          <li>
            <div class="flow">1G</div>
            <div>售价:10.00元</div>
            <div style="font-size: 12px;color:#a3a3a3;">月底失效</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <router-link class="router-style" to="/">手机营业厅 </router-link>|
      <router-link class="router-style" to="/">话费送好友 </router-link>|
      <router-link class="router-style" to="/">更多服务</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'telPay',
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
    color:#fff;
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
  .telphone-content{
    width:100%;
    height:50px;
    line-height: 40px;
    font-size: 18px;
    background: #fff;
    margin-bottom: 10px;
    padding:0px 5px;
  }
  .tephont{
    height:25px;
  }
  .telphone-content .tephont .local{
    font-size: 12px;
    color: #a3a3a3;
    line-height:5px;
  }
  .person{
    width:25px;
    height:25px;
    background: yellow;
    float: right;
    margin-right:20px;
    margin-top:-12px;
  }
  .tel-pay {
    clear:both;
    background: #fff;
    height:330px;
    padding-left:10px;
  }
  .tel-pay-center{
    padding-top:10px;
    font-size: 14px;
  }
  .tel-pay-center ul{

  }
  .tel-pay-center ul li{
    /*font-size: 12px;*/
    height:50px;
    width:27%;
    display:inline-block;
    margin:0 18px 15px 0;
    float:left;
    text-align: center;
    color: #fb9c28;
    /*background: red;*/
    border:1px solid #fb8747;
    /*background:red;*/
  }
  .tel-pay-center ul li .price,.tel-pay-center ul li .flow{
    font-size: 14px;
    line-height: 28px;
    color: #fb8e63;
  }
  .tel-pay-center ul li .flow{
    line-height: 18px;
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
