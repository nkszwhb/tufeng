<template>
<van-swipe class="banner" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in list" :key="item.id">
    <img :src="item.picUrl"/>
  </van-swipe-item>
</van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  created(){
      // console.log(this.list);
      
  }

}
</script>

<style scoped lang="scss">
.banner {
  background: #fafafa;
  img{
    width: 100%;
  }
}
</style>