<template>
<!-- <div> -->
	<div class="page" id="home">
		<app-scroll class="content">
			<banner :list="bannerList"/>
			<div class="home-search">
				<div class="search-input" @click="goSearch">
					<van-icon class="search-icon" name="search" />
					<span class="search-tip">城市、景点、产品、关键字</span>
				</div>
				<van-icon class="hot-phone" name="user-circle-o" />
			</div>

			<navBox/>

			<div class="home-page-activity">
				<img src="https://cdn.tff.bz/f2/ce/5c/750×156.jpg" alt="">
			</div>

			<destHot :destList="hotDestList"/>

			<div class="discount-area">
				<img src="//cdn.tff.bz/f2/windtour/e0/fb/banner-%E4%BC%98%E6%83%A0%E4%B8%93%E5%8C%BA.jpg?imageView2/1/w/664/h/316/q/85/format/jpg" alt="">
			</div>

			<newProduct/>
		</app-scroll>

	</div>
<!-- </div> -->
</template>

<script>
import {mapState} from 'vuex'
import banner from './children/banner'
import navBox from './children/navBox'
import destHot from './children/destHot'
import newProduct from './children/new-product'
export default{
	components: {
		banner,
		navBox,
		destHot,
		newProduct
	},

	data(){
		return{
			
		}
	},
		
	computed: {
		...mapState({
			bannerList: state=>state.Home.bannerData,
			hotDestList:state=>state.Home.hotDest
		})

	},

	methods:{
		goSearch(){
			this.$center.$emit('togsearch',true)
		}
	},

	created(){
		// 请求初始化数据
		this.$store.dispatch('Home/requestGoodsListData');
		
		
	}
}
</script>

<style scoped lang="scss">
.content{
	top:0;
}


.home-page-activity{
	padding: 0 24px;
	height: auto;
	overflow: hidden;
	img{
		width:100%;
		height:100%;
	}
}
.discount-area{
	padding: 0 24px;
    width: 100%;
	box-sizing: border-box;
	img{
		max-width: 100%;
		border-radius: 4px;
    	margin-top: 28px;
	}
}
</style>
