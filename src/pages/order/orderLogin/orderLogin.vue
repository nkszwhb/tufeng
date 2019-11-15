<template>
<div class="page" id="order">
	<van-tabs  swipeable class="nav" color="#0090f2" title-active-color="#0090f2">
		<van-tab title="全部">hahh</van-tab>
		<van-tab title="待付款">ggg</van-tab>
		<van-tab title="未出行">gg</van-tab>
		<van-tab title="待评价">g</van-tab>
		<van-tab title="退款">dd</van-tab>
	</van-tabs>
	<!-- <button class="sign-btn" @click="outLoginAction">退出</button> -->
</div>
</template>

<script>
import all from './all'
import pay from './pay'
import go from './go'
import comment from './comment'
import refund from './refund'
import mineService from '../../../services/mineService'
export default{
  components:{
		all,
    pay,
    go,
    comment,
    refund
	},
	data(){
		return{
			
		}
	},
	methods:{

	},
	created(){

	}

}
</script>

<style lang="scss" scoped>
#order{


}
</style>
