import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import login from '@/components/login'
import myForm from '@/components/myForm'
import editMyForm from '@/components/editMyForm'
import register from '@/components/register'
import lifePay from '@/components/lifePay'
import payWater from '@/components/pay_water'
import telPay from '@/components/telPay'
import informCenter from '@/components/informCenter'
import userinfo from '@/components/userinfo'
import dangerWarn from '@/components/dangerWarn'
import carportmanger from '@/components/carportmanger'
import supermarket from '@/components/supermarket'
import more from '@/components/more'
import demo from '@/components/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/myForm',
      name: 'myForm',
      component: myForm
    },
    {
      path: '/editMyForm',
      name: 'editMyForm',
      component: editMyForm
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/lifePay',
      name: 'lifePay',
      component: lifePay
    },
    {
      path: '/pay-water',
      name: 'pay-water',
      component: payWater
    },
    {
      path: '/telPay',
      name: 'telPay',
      component: telPay
    },
    {
      path: '/informCenter',
      name: 'informCenter',
      component: informCenter
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '/dangerWarn',
      name: 'dangerWarn',
      component: dangerWarn
    },
    {
      path: '/carportmanger',
      name: 'carportmanger',
      component: carportmanger
    },
    {
      path: '/supermarket',
      name: 'supermarket',
      component: supermarket
    },
    {
      path: '/more',
      name: 'more',
      component: more
    }
  ]
})
