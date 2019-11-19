<template>
	<div class="categoryItem" :id="data.id" @click="godetailAction(data.id_new)">
		<div class="left">
			<img :src="data.image">
			<span>{{data.city_name}}出发</span>
		</div>
		<div class="right">
			<span class="name">{{data.name}}</span>
			<ul class="tag">
				<li class="tagItem" v-for="tagitem in data.tags">{{tagitem.name}}</li>
			</ul>
			<div class="bottom">
				<span class="ordercount">{{data.order_count}}人出游</span>
				<div class="price">
					<span class="price_count">￥{{data.price}}</span> 起
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			data: Object
		},
		methods:{
			godetailAction(id){
				this.$router.push(`/detail/${id}`);
			}
		}
	}
</script>

<style scoped lang="scss">
.categoryItem{
	height: 146px;
	width: width 100%;
	display: flex;
	box-shadow: 0px 0px 5px 3px #999;
	margin-top: 20px;
	border-radius: 10px;
	padding: 0!important;
	.left{
		height: 146px;
		width: 146px;
		position: relative;
		span{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			background: #0006;
			color: #fff;
			height: 20px;
			line-height: 20px;
			padding: 0 6px;
			box-sizing: border-box;
			font-size: 12px;
		}
		img{
			width: 146px;
			height: 146px;
			border-radius: 10px 0 0 10px;
		}
	}
	.right{
		height: 100%;
		flex: 1;
		padding: 10px 7px;
		box-sizing: border-box;
		.name{
			overflow: hidden;
			text-overflow: ellipsis;
			word-wrap: break-word;
			display: -webkit-box;
			-webkit-line-clamp: 4;
			-webkit-box-orient: vertical;
			white-space: normal !important;
			line-height: 18px;
			font-weight: bold;
			color: #000000;
		}
		.tag{
			height: 20px;
			font-size: 12px;
			margin-top: 4px;
			margin-bottom: 8px;
			display: flex;
			align-items: center;
			.tagItem{
				display: inline;
				line-height: 14px;
				padding: 2px 3px ;
				border-radius: 3px;
				color: #fff;
				margin-right: 3px;
				background-image: -webkit-linear-gradient(left,#fe855d,#fe767e,#ff7188);
			}	
		}
		.bottom{
			height: 22px;
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			.ordercount,.price{
				color: #666;
				font-size: 14px;
			}
			.price_count{
				color: #FF5400;
				font-size: 20px;
			}
		}
	}
}

	
	
	
	
</style>
