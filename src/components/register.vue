<template>
  <div style="background:#ddd;height:667px;">
    <div class="life-title">
      <router-link to="/login">
        <div class="title-left">< 登录</div>
      </router-link>
      <div class="title-center">用户注册</div>
      <!--<router-link to="/">-->
      <!--<div class="title-right">设置</div>-->
      <!--</router-link>-->
    </div>
    <div style="background: #fff;padding-top:40px;height: 100%;">
      <div class="login_form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="账号" prop="user">
            <el-input v-model="ruleForm.user" style="width: 80%;" placeholder="手机号/邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="ruleForm.pwd" style="width: 80%;"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkpwd">
            <el-input type="password" v-model="ruleForm.checkpwd" style="width: 80%;"></el-input>
          </el-form-item>
          <el-form-item label="昵称" prop="nickname">
            <el-input v-model="ruleForm.nickname" style="width: 80%;" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" style="width: 80%;" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="门户住址" prop="address">
            <el-input v-model="ruleForm.address" style="width: 80%;" placeholder="请输入门户地址"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="identify">
            <el-input type="trext" v-model="ruleForm.identify" style="width: 38%;float: left"></el-input>
            <div class="code" @click="refreshCode">
              <sidentify :identifyCode="identifyCode"></sidentify>
            </div>
          </el-form-item>
          <el-form-item>
            <!--<router-link to="/" name="login" style="color:#fff">-->
              <el-button style="width:80%;background: #fb9c28;color:#fff;" @click="submitForm('ruleForm')">注册</el-button>
            <!--</router-link>-->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidentify from './page/identify'
  export default {
    name: 'register',
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
        }
        if (num === '1' && !regtel.test(value)) {
          callback(new Error('请输入正确的手机号'))
        } else if (!regtel.test(value) && !regemail.test(value)) {
          callback(new Error('请输入正确的邮箱'))
        }
        callback()
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm.checkpwd !== '') {
            this.$refs.ruleForm.validateField('checkpwd')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm.pwd) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      var validateiIdentify = (rule, value, callback) => {
        console.log(value)
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
          user: '',
          identify: '',
          pwd: '',
          checkpwd: '',
          name: '',
          nickname: '',
          sex: '',
          address: ''
        },
        rules: {
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkpwd: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          identify: [
            { validator: validateiIdentify, trigger: 'blur' }
          ]
//          sex: [
//            { required: true, message: '请选择性别', trigger: 'change' }
//          ]
        }
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
            console.log(this.ruleForm)
            window.localStorage.user = this.ruleForm.user
            window.localStorage.pwd = this.ruleForm.pwd
            window.localStorage.nickname = this.ruleForm.nickname
            window.localStorage.name = this.ruleForm.name
            window.localStorage.sex = this.ruleForm.sex
            window.localStorage.address = this.ruleForm.address
            this.$router.replace({ path: '/' })
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
    background:#fb9c28;
    /*margin-bottom:15px;*/
  }
  .life-title .title-left{
    float:left;
    width:15%;
    margin-left:3%;
    color:#fff;
    /*background:#fb9c28;*/
  }
  .life-title .title-center{
    float:left;
    margin-left:24%;
    color:#fff;
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
  .code {
    /*margin: 400px auto;*/
    float: left;
    margin-left:3%;
    width: 114px;
    height: 40px;
    border: 1px solid red;
  }
</style>
