<template>
	<div class="shopcard">
		<div>
			<img :src="orderData.pic" />
			<p class="shopcard-title">
				{{orderData.title}}
			</p>
			<p class="price-each">
				<span class="price-title">单价</span>
				<span class="price">￥<span>{{orderData.price}}</span></span>
			</p>
			<p class="price-each">
				<span class="price-title">总价</span>
				<span class="price">￥<span>{{(orderData.price *personNum).toFixed(2)}}</span></span>
			</p>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			
		}
	},
	props:{
		personNum: [Number,String],
		orderData: Object
	}
}
</script>

<style lang="scss" scoped>
	.shopcard {
		width: 100%;
		img {
			width: 100%;
			height: 270px;
		}

		.shopcard-title {
			font-size: 18px;
			padding: 0px 14px;
			line-height: 22px;
			margin: 6px 0;
			overflow: hidden;
			text-overflow: ellipsis;
			word-wrap: break-word;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			white-space: normal !important;
			font-weight: bold;
			color: #333;
		}

		.price-each {
			height: 30px;
			display: flex;
			justify-content: space-between;
			padding: 0 16px;
			align-items: center;
			.price {
				line-height: 30px;
				// text-align: right;
				font-size: 20px;
				color: #fc8517;
				font-weight: bold;
			}
			.price-title{
				font-size: 14px;
			}
		}

		
	}
</style>
