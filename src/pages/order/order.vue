<template>
<div class="page" id="order">
	<!-- <app-scroll> -->
		<nologin v-if="showCom"/>
		<order v-else-if="!showCom"/>
	<!-- </app-scroll> -->
</div>
</template>

<script>
import nologin from './nologin/Nologin'
import order from './orderLogin/orderLogin'
export default{
  components:{
		nologin,
		order
	},
	data(){
		return{
		}
	},
	computed:{
		showCom(){
			return !this.$store.state.isLogin
		}
	},
	methods:{

	},
	created(){
		
	}

}
</script>

<style scoped lang="scss">
.content{
	bottom:49px;
}
</style>
