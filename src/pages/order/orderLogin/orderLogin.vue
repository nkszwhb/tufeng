<template>
<div class="page" id="order">
	<van-tabs  swipeable class="nav"  color="#0090f2" title-active-color="#0090f2">
		<van-tab title="全部"></van-tab>
		<van-tab title="待付款"></van-tab>
		<van-tab title="未出行"></van-tab>
		<van-tab title="待评价"></van-tab>
		<van-tab title="退款"></van-tab>
	</van-tabs>

	<ul>
      <li v-for="item in data" :key="item.id">
		  <div class="title">
			  <span class="order-id">{{item.orderid}}</span>
			  <span class="order-status">待支付</span>
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
				<span>立即支付</span>
			</div>
      </li>
    </ul>
</div>
</template>

<script>
import Http from '../../../utils/Http'
import api from '../../../utils/api'
export default{
	data(){
		return{
			data:{},
			id:'',
			payedstatus:1//0 全部 0待付款,1未出行,2待评价,3退款
		}
	},
	methods:{
		async payAction(id){
			console.log(1);
			
			let result = await Http.post(api.ORDER_UPDATE,{status:this.payedstatus,id}); 

			let payedData = await Http.get(api.FIND_ORDER);
			this.data = payedData.data.data;
			this.$Toast('支付成功!');
			console.log(this.data);
			
		}
	},
	created(){
		(async ()=>{
			console.log(2);
			let result = await Http.get(api.FIND_ORDER);
			this.data = result.data.data;
			console.log(this.data);
		
		})()
	}

}
</script>

<style lang="scss" scoped>
ul{
	margin-top:10px;
	border-top:1px solid #ddd;
	padding-top:10px;
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
}
</style>
