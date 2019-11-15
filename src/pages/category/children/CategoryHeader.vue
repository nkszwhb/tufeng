<template>
	<div class="categoryheader">
		<van-icon class="goback" @click='goBack' name="arrow-left" />
		<div class="searchbar">
			<van-icon class="search_icon" name="search" />
			<span>{{searchTitle}}</span>
		</div>
		<van-icon class="showBigItem" name="qr-invalid" />
	</div>	
</template>

<script>
	export default{
		data(){
			return {
		
			}
		},
		props:{
			searchTitle:String,
			showBigItem: Boolean
		},
		created() {
			// console.log(this.showBigItem);
		},
		methods:{
			goBack(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped lang="scss">
.categoryheader{
	height: 44px;
	width: 100%;
	display: flex;
	line-height: 34px;
	padding: 5px;
	box-sizing: border-box;
	justify-content: space-between;
	.searchbar{
		flex: 1;
		height: 34px;
		background: #ddd;
		margin:  0 10px;
		border-radius: 17px;
		padding: 0 10px;
		line-height: 34px;
		display: flex;
		align-items: center;
		.search_icon{
			font-size: 22px;
			font-weight: bold;
		}
	}
	.goback,
	.showBigItem{
		line-height: 34px;
		height: 34px;
		padding: 0 5px;
		font-size: 22px;
	}
	
}
</style>
