<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
	
	<category class="category" ></category>
	
  </div>
</template>
<script>
	import TabBar from './components/tab-bar'
	import category from './pages/category/category'
export default {
  components: {
    [TabBar.name]: TabBar,
	category
  },
  data(){
    return {

    }
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
