<template>
  <div class="code" @click="refreshCode">
    <sidentify :identifyCode="identifyCode"></sidentify>
  </div>
</template>

<script>
  import Sidentify from './page/identify'
  export default {
    name: 'demo',
    components: {
      Sidentify
    },
    data () {
      return {
//        验证码
        identifyCodes: '1234567890',
        identifyCode: ''
      }
    },
    created () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    methods: {
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
  .code {
    /*margin: 400px auto;*/
    float: left;
    margin-left:3%;
    width: 114px;
    height: 40px;
    border: 1px solid red;
  }
</style>
