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
import mineService from '../../services/mineService'
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
  },
  methods:{
    goRegAction(){
      this.$router.push('/register')
    },

    findPswAction(){
      this.$router.push('/findCode')
    },
    clean(){
      this.tel = '';
      this.psw = '';
      this.code = ''
    },
    // 发送验证码
    async sendCodeAction(){
      if(this.disabled){
        return;
      }
      if(this.tel){
        let regTel = /^(1|\+861)[3-8]{1}\d{9}$/;
        if(regTel.test(this.tel)){
          let result = await mineService.requestSendCode(this.tel);
          console.log(result);
          
          if(result){
            this.getCode = result;
            let num = 10;
            const timer = setInterval(()=>{
              if(num > 0){
                this.btnTip = `${num --}s`;
              }
              else{
                this.btnTip = `重新发送`;
                clearInterval(timer)
              }
            },1000);
          }
          else{
            this.clean();
            this.$Toast('发送失败,请重试!');
          }
        }
        else{
          this.$Toast('请输入正确的手机号')
        }

      }
      else{
        this.$Toast('请输入手机号')
      }       
    },
    // 验证码登录
    async loginCodeAction(){
      if(this.tel && this.code){
        if(this.code == this.getCode){
          let error = await mineService.requestLoginByCode(this.tel);
          if(error){
            this.clean();
            this.$Toast(error)
          }else{
            this.clean();
            this.$Toast('登录成功！');
            this.$store.dispatch('handleLogin',true);
            this.$center.$emit('toggleLogin',false);
            this.$router.push('/order');
          }
        }
        else{
          this.$Toast('验证码错误！')
        }
      }
      else{
        this.$Toast('请输入完整')
      }
    },
    // 密码登录
    async loginPswAction(){
      if(this.tel && this.psw){
        let error = await mineService.requestLoginByPassword(this.tel,this.psw);
        if(error){
          this.psw = '';
          this.$Toast(error);
        }
        else{
          this.clean();
          this.$Toast('登录成功！');
          this.$store.dispatch('handleLogin',true);
          this.$center.$emit('toggleLogin',false);
          this.$router.push('/order');
        }
      }else{
        this.$Toast('请输入完整！')
      }
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

