<template>
	<div class="discover page">
		<header class="border-bottom">
			<h1>发现</h1>
		</header>
		<div class="content">
			<sideBar :list="MenuList"/>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import sideBar from './children/sideBar'
export default{
	components: {
		sideBar
	},
	computed: {
		...mapState({
			MenuList: state=>state.Discover.menuData,
    })
  },
	created(){
		// 请求初始化数据
		this.$store.dispatch('Discover/requestDiscoverMenu');		
	}
}
</script>

<style scoped lang="scss">
.discover{
	h1{
		width:100%;
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		line-height: 44px;
	}
}
</style>
