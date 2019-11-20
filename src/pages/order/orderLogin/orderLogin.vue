<template>
<div>
	<van-tabs  swipeable class="nav" color="#0090f2" title-active-color="#0090f2">
		<van-tab title="全部"></van-tab>
		<van-tab title="未付款"></van-tab>
		<van-tab title="已付款"></van-tab>
		<van-tab title="待评价"></van-tab>
		<van-tab title="退款"></van-tab>
	</van-tabs>

	<app-scroll class="content">
		<orderContent :list="orderData"/>
	</app-scroll>
	<!-- <button class="sign-btn" @click="outLoginAction">退出</button> -->
</div>
</template>

<script>
import {mapState} from 'vuex'
import { log } from 'util'
import orderContent from './orderContent'
export default{
	data(){
		return{
			id:'',
			selectedstatus:0//-1 全部 0待付款,1未出行,2待评价,3退款
		}
	},
	components:{
		orderContent
	},
	methods:{
		async payAction(index){
			// console.log(1);
			// this.$refs.btn.innerHTML="已支付";
			let result = await Http.post(api.ORDER_UPDATE,{status:this.selectedstatus,id:index}); 
			console.log(index);
			
			let payedData = await Http.get(api.FIND_ORDER);
			this.data = payedData.data.data;
			this.$Toast('支付成功!');
			
			console.log(result);
			console.log(this.data);
			
		},

	},
	computed:{
		...mapState({
			// 全部
			orderData:state=>state.Order.orderList,
		}),
		showList(){
			// 全部
			if(this.selectedstatus === 0){
				return this.orderList;
			}
			// 各种状态数据的过滤
			return this.orderList.filter(item=>{
				return item.status === (this.selectedstatus-1);
			});
		},
		payTxt:function(){
			return function(index){
				if(index==1){
					return '已支付'
					
				}else{
					return '立即支付'
				}
			}
		}
	},
	created(){
		this.$store.dispatch('Order/requestOrderList');
	}

}
</script>

<style lang="scss" scoped>
.content{
	top:44px;
	bottom:0;
}
// .nav{
// 	position: absolute;
// 	top:0;
// 	left:0;
// }
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
