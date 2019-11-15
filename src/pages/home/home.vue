<template>
<!-- <div> -->
	<div class="page" id="home">
		<app-scroll class="content">

			<banner :list="bannerList"/>
			<div class="home-search">
				<div class="search-input">
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
	computed: {
		...mapState({
			bannerList: state=>state.Home.bannerData,
			hotDestList:state=>state.Home.hotDest
    	})
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
.home-search{
	position: absolute;
    top: 16px;
    width: 100%;
	padding:0 24px;
	box-sizing: border-box;
	z-index: 999;
	display: flex;
    align-items: center;
	justify-content: space-around;
	.search-input{
		height: 33px;
		line-height: 33px;
		display: flex;
		flex: 1;
		justify-content: space-between;
		border-radius: 20px;
		background-color: #fff;
		box-shadow: 0 2px 20px rgba(134,131,131,.6);
		.search-icon{
			display: block;
			color: #A1A1A1;
			padding: 1px 10px;
			font-size: 24px;
			height:100%;
			line-height: 33px;
		}
		.search-tip{
			flex: 1;
			display: block;
			margin-right: 10px;
			font-size: 15px;
			color: #A1A1A1;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
	.hot-phone{
		padding-left: 12px;
		color: #FFF;
		font-size: 24px;
		line-height: 24px;
		display: block;
	}
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
