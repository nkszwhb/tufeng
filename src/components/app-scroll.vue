<template>
<div class="app-scroll" ref="scroll">
  <div class="scoll-wrap">
    <slot/>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'app-scroll',
  mounted(){
    // 创建滚动视图
    this.scroll = new BScroll(this.$refs.scroll, {
      tap: true,
      click: true
    });
    // 如果需要滚动，先刷新滚动视图，就可以在可滚动范围内滚动
    this.scroll.on('beforeScrollStart', ()=>{
      this.scroll.refresh();
    });
  }
};
</script>

<style scoped>
.app-scroll{
  overflow: hidden;
}
</style>