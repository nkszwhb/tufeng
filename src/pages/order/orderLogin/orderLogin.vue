<template>
<div class="orderLogin">
	<van-tabs v-model = "index" swipeable class="nav" color="#0090f2" title-active-color="#0090f2">
		<van-tab title="全部" name='a'>
			<div class="context">
				<orderContent v-for="item in orderData"
				 :item="item" class="list"/>
			</div>
		</van-tab>
		<van-tab title="未付款" name='b'>
			<div class="content">
				<orderContent v-for="item in orderData" 
				v-if="item.status==-1" :item="item" class="list"/>
			</div>
		</van-tab>
		<van-tab title="已付款" name='c'>

			<!-- <app-scroll class="content"> -->
				<orderContent v-for="item in orderData" v-if="item.status == 1"
				 :item="item" class="list"/>
			<!-- </app-scroll> -->
		</van-tab>
		<van-tab title="待评价"></van-tab>
		<van-tab title="退款"></van-tab>
	</van-tabs>

	
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
			index:'a',
			selectedstatus:0//-1 全部 0待付款,1未出行,2待评价,3退款
		}
	},
	components:{
		orderContent
	},
	methods:{

	},
	computed:{
		...mapState({
			// 全部
			orderData:state=>state.Order.orderList,
		}),
		// showList(){
		// 	// 全部
		// 	if(this.selectedstatus === 0){
		// 		return this.orderList;
		// 	}
		// 	// 各种状态数据的过滤
		// 	return this.orderList.filter(item=>{
		// 		return item.status === (this.selectedstatus-1);
		// 	});
		// }
	},
	created(){
		this.$store.dispatch('Order/requestOrderList');
		
	}

}
</script>

<style lang="scss" scoped>
.orderLogin{
	width:100%;
	height:100%;
	padding-bottom:49px;
	padding-top:44px;
	position: relative;
	overflow: auto;
	box-sizing: border-box;
	.nav{
		position: absolute;
		top:0;
		bottom:44px;
		width:100%;
		height:44px;
	}
}
.context{
	height: 100%;
	width: 100%;
	// overflow: auto;
}

	.list{
		margin-top:10px;
		border-top:1px solid #ddd;
		padding-top:10px;
	}

</style>
