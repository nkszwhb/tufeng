<template>
<nav class="tab-bar border-top">
  <router-link class="tab-item" v-for="item in tabList" :key="item.id" :to="item.path">
    <van-icon class="icon" :name="item.icon" />
    <span class="title">{{item.title}}</span>
  </router-link>
</nav>
</template>

<script>
export default {
  name: 'tab-bar',
  data(){
    return {
      tabList: [
        {id: 1, path: '/home', title: '首页', icon: 'wap-home'},
        {id: 2, path: '/dest/', title: '目的地', icon: 'location'},
        {id: 3, path: '/discover', title: '发现', icon: 'eye'},
		{id: 4, path: '/order', title: '订单', icon: 'column'},
		{id: 5, path: '/mine', title: '我的', icon: 'manager'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tab-bar{
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 49px;
  overflow: hidden;
  .tab-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    text-align: center;
    color: #d6d6d6;
    .icon{
      font-size: 26px;
      margin-bottom: 3px;
    }
    .title{
      font-size: 12px;
    }
    &.router-link-active{
      color: #0090F2;
    }
  }
}
</style>