<template>
<div id="app">
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <tab-bar></tab-bar>

  <transition enter-active-class="slideInDown" leave-active-class="slideOutDown">
    <search v-if="searchShow"/>
  </transition>

</div>
</template>
<script>
import TabBar from './components/tab-bar'

export default {
  components: {
    [TabBar.name]: TabBar,
  },
  data(){
    return{
      searchShow: false,
    }
  },
  created(){
    this.$store.dispatch('checkLogin');
    this.$center.$on('togsearch',(value)=>{
      this.searchShow = value;
    })
  }
}	
</script>
<style lang="scss">
.category{
	position: absolute;
	left: 0;
	top: 0;
}
</style>
