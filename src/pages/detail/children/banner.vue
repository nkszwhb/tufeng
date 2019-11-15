<template>
<div class="banner-wrap">
  <van-swipe class="banner" 
    :show-indicators="false" 
    :autoplay="2000" 
    @change="changeAction">
    <van-swipe-item v-for="item in bannerItem">
      <img :src="item"/>
    </van-swipe-item>
  </van-swipe>
  <div class="num">
    编号:<span>{{number}}</span>
  </div>
  <span class="info">{{activeIndex}}/{{bannerItem.length}}</span>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: {
    bannerItem: {
      type: Array,
      required: true
    },
    number:{
        type:Number,
        required: true,
        default:0
    }
  },
  data(){
    return {
      activeIndex: 1
    }
  },
  methods: {
    changeAction(index){
      this.activeIndex = index+1;
    }
  },
  created(){
    //   console.log(this.number);
    //   console.log(this.bannerItem);
  }

}
</script>

<style scoped lang="scss">
.banner-wrap{
  position: relative;
  .banner img{
    width: 100%;
    height:278px;
  }
  .info{
    position: absolute;
    right: 24px;
    bottom: 24px;
    border-radius: 2px;
    font-size: 16px;
    background: #fff;
    color: #FFF;
    padding: 4px 8px;
    background: rgba(25,25,25,.3);
  }
  .num{
    position: absolute;
    color: #FFF;
    left:24px;
    bottom:24px;
    border-radius: 2px;
    font-size: 16px;
    padding: 4px 8px;
    background: rgba(25,25,25,.3);
    position: absolute;
  }
}
</style>