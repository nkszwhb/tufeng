<template>
<div class="page modal-page" id="login">
<!-- 头部 -->
<app-header title="登录" :hasBack="true"/>

<!-- 内部 -->
<div class="content login-con">
<van-tabs color="#0090f2" title-active-color="#0090f2" >
  <van-tab  title="账号登录">
    <!-- 输入框 -->
    <div class="form-group">
      <van-icon class="login-icon" name="manager" />
      <input type="tel" class="form-control" placeholder="手机号/邮箱" v-model="tel"/>
    </div>
    <div class="form-group">
      <van-icon class="login-icon" name="like" />
      <input type="password" class="form-control" placeholder="密码" v-model="psw"/>
    </div>
    <!-- 按钮 -->
    <button class="sign-btn" @click="loginPswAction">登录</button>
    <!-- 注册标题 -->
    <div class="method">
      <p class="alert-info" @click="goRegAction">注册账号</p>
      <p class="alert-info" @click="findPswAction">忘记密码</p>
    </div>
    <!-- 第三方登录 -->
    <div class="other-sign">
      <fieldset><legend>第三方账号登录</legend></fieldset>
      <div class="other-sign-list">
        <a target="_self" href="#" class="sign-qq"></a>
        <a target="_self" href="#" class="sign-weibo"></a>
      </div>
    </div>
  </van-tab>

  <van-tab title="手机验证码登录">
    <!-- 输入框 -->
    <div class="form-group">
      <van-icon class="login-icon" name="manager" />
      <input type="tel" class="form-control" placeholder="输入手机号" v-model="tel"/>
    </div>
    <div class="form-group">
      <van-icon class="login-icon" name="comment" />
      <input type="password" class="form-control" placeholder="短信验证码" v-model="code"/>
      <span class="form-tip" :class="{disabled:disabled}" @click="sendCodeAction">{{btnTip}}</span>
    </div>
    <!-- 按钮 -->
    <button class="sign-btn" @click="loginCodeAction">登录</button>
    <!-- 第三方登录 -->
    <div class="other-sign">
      <fieldset><legend>第三方账号登录</legend></fieldset>
      <div class="other-sign-list">
        <a target="_self" href="#" class="sign-qq"></a>
        <a target="_self" href="#" class="sign-weibo"></a>
      </div>
    </div>    
  </van-tab>
</van-tabs>

</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      tel:'',
      psw:'',
      code:'',
      getCode:'',
      btnTip:'获取验证码'
    }
  },
  computed:{
    disabled(){
      return this.btnTip.endsWith('s');
    },
    ...mapState({
      isLogin: state=>state.Login.isLogin,
      isReg: state=>state.Login.isReg,
      codemsg: state=>state.Login.codemsg,
      loginfalsemsg: state=>state.Login.loginfalsemsg,
      regfalsemsg: state=>state.Login.regfalsemsg,
    })
  },
  watch:{
    codemsg(...res){
      console.log(res);
      
    }
  },
  methods:{
    goRegAction(){
      this.$router.push('/register')
    },
    findPswAction(){
      this.$router.push('/findCode')
    },
    sendCodeAction(){
      if(this.disabled){
        return;
      }
      if(this.tel){
        this.$store.dispatch('Login/requestSendCode',{tel:this.tel});
        // if(codemsg){
        //   let num = 10;
        //   const timer = setInterval(()=>{
        //     if(num > 0){
        //       this.btnTip = `${num --}s`;
        //     }
        //     else{
        //       this.btnTip = `重新发送`;
        //       clearInterval(timer)
        //     }
        //   },1000);
        // }
        // else{
        //   this.$Toast('发送失败,请重试!');
        // }
      }
      else{
        this.$Toast('请输入手机号')
      }       
    },
    loginCodeAction(){
      console.log('验证码登录。。。。');
      
    },
    loginPswAction(){
      console.log('密码登录。。。。');
    }

  }
}
</script>

<style lang="scss" scoped>
#login{
  .method{
    margin:0 15px;
    display: flex;
    justify-content: space-between;
  }
  .other-sign{
    margin:50px 15px;
    border-top: 1px solid #DCDCDC;
    height:12px;
    position: relative;
    legend {
      font-size:12px;
      color: #767676;
      text-align: center;
      position: absolute;
      top: -5px;
      left: 36%;
      padding: 0 10px;
      background: white;
    }
    .other-sign-list{
      display: flex;
      margin: 20px 0;
      justify-content: center;
      .sign-qq{
        display: block;
        margin-right: 10px;
        height: 56px;
        width: 40px;
        background-image: url(/img/m_other_sign.png);
        background-repeat: no-repeat;
        background-size: 3.38rem 1.12rem;
      }
      .sign-weibo{
        display: block;
        height: 56px;
        width: 40px;
        background-image: url(/img/m_other_sign.png);
        background-repeat: no-repeat;
        background-size: 3.38rem 1.12rem;
        background-position: -1.12rem 0;
      }
    }
    
  }
}
</style>

