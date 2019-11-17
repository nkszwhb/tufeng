<template>
	<div class="page" id="dest">
	<!-- <app-scroll class="content">  -->
		
		<div class="cover">
			<img :src="defData.image_url" alt="">

				<p class="city-name">{{defData.name}}<van-icon @click="searchAction" class="arrow-icon" name="arrow-down"/></p>
				<p class="desc">{{defData.tag}}</p>

			  <van-icon @click="searchAction" class="search-icon" name="search" />
		</div>

		<div class="img-cover"></div>
		<div class="white">

			<!-- 产品分类 -->
			<div class="cage">
				<p class="tit">产品分类</p>
				<ul class="cage-list">
					<!-- <van-swipe class="cage-list" :autoplay="3000" indicator-color="white">
						<van-swipe-item v-for="item in">1</van-swipe-item>
						<van-swipe-item>2</van-swipe-item>
						<van-swipe-item>3</van-swipe-item>
						<van-swipe-item>4</van-swipe-item>
					</van-swipe> -->
					<li class="cage-name" 
					v-for="item in destinData.category" 
					:key="item.type"
					@click="cageAction(item.type)">
						<img :src="icon.imgurl" v-show="icon.type == item.type" v-for="icon in iconList" :key="icon.type" class="icon">
						<p>{{item.name}}</p>
					</li>
				</ul>
			</div>

			<!-- 热门推荐 -->
			<div class="hot" v-if ="destinData.hot_recommend && destinData.hot_recommend.length != 0 ">
				<p class="tit">热门推荐</p>
				<ul class="hot-list">
					<li class="hot-item" 
					v-for="hot in destinData.hot_recommend" 
					:key="hot.id"
					@click="hotAction(hot.id)">

						<img :src="hot.image_url" alt="" class="hotimg">
						<span>{{hot.title}}</span>
					</li>
				</ul>

			</div>

			<!-- 必去景点 -->
			<div class="need">
				<p class="tit">必去景点 <span v-if="destinData.tour_more">查看更多></span></p>
				<ul class="need-list">
					<li class="need-item oneline-ellipsis" 
					v-for="need in needData" 
					:key="need.id"
					@click="needAction(need.name)">

						<img :src="need.image" alt="">
						<span class="oneline-ellipsis">{{need.name}}</span>
					</li>
				</ul>				
			</div>
			<img :src="destinData.discount" alt="" class="discount">

			<!-- 跟团游销量榜 -->
			<div class="group">
				<p class="tit">跟团游销量榜</P>
				<ul class="group-list">				
					<one 
						v-for="gp in groupData" 
						:key="gp.id"
						:itemData = gp
					/>
				</ul>
				<span class="show-all" @click="allGroupAction">显示所有跟团游</span>
			</div>
			<!-- 当地玩乐销量榜 -->
			<div class="group">
				<p class="tit">当地玩乐销量榜</P>
				<ul class="group-list">				
					<one 
						v-for="local in localData" 
						:key="local.id"
						:itemData = local
					/>
				</ul>
				<span class="show-all" @click="showlLocalAction">显示所有当地玩乐</span>
			</div>

		</div>

	<!-- </app-scroll> -->
	</div>
</template>

<script>
import { mapState } from "vuex"
import one from './item'
export default {
	components:{
		one
	},
	props:{
		city:{
			type:String,
			default: ''
		}
	},
	data(){
		return{
			iconList:[
				{
					type:'boutique',
					imgurl:'https://m.toursforfun.com/img/dest/boutique.png',
				},
				{
					type:'tour',
					imgurl:'https://m.toursforfun.com/img/dest/tour.png',
				},
				{
					type:'activity',
					imgurl:'https://m.toursforfun.com/img/dest/activity.png',
				},
				{
					type:'ticket',
					imgurl:'https://m.toursforfun.com/img/dest/ticket.png',
				},
				{
					type:'cruise',
					imgurl:'https://m.toursforfun.com/img/dest/cruise.png',
				},
				{
					type:'custom',
					imgurl:'https://m.toursforfun.com/img/dest/custom.png',
				},
			],
		}
	},
	computed:{
		...mapState({
			destinData:state=>state.Destination.destinData,
			groupData:state=>state.Destination.groupData,
			localData:state=>state.Destination.localData,
			defData:state=>state.Destination.defData,
			needData:state=>state.Destination.needData,
		}),

	},
	methods:{
		// 分类和必玩
		cageAction(type){
			let category ={'keyword':this.defData.name};
			if(type != 'custom'){
				category.product_line = (type == 'ticket' ? 'tickets' : type);
			}
			sessionStorage.setItem('category',JSON.stringify(category));
			this.$router.push('/category')
			
		},
		needAction(name){
			sessionStorage.setItem('category',JSON.stringify({'keyword':name}));
			this.$router.push('/category')

		},

		// 跟团和当地的全部显示
		allGroupAction(){
			sessionStorage.setItem('category',JSON.stringify({
				'keyword':this.defData.name,
				'product_line': 'tour',
				'sort': 'order',
				'sortType': 'desc',
			}));
			this.$router.push('/category')
		},
		showlLocalAction(){
			sessionStorage.setItem('category',JSON.stringify({
				'keyword':this.defData.name,
				'tab': 'tickets',
				'sort': 'order',
				'sortType': 'desc',
			}));
			this.$router.push('/category')
		},
		// 搜素栏
		searchAction(){
			this.$center.$emit('togsearch',true);	
		}
	},
	created(){
		// 初始化点击时的数据
	  this.$store.dispatch('Destination/requestDestination',{name:this.city});
			
	}

}
</script>

