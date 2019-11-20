<template>
<div class="nologin" >
  <img src="/img/rabbit-happy.jpg" alt="">
  <p>您还没有登录，请登陆后查看订单</p>
  <span class="go-login" @click="goLoginAction">登录或注册</span>
  <span class="consult">产品咨询</span>
</div>
</template>

<script>
import Vue from 'vue'
export default{
  methods:{
    goLoginAction(){
      this.$router.push('/login');
      // this.$store.dispatch('handleLogin',true);
    }
  }
}
</script>

<style lang="scss" scoped>
.nologin{
  width: 100%;
  margin: 60px 0;
  img{
    width: 48%;
    margin: 26px auto;
  }
  p{
    margin-bottom: 52px;
    font-size: 14px;
    text-align: center;
  }
  span{
    display: block;
    width: 76%;
    margin: 0 auto;
    text-align: center;
    line-height: 42px;
    font-size: 16px;
  }
  .consult{
    border: 1px solid #d6d6d6;
    border-radius: 21px;
    height: 40px;
    margin-top: 30px;
  }
  .go-login{
    height: 51px;
    background-image: url(/img/goto-login-button.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: white;

  }
}
</style>
