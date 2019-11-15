<template>
<div class="page modal-page" id="register">
  <!-- 头部 -->
  <app-header title="注册" :hasBack="true"/>
  <!-- 内部 -->
  <div class="content reg-con">
    <!-- 输入框 -->
    <div class="form-group">
      <van-icon class="login-icon" name="manager"/>
      <input type="tel" class="form-control" placeholder="输入手机号" v-model="tel"/>
    </div>
    <div class="form-group">
      <van-icon class="login-icon" name="comment" />
      <input type="password" class="form-control" placeholder="短信验证码" v-model="code"/>
      <button class="form-tip" :class="{disabled:disabled}" @click="sendCodeAction">{{btnTip}}</button>
    </div>
    <div class="form-group">
      <van-icon class="login-icon" name="like" />
      <input type="password" class="form-control" placeholder="5-20位密码，包括字母和数字" v-model="psw"/>
    </div>
    <!-- 按钮 -->
    <button class="sign-btn" @click="regAction">注册</button>
  </div>
</div>
</template>

<script>
import mineService from '../../services/mineService'
export default {
  data(){
    return{
      tel:'',
      code:'',
      psw:'',
      getCode:'',
      btnTip:'获取验证码'
    }
  },
  computed:{
    disabled(){
      return this.btnTip.endsWith('s');
    }
  },
  methods:{
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
    // 注册
    async regAction(){
      if(this.tel && this.psw && this.code){
        let regTel = /^(1|\+861)[3-8]{1}\d{9}$/;
        let regPsw = /^[\da-zA-Z]{5,20}$/;
        if(regTel.test(this.tel) && regPsw.test(this.psw)){
          if(this.code == this.getCode){
            let error = await mineService.requestRegiester(this.tel,this.psw);
            if(error){
              this.clean();
              this.btnTip = '';
              this.$Toast(error);
            }
            else{
              this.clean();
              this.$Toast('哇，注册成功也！');
              this.$router.push('/login');
            }
          }
          else{
            this.$Toast('验证码错误哦')
          }
        }
        else if(!regTel.test(this.tel)){
          this.$Toast('请输入正确的手机号')
        }
        else if(!regPsw.test(this.psw)){
          this.$Toast('请输入5-20位密码，包括字母和数字')
        }
      }
      else{
        this.$Toast('请输入完整哦')
      }

    }
  }
}
</script>

<style lang="scss" scoped>
#register{

}
</style>

