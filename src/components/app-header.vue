<template>
<div class="app-header border-bottom">
  <van-icon v-if="hasBack" class="back-btn" name="arrow-left" @click="backAction"></van-icon>
  <h1 class="title oneline-ellipsis">{{title}}</h1>
  <slot name="right-btn"/>
</div>
</template>

<script>
export default {
  name:'app-header',
  props:{
    title:{
      type:String,
      require:true
    },
    hasBack:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    backAction(){
      this.$router.back();
    }
  }
}
</script>
<style lang="scss" scoped>
.app-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 49px;
    .title{
      width: 70%;
      margin: 0 auto;
      height: 49px;
      line-height: 49px;
      text-align: center;
      font-size: 18px;
    }
    .back-btn{
      position: absolute;
      left: 0;
      top: 0;
      padding: 0 10px;
      font-size: 20px;
      line-height: 44px;
      color:blue
    }
  }
</style>