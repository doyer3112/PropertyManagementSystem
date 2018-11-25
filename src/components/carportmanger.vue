<template>
  <div style="background:#fdfdeb;height:667px;">
    <div class="life-title">
      <router-link to="/">
        <div class="title-left">< 首页</div>
      </router-link>
      <div class="title-center">车库信息</div>
      <router-link to="/">
        <div class="title-right">设置</div>
      </router-link>
    </div>
    <div class="carportmanger" style="width:100%;height:100%;">
      <div class="carportmanger-title">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in bannerimgs" :key="index">
            <img :src="item.src">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="carportmanger-content" style="padding:15px;">
        <div class="carportmanger-content-top  content">
          <span style="background: #e99c96">
            <img src="../assets/userlogo.png" alt="">
            个人中心
          </span>
          <span style="background: #F9CD9E">
            <img src="../assets/record.png" alt="">
            停车记录
          </span>
          <span style="margin:0;background: #FCE49A">
            <img src="../assets/card.png" alt="">
            账户充值
          </span>
        </div>
        <div class="carportmanger-content-centerone content">
          <span>
            <img src="../assets/park.png" alt="">
            我要停车
          </span>
        </div>
        <div class="carportmanger-content-centertwo content">
          <span style="background: #A3C4CB">
            <img src="../assets/stall.png" alt="">
            寻找车位
          </span>
          <span style="margin: 0;background: #9FC4F9">
            <img src="../assets/code.png" alt="">
            我的二维码
          </span>
        </div>
        <div class="carportmanger-content-centerone content" style="background: #B4A8D6">
          <span>
            <img src="../assets/paylogo.png" alt="">
            停车缴费
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carportmanger',
    data () {
      return {
        bannerimgs: [],
        swiperOption: {
          autoplay: 1000,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true
        }
      }
    },
    created () {
      this.bannerimgs = [
        {src: require('../assets/swiper2.jpg')},
        {src: require('../assets/swiper1.jpg')},
        {src: require('../assets/swiper3.jpg')},
        {src: require('../assets/swiper4.jpg')}
      ]
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
  .carportmanger{
    width:97%;height:100px;padding:10px 0;background:#fff;
    margin-bottom: 20px;
  }
  .carportmanger-content-top span,.carportmanger-content-centertwo span{
    width:31%;height:80px;
    margin-right:2%;display: inline-block;
    text-align: center;
    font-size: 14px;
    margin-bottom:10px;
  }
  .carportmanger-content-centerone{
    width:100%;
    height:80px;
    font-size: 14px;
    background: #B7D6AA;
    margin-bottom:10px;
    text-align: center;
  }
  .carportmanger-content-centertwo span{
    width:47%;
    margin-right:4%;
  }
  .content span img{
    margin: 0 auto;
    display: block;
  }
  /*轮播*/
  .swiper-container{
    width: 100%;
    /*margin-top:10px;*/
  }
  .swiper-container img{
    width: 100%;
    height:200px;
  }
  .inform-content .inform-content-msg{
    font-size: 14px;text-indent:20px;
  }
</style>
