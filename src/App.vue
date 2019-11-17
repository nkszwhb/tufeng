<template>
  <div id="app">
   
    <router-view></router-view>
    <tab-bar></tab-bar>


  </div>
</template>
<script>
import TabBar from './components/tab-bar'

export default {
  components: {
    [TabBar.name]: TabBar,
  },
  created(){
		this.$store.dispatch('checkLogin');
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
