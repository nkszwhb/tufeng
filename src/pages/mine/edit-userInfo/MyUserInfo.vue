<template>
  <div class="myUserInfo">
      <app-header title="我的账户" :hasBack="true"/>
      <div class="content">
		  <van-cell class="cell" border="true" title="头像" is-link size="large" value="内容" />
		  <van-cell class="cell" border="true" title="昵称" is-link size="large" value="nickname" />
		  <van-cell class="cell" border="true" title="姓名" is-link size="large" value="name" />
		  <van-cell class="cell" border="true" title="性别" is-link size="large" value="sex" />
		  <van-cell class="cell" border="true" title="出生日期" is-link size="large" value="内容" />
		  <van-cell class="cell" border="true" title="手机" is-link size="large" value="内容" />
		  <van-cell class="cell" border="true" title="邮箱" is-link size="large" value="内容" />
		  <van-cell class="cell" border="true" title="修改密码" is-link size="large" value="内容" />
	  </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			nickname:'',
			name: '',
			
		}
	},
	methods:{
		
	},
	
}
</script>

<style lang="scss" scoped>
.myUserInfo{
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	background: #fff;
	z-index: 1000;
	// display: flex;
	// flex-direction: column;
	.content{
		position: absolute;
		top: 45px;
		bottom: 0;
		left: 0;
		width: 100%;
		flex: 1;
		.cell{
			height: 60px;
			// border-bottom: 1px solid #222;
			
		}
	}
}
</style>