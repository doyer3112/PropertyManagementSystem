<template>
  <div class="home">
    <!--表头-->
    <div id="main-title">
      <div class="title-left">
        {{villageName}}
      </div>
      <div class="title-right">
       <router-link v-show="!isLoginStatus" to="/login" name="login" style="color:#fff">登录</router-link>
       <router-link v-show="isLoginStatus"  to="/myForm" name="myForm" style="color:#fff">{{userName}}</router-link>
      </div>
    </div>
    <!--轮播-->
    <div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in bannerimgs" :key="index">
          <img :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!--可供选择模块-->
    <div class="more-model">
      <ul>
        <li v-for="(item,index) in modelName" :key="index">
          <router-link :to="item.toName" style="text-decoration: none;color:#333;">
            <img :src="item.src" alt="">
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <!--每天最新消息-->
    <div class="newone-form">
      <div class="form-title">最新通知 ></div>
      <ul>
        <li>
          <div class="form-content">
            尊敬的业主（住户）： 您好！
            值此“中秋、国庆”双节来临之际，***物业全体员工向您致以节日问候，预祝大家节日快乐！工作顺利！！
            阖家幸福！！！与此同时，为营造节日期间优美、整洁、舒适、安全的社区环境，***物业也在此向广大业主提示如下：
          </div>
        </li>
        <li>
          <div class="form-content">
            尊敬的业主（住户）： 您好！
            值此“中秋、国庆”双节来临之际，***物业全体员工向您致以节日问候，预祝大家节日快乐！工作顺利！！
            阖家幸福！！！与此同时，为营造节日期间优美、整洁、舒适、安全的社区环境，***物业也在此向广大业主提示如下：
          </div>
        </li>
        <li>
          <div class="form-content">
            尊敬的业主（住户）： 您好！
            值此“中秋、国庆”双节来临之际，***物业全体员工向您致以节日问候，预祝大家节日快乐！工作顺利！！
            阖家幸福！！！与此同时，为营造节日期间优美、整洁、舒适、安全的社区环境，***物业也在此向广大业主提示如下：
          </div>
        </li>
      </ul>
    </div><!--每天最新消息-->
    <div class="super">
      <div class="super-title">超市必买 ></div>
      <img class="top-img" src="../assets/home_shop4.jpg" alt="">
      <img class="left-img" src="../assets/home_shop5.jpg" alt="">
      <img class="right-img" src="../assets/home_shop6.jpg" alt="">
    </div>
    <div style="clear:both;padding:10px;text-align: center">
      -----------------------------到底啦----------------------------
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'home',
    data () {
      return {
        villageName: '瑞景新城小区',
        isLoginStatus: false,
        userName: '',
        bannerimgs: [],
        modelName: [
          {
            src: require('../assets/icon/pay.png'),
            name: '生活缴费',
            toName: '/lifePay'
          },
          {
            src: require('../assets/icon/chonghzi.jpg'),
            name: '手机充值',
            toName: '/telPay'
          },
          {
            src: require('../assets/icon/form.jpg'),
            name: '通知中心',
            toName: '/informCenter'
          },
          {
            src: require('../assets/icon/person.jpg'),
            name: '居民信息',
            toName: '/userinfo'
          },
          {
            src: require('../assets/icon/danger.jpg'),
            name: '危险警示',
            toName: '/dangerWarn'
          },
          {
            src: require('../assets/icon/car.jpg'),
            name: '车库管理',
            toName: '/carportmanger'
          },
          {
            src: require('../assets/icon/supermarket.jpg'),
            name: '社区超市',
            toName: '/supermarket'
          },
          {
            src: require('../assets/icon/more.jpg'),
            name: '更多...',
            toName: '/more'
          }
        ],
        swiperOption: {
          autoplay: 2000,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          observer: true,
          autoplayDisableOnInteraction: false
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    created () {
      this.bannerimgs = [require('../assets/swiper1.jpg'), require('../assets/swiper2.jpg'),
        require('../assets/swiper3.jpg'), require('../assets/swiper4.jpg')
      ]
      if (this._.isUndefined(window.localStorage.user)) {
        this.isLoginStatus = false
      } else {
        this.isLoginStatus = true
        this.userName = window.localStorage.user_nikename
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style: none;
    margin:0;
    padding:0;
  }
  .more-model ul{
    width:100%;
    padding:10px 0 0 5px;
    margin:0;
    margin-top:-5px;
    text-align: center;
    font-size:14px;
    background:#fff;
    height:160px;
  }
  .more-model ul li{
    width:20%;
    display:inline-block;
    margin:0 18px 15px 0;
    float:left;
    /*background:red;*/
  }
  .more-model ul li img{
    display:block;
    /*background:green;*/
    margin:0 auto;
    margin-bottom: 3px;
  }
  .home{
    background: #fdfdeb;
  }
  #main-title{
    width:100%;
    height:50px;
    line-height:50px;
    font-size:20px;
    color:#fff;
    /*background:url('../assets/bgimg/titlebg.jpg')*/
    background:#fb9c28; /*061e3e*/
  }
  #main-title  .title-left{
    float:left;
    margin-left:15px;
    text-indent: 35px;
    background:url('../assets/iconhome.jpg') 3px 15px no-repeat;
    background-size:20px 20px;
    font-size: 16px;
  }
  #main-title  .title-right{
    float:right;
    margin-right:15px;
    font-size:14px;
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
  /*可供选择模块*/
  .more-model{
    margin-bottom:10px;
  }
  /*每天最新消息*/
  .newone-form{
    background:#fff;
    clear:both;
    height:225px;
    margin-bottom:10px;
  }
  .newone-form .form-title{
    height:40px;
    line-height:40px;
    text-indent: 20px;
    /*text-align: center;*/
    /*background:red;*/
  }
  .newone-form ul li{
    height:40px;
    /*line-height: 20px;*/
    margin:10px 10px;
    padding-bottom:10px;
    border-bottom:1px dashed #333;
    text-overflow:ellipsis;
    overflow:hidden;
  }
  .newone-form ul li .form-content{
    height:40px;
    line-height:20px;
    text-indent: 25px;
    font-size: 12px;
    background:url('../assets/bgimg/li_bg.jpg') 15px 0 no-repeat;
    text-overflow:ellipsis;
    overflow:hidden;
  }
  /*超市必买*/
  .super{
    background:#fff;
    clear:both;
    height:400px;
    margin-bottom:10px;
  }
  .super .super-title{
    height:40px;
    line-height:40px;
    text-indent: 20px;
    /*text-align: center;*/
    /*background:red;*/
  }
  .super img{
    border: 3px solid #fdfdeb;
    border-radius: 10px;
  }
  .super .top-img{
    width:90%;height:150px;margin-left:5%;
  }
  .super .left-img{
    width:45%;height:200px;margin-left:5%;
  }
  .super .right-img{
    width:42.5%;height:200px;
  }

</style>
