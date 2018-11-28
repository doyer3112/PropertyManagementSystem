<template>
  <div class="lifePay" style="background:#fdfdeb;height:667px;">
    <div class="life-title">
      <router-link to="/">
        <div class="title-left">< 首页</div>
      </router-link>
      <div class="title-center">生活缴费</div>
      <router-link to="/payCord">
        <div class="title-right">缴费记录</div>
      </router-link>
    </div>
    <div class="pay-form">
      <div class="pay-form-title">
          <div class="title-left">我家</div>
        <div class="title-more">...</div>
      </div>
      <div class="pay-form-center">
        <router-link to="pay-water" class="router-style">
          <div class="center-detail water">水费 010*****2323232</div>
          <div class="to-pay">></div>
        </router-link>
        <div class="center-detail shandian">电费 010*****2323232</div>
        <div class="to-pay">></div>
      </div>
    </div>
    <div class="add-pay">
      <div class="add-pay-title">
        <div class="title-left">新增缴费</div>
        <div class="title-more dingwei">
          上海市
        </div>
      </div>
      <div class="add-pay-center">
        <ul>
          <li v-for="(item,index) in module_img" :key="index">
            <img :src=item.src alt="">
            <div>{{item.title}}</div>
          </li>
        </ul>
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
    name: 'lifePay',
    data () {
      return {
        module_img: [
          {
            src: require('../assets/bgimg/water.png'),
            title: '水费'
          },
          {
            src: require('../assets/bgimg/shandian.png'),
            title: '电费'
          },
          {
            src: require('../assets/bgimg/ranqi.png'),
            title: '燃气费'
          },
          {
            src: require('../assets/bgimg/wuye.png'),
            title: '物业费'
          },
          {
            src: require('../assets/bgimg/car-pay.png'),
            title: '车位费'
          },
          {
            src: require('../assets/bgimg/guhua.png'),
            title: '固话'
          },
          {
            src: require('../assets/bgimg/kuandai.png'),
            title: '宽带'
          }
        ]
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
    height:50px;
    line-height:50px;
    font-weight: bold;
    letter-spacing: 3px;
    /*margin-bottom:15px;*/
    background:#FB9C28;
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
    /*background:red;*/
  }
  /**/
  .pay-form{
    background:#fff;
    height:150px;
    margin-bottom: 15px;
  }
  .pay-form .pay-form-title,.add-pay .add-pay-title{
    height:35px;
    line-height:35px;
    text-indent:20px;
    border-bottom: 1px solid #ddd;
    letter-spacing: 5px;
  }
  .pay-form .pay-form-title .title-left,.add-pay .add-pay-title .title-left{
    float:left;
  }
  .pay-form .pay-form-title .title-more,.add-pay .add-pay-title .title-more{
    float:right;
    margin-top:-12px;
    margin-right:20px;
    font-size:40px;
    color:#FB9C28;
  }
  .pay-form .pay-form-center{
    height:50px;
    line-height:50px;
    text-indent:45px;
  }
  .pay-form .pay-form-center .center-detail{
    float:left;
  }
  .pay-form .pay-form-center .water{
    background:url('../assets/bgimg/water.png') 10px 5px no-repeat;
  }
  .pay-form .pay-form-center .shandian{
    background:url('../assets/bgimg/shandian.png') 10px 5px no-repeat;
  }
  .pay-form .pay-form-center .to-pay{
    float:right;
    margin-right:30px;
    font-size:20px;
    font-weight: bold;
    color:#aaa;
  }
  .add-pay {
    clear:both;
    background: #fff;
    height:200px;
  }
  .add-pay .add-pay-title .dingwei{
    line-height: 65px;
    font-size:14px;
    color:#333;
    text-indent: 25px;
    /*background: yellow;*/
    background:url('../assets/bgimg/dingwei.jpg') 0 22px no-repeat;
  }
  .add-pay-center{
    padding:10px 0px 0 0;
  }
  .add-pay-center ul li{
    width:20%;
    display:inline-block;
    margin:0 18px 15px 0;
    float:left;
    text-align: center;
    /*background:red;*/
  }
  .add-pay-center ul li img{
    display:block;
    /*background:green;*/
    margin:0 auto;
    margin-bottom: 3px;
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
