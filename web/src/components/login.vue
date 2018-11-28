<template>
  <div style="background:#fdfdeb;">
    <div class="life-title">
      <router-link to="/">
        <div class="title-left">< 首页</div>
      </router-link>
      <div class="title-center">登录</div>
      <!--<router-link to="/">-->
        <!--<div class="title-right">设置</div>-->
      <!--</router-link>-->
    </div>
    <div style="background: #fff;padding-top:40px;height: 100%;">
      <div class="user_head" style=""></div>
      <div class="login_form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="user">
            <el-input v-model="ruleForm.user" style="width: 80%;" placeholder="手机号/邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="ruleForm.pwd" style="width: 80%;"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="identify">
            <el-input type="trext" v-model="ruleForm.identify" style="width: 38%;float: left"></el-input>
            <div class="code" @click="refreshCode">
              <sidentify :identifyCode="identifyCode"></sidentify>
            </div>
          </el-form-item>
          <el-form-item>
            <div><span>记住密码</span>  <span style="float: right;margin-right:25%;">找回密码</span></div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="margin-right: 20%;background:#FB9C28;border-color:#FB9C28;">登录</el-button>
            <router-link to="/register" name="register" style="color:#fff">
                <el-button>注册</el-button>
            </router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidentify from './page/identify'
  export default {
    name: 'login',
    components: {
      Sidentify
    },
    data () {
      var validateUser = (rule, value, callback) => {
        var regtel = /^1[0-9]{10}$/
        var regemail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
        var num = value.substring(0, 1)
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else if (num === '1' && !regtel.test(value)) {
          callback(new Error('请输入正确的手机号'))
        } else if (!regtel.test(value) && !regemail.test(value)) {
          callback(new Error('请输入正确的邮箱'))
        } else {
          callback()
        }
      }
      var validateiIdentify = (rule, value, callback) => {
        console.log()
        if (value === '') {
          callback(new Error('请输入验证码'))
        } else if (value !== this.identifyCode) {
          callback(new Error('验证码错误！'))
        } else {
          callback()
        }
      }
      return {
//        验证码
        identifyCodes: '1234567890',
        identifyCode: '',
        ruleForm: {
          user: '15518986601',
          identify: '',
          pwd: '123456'
        },
        rules: {
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
          ],
          identify: [
            { validator: validateiIdentify, trigger: 'blur' }
          ]
        },
        mangerInform: []
      }
    },
    created () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var _this = this
            this.$http.get('../../static/user.json').then(res => {
              _this.mangerInform = res.data.data
              var isError = true
              this._.forEach(_this.mangerInform, function (item) {
                if (item.user === _this.ruleForm.user && item.user_pwd === _this.ruleForm.pwd) {
                  _this.isLogin = true
                  window.localStorage.user = item.user
                  window.localStorage.user_pwd = item.user_pwd
                  window.localStorage.admin = item.admin
                  window.localStorage.user_name = item.user_name
                  window.localStorage.user_nikename = item.user_nikename
                  window.localStorage.user_sex = item.user_sex
                  window.localStorage.user_tel = item.user_tel
                  window.localStorage.user_address = item.user_address
                  console.log('登录')
                  isError = false
                  _this.$router.replace({ path: '/' })
                }
              })
              if (isError) {
                _this.$message.error('用户名或密码错误！！！')
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      refreshCode () {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
      },
      makeCode (o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
        }
        console.log(this.identifyCode)
      }
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
    background:#FB9C28;
    /*margin-bottom:15px;*/
  }
  .life-title .title-left{
    float:left;
    width:15%;
    margin-left:3%;
    color:#fff;
    /*background:#FB9C28;*/
  }
  .life-title .title-center{
    float:left;
    margin-left:29%;
    color:#fff;
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
  .user_head{
    width:100px;
    height: 100px;
    background: url('../assets/user_header_01.jpg');
    border-radius:50%;
    margin:0 auto;
    margin-bottom: 40px;
    border:3px solid #eacfa4;
  }
  .code {
    /*margin: 400px auto;*/
    float: left;
    margin-left:3%;
    width: 114px;
    height: 40px;
    border: 1px solid red;
  }
</style>
