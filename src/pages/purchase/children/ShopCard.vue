<template>
	<div class="shopcard">
		<div>
			<img src="https://cdn.tff.bz/f1/windtour/cf/1b/微信图片_20190222165119.jpg?imageView2/1/w/720/h/520/q/100/format/jpg" />
			<p class="shopcard-title">
				【途风高端-私享"豪"体验】洛杉矶空中飞行驾驶体验：美国联邦航空局授权, 专业教官1:1私家教授(可升级获取GoPro全程影像与飞行照片)
			</p>
			<p class="price-each">
				<span class="price-title">单价</span>
				<span class="price">￥<span>7962.75</span></span>
			</p>
			<p class="price-each">
				<span class="price-title">总价</span>
				<span class="price">￥<span>{{7962.75*personNum}}</span></span>
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
		personNum:String
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
