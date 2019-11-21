<template>
      <li>
		  <div class="title">
			  <span class="order-id">{{item.orderid}}</span>
			  <span class="order-status">{{payStatus(item.status)}}</span>
		  </div>
		  	<div class="order-content">
			  <div class="img">
				  <img :src="item.pic" alt="">
			  </div>
			  <div class="order-title">
				  <h2 class="multiple-ellipsis">{{item.title}}</h2>
				  <div class="select-data">
					  {{item.traveltime}}出发
				  </div>
			  </div>
		  	</div>
		  	<div class="pay">
				实付款:<span>￥{{item.price}}</span>
			</div>
			<div class="button" @click="payAction(item.orderid)">
				<span>{{payTxt(item.status)}}</span>
			</div>
      </li>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            required: true,
        }
	},
	computed:{
		payTxt:function(){
			return function(index){
				if(index==1){
					return '已支付'
					
				}else{
					return '立即支付'
				}
			}
		},
		payStatus:function(){
			return function(index){
				if(index==1){
					return '已支付'
					
				}else{
					return '未支付'
				}
			}
		}
	},
	methods:{
		async payAction(index){
			this.$store.commit('Order/setUpdateOrder', {
                status:1,
                id:index
              });
			
			this.$Toast('支付成功!');

		},
	}
}
</script>

<style scoped lang="scss">
	li{
		height:220px;
		width:100%;
		// background-color: pink;
		padding:0 20px;
		box-sizing: border-box;
		// padding-bottom:30px;
		border-bottom:6px dotted #ddd;
		.title{
			display: flex;
			justify-content: space-between;
			.order-id{
				color:#666;
				font-size: 16px;
			}
			.order-status{
				color:red;
				font-size: 16px;
			}
		}
		.order-content{
			width:100%;
			height:80px;
			margin-top:10px;
			display:flex;
			.img{
				margin-right:20px;
				width:80px;
				height:80px;
				background-color: #000;
				img{
					width:100%;
					height:100%;
				}
			}
			.order-title{
				flex:1;
				height:100%;
				// background-color: red;
				position: relative;
				h2{
					width:100%;
					height:44px;
					font-size: 16px;
					line-height:22px;
				}
				.select-data{
					position: absolute;
					left:0;
					bottom:4px;
					font-size: 12px;
					color:#666;
				}
			}
		}
		.pay{
			margin-top:20px;
			font-size: 16px;
			span{
				margin-left:10px;
				color:red;
				font-size: 18px;
				font-weight: bold;
			}
		}
		.button{
			width:100%;
			span{
				display: block;
				float:right;
				margin-top:14px;
				width:70px;
				height:32px;
				text-align: center;
				line-height:32px;
				color:#fff;
				border-radius: 4px;
				background-color: red;
			}
		}
	}

</style>