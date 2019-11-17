<template>
<div class="page" id="order">
	<nologin v-if="showCom"/>
	<order v-else/>
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

<style>
</style>