<style lang="scss" scoped>
#dest{
	.content{
		top: 0;
	}
	width: 100%;
	overflow: auto;
	.cover{
			width: 100%;
			height: 400px;
			overflow: hidden;
			position: relative;
		img{
			width: 100%;
			height: 400px;
			transform:scaleX(1.65);
		}

		.city-name{
			z-index: 200;
			position: absolute;
			width: 100%;
			text-align: center;
			left: 50%;
			top: 27%;
			transform: translateX(-50%);
			font-size: 49px;
			margin-bottom: 10px;
			font-weight: bold;
			color: #fff;
			.arrow-icon{
				background: #fff;
				font-size: 12px;
				color: black;
				width: 20px;height: 20px;
				border-radius: 50%;
				text-align: center;
				line-height: 20px;
				margin-left:10px;
				position: absolute;
				top: 35%;
			}
		}
		.desc{
			padding: 5px 15px;
			color: #fff;
			font-size: 14px;
			background: rgba($color: #000000, $alpha: 0.35);
			position: absolute;
			top: 45%;
			transform: translateX(-50%);
			left: 50%;
			border-radius: 15px;
			z-index: 200;

		}
		.search-icon{
			position: absolute;
			top: 5%;right: 5%;
			font-size: 24px;
			color: #fff;
			font-weight: bold;
			z-index: 200;
		}
	}
	.img-cover{
		position: absolute;
		top: 0;left: 0;
		width: 100%;
		height: 400px;
		background: rgba($color: #000000, $alpha: 0.1)

	}
	.white{
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		padding: 24px;
		border-radius: 20px 20px 0 0;
		z-index: 100;
		position: absolute;
		top: 380px;
		.discount{
			width: 327px;
			height: 155px;
			margin-bottom: 26px;
		}
		.tit{
			font-size: 16px;
			margin: 0 0 14px;
			font-weight: bold;
			color: #363636;
			span{
				color: #0090F2;
				font-size: 14px;
				font-weight: normal;
				float: right;
			}
		}
		.cage{		
			.cage-list{
				display: flex;
				padding: 2px 8px;
				box-sizing: border-box;
				margin: 0 0 20px;
				&::-webkit-scrollbar {width: 0!important}

				overflow-x: auto;
				.cage-name{
					margin: 0 16px 0 0;
					font-size: 12px;
					padding: 0 11px;
					text-align: center;
					img{
						width: 44px;
						height: 44px;
						margin: 0 0 6px;
						padding: 0 2px;
					}				
				}
			}
		}
		.hot{
			margin-bottom: 26px;
			.hot-list{
			justify-content: space-between;
				display: flex;
				flex-wrap: wrap;
			}
			.hot-item{
				width: 157px;
				height: 90px;
				border-radius: 4px;
				position: relative;
				margin-bottom: 16px;
				// &:nth-of-type(2n+1){
				// 	margin: 0 4% 4% 0;
				// }
				img{
					width: 100%;
					height: 100%;
					border-radius: 4px;

				}
				span{
					display: block;
					position: absolute;
					bottom: 0px;
					padding: 5px 0 5px 8px;
					box-sizing: border-box;
					border-radius: 4px;
					width: 100%;
					background: rgba($color: #000000, $alpha:.3);
					color: #fff;font-size: 14px;
				}
			}
		}
		.need{
			margin-bottom: 14px;
			.need-list{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}
			.need-item{
				width: 75px;
				height: 120px;
				// margin-right: 8px;
				text-align: center;
				border-radius: 4px;
				overflow: hidden;
				img{
					width: 75px;
					height: 94px;
					transform: scaleX(1.6);
					border-radius: 4px
				}
				span{
					margin-top: 8.7px;
					display: block;
				}
			}
		}
		.group{
			margin-bottom: 26px;
			.group-list{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
			}
		}
		.show-all{
			display: block;
			width: 327px;
			height: 40px;
			font-size: 14px;
			text-align: center;
			line-height: 40px;
			border: 1px solid #0090F2;
			color: #0090F2;
			border-radius: 4px;
		}
	}
}

</style>
