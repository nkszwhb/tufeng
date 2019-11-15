<template>
	<div class="mine">
		<div class="background-box">
			<div class="background-content">
				<div class="avatar">
					<img src="https://m.toursforfun.com/img/user.png"/>
				</div>
				<div class="user-info">
					<div class="user-name">陈秋上</div>
					<div class="level">
						<img src="https://m.toursforfun.com/img/member-interest/normal-member.png" alt="">
						<span>普通会员></span>
					</div>
				</div>
			</div>
		</div>
		<div class="base-info">
			<div class="single-base" v-for="(item,index) in infoList">
				<p>{{item.num}}</p>
				<span>{{item.title}}</span>
			</div>
		</div>
		<div style="height: 10px;background: #eee"></div>
		<div class="user-content">
			<div class="content-item" v-for="(item,index) in userInfoList" @click="goEditAction">
				<van-icon :name="item.icon" class="content-icon"/>
				<span>{{item.title}}</span>
			</div>
		</div>
		<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
		<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default{
	data(){
		return{
			infoList:[
				{num:200,title:"积分",id:0},
				{num:3,title:"优惠券",id:1},
				{num:0,title:"收藏",id:2},
				{num:0,title:"浏览历史",id:3}
			],
			userInfoList:[
				{id:0,icon:"shopping-cart-o",title:"购物车"},
				{id:1,icon:"manager-o",title:"常用旅客"},
				{id:2,icon:"bullhorn-o",title:"消息"},
				{id:3,icon:"user-circle-o",title:"在线客服"},
				{id:4,icon:"edit",title:"意见反馈"},
				{id:5,icon:"gift-o",title:"福利中心"},
				{id:6,icon:"setting-o",title:"设置"}
			]
		}
	},
	methods:{
		goEditAction(){
			this.$router.push(`/mine/editUserInfo`)
		}
	}
}

</script>

<style scoped lang="scss">
.background-box{
	position: relative;
    height: 145px;
    overflow: hidden;
    background-color: #fff;
    display: flex;
    align-items: center;
	padding-top: 15px;
	.background-content{
		margin-left: 24px;
		padding-right: 48px;
		width: 100%;
		.avatar{
			float: left;
			width: 80px;
			height: 80px;
			border-radius: 50%;
			overflow: hidden;
			box-shadow: 0 2px 5px #e1e1e1;
			img{
				width:100%;
			}
		}
		.user-info{
			color: #fff;
    		margin: 11px 0 0 112px;
			.user-name{
				font-size: 24px;
				font-weight: 700;
				color: #363636;
				text-transform: capitalize;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				line-height: 31px;
			}
			.level{
				color: #363636;
				font-size: 16px;
				height: 16px;
				margin-top: 8px;
				background-size: contain;
				background-position: 0 50%;
				display: flex;
				align-items: center;
				img{
					width:18px;
					height:18px;
				}
				span{
					color: #B6B6B6;
    				padding: 0 8px 0 6px;
				}
			}
		}
	}
}
.base-info{
	height: 75px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin-bottom: 9px;
	.single-base{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 25%;
		position: relative;
		p{
			margin-bottom: 14px;
			font-size: 18px;
			font-weight: bolder;
			color: #0090F2;
		}
		span{
			font-size: 14px;
    		color: #767676;
		}
	}
}
.user-content{
	background-color: #fff;
    padding: 10px 5px 0;
    margin-bottom: 12px;
	.content-item{
		font-size: 14px;
		margin: 0;
		padding: 20px 0;
		position: relative;
		line-height: 25px;
		color: #767676;
		width: 25%;
		float:left;
		display: flex;
		flex-direction: column;
		align-items: center;
		.content-icon{
			color: #363636;
			font-size: 24px;
			vertical-align: middle;
			margin-bottom: 7px;
		}
	}
}
</style>
