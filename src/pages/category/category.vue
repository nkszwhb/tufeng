<template>
	<div class="category">
		<CategoryHeader :searchTitle="keyword" :showBigItem="showBigItem" />
		<van-dropdown-menu :close-on-click-overlay="false" :close-on-click-outside="false">
			<van-dropdown-item :title="start_city" @open="showSelectStartCity" ref="selectStartCity"/>
			<van-dropdown-item v-model="searchFilter.product_line" @change="changeProductLine" :options="product_arr" />
			<van-dropdown-item title="排序" v-model="orderItem" @change="changeOrderItem" :options="orderOption" />
			<van-dropdown-item class="filter-item" title="筛选" ref="filterItem">
				<div class="filter-wrap">
					<div class="filterbox">
						<p class="filter-title">出发日期</p>
						<p class="pickTime" @click="selectStartTime">{{StartTime}}</p>
					</div>
					<div class="filterbox">
						<p class="filter-title">行程天数</p>
						<div class="date-num">
							<input class="date-input" v-model="searchFilter.minDay" placeholder="最少天数" type="number">
							<span></span>
							<input class="date-input" v-model="searchFilter.maxDay" placeholder="最多天数" type="number">
						</div>
					</div>
					<div class="filterbox">
						<p class="filter-title">产品类型</p>
						<van-radio-group class="radiowrap" v-model="searchFilter.product_quality">
							<van-radio class="radio-btn" v-for="(item,index) in quality" :key="index" :name="item.product_quality">
								{{item.name}}
							</van-radio>
						</van-radio-group>
					</div>
					<div class="filterbox">
						<p class="filter-title">人均价格</p>
						<div class="date-num">
							<input class="date-input" v-model="searchFilter.priceMin" placeholder="最低价格" type="number">
							<span></span>
							<input class="date-input" v-model="searchFilter.priceMax" placeholder="最高价格" type="number">
						</div>
						<van-checkbox-group  class="radiowrap" v-model="searchFilter.custom_tag">
							<van-checkbox class="radio-btn" name="2" shape="square">只看优惠确认</van-checkbox>
							<van-checkbox class="radio-btn" name="3" shape="square">只看优惠促销</van-checkbox>
						</van-checkbox-group>
					</div>
					
					<div class="filterbox">
						<p class="filter-title">结束城市</p>
						<div class="pickTime" @click="choseStopCity">请选择</div>
						<van-checkbox-group v-if="(stopCity.length != 0)" class="radiowrap" v-model="stopCity">
							<van-checkbox class="radio-btn" :name="stopCity[0]" @change="changeStopCitybox" shape="square">{{stopCity[0].split('-')[1]}}</van-checkbox>
						</van-checkbox-group>
					</div>
					
					
					<div class="filterbox">
						<p class="filter-title">服务语言</p>
						<van-radio-group class="radiowrap" v-model="searchFilter.service_languages">
							<van-radio class="radio-btn" v-for="(item,index) in service_languages_arr" :key='index' :name="item.provider_language_id">
								{{item.name}}
							</van-radio>
						</van-radio-group>
					</div>
				</div>
				
				<div class="btnwrap">
					<van-button type="warning" size="small" @click="cancelSelect">取消</van-button>
					<van-button type="default" size="small" @click="resetSelect" >重置</van-button>
					<van-button type="info" size="small" @click="confirmSelect">确认</van-button>
				</div>
			</van-dropdown-item>
			
			
		</van-dropdown-menu>
		
		<div class="categorylist">
			<CategoryItem v-for="item in categoryData" :data="item" :key="item.id" ></CategoryItem>	
		</div>
		
		
		<van-action-sheet @cancel="CancelActionSheet" @close="closeActionSheet" v-model="choseTimeShow"  :title="pickTimeTitle">
			<van-datetime-picker
				v-model="currentDate"
				type="date"
				:min-date="minDate"
				:max-date="maxDate"
				@confirm="confirmPickTime"
				@cancel="CancelActionSheet"
			/>
		</van-action-sheet>
		
		<van-action-sheet  v-model="choseStartShow" @close="closeStartCity" title="出发地">	
			<van-radio-group class="select-start-city-wrap" v-model="startCity" @change='changeStartCity'>
				<van-index-bar :sticky-offset-top='0' :index-list="startCityIndexList">
					<div v-for="item in startCityIndexData" :key="item[0]">
						<van-index-anchor :index="item[0]">{{item[0]}}</van-index-anchor>
						<van-radio class="select-start-radio" v-for="city in item[1]" :key='city.id' :name="city.id+'-'+city.name">{{city.name}}</van-radio>
					</div>
				</van-index-bar>
			</van-radio-group>
		</van-action-sheet>	
		
		<van-action-sheet  v-model="choseStopShow" title="结束城市">
			<van-radio-group class="select-start-city-wrap" v-model="stopCity[0]" @change="changeStopCity">
				<van-index-bar :sticky-offset-top='0' :index-list="stopCityIndexList">
					<div v-for="item in stopCityIndexData" :key="item[0]">
						<van-index-anchor :index="item[0]">{{item[0]}}</van-index-anchor>
						<van-radio class="select-start-radio" v-for="city in item[1]" :key='city.id' :name=" city.id+'-'+city.name ">{{city.name}}</van-radio>
					</div>
				</van-index-bar>
			</van-radio-group>
		</van-action-sheet>	
	</div>	
</template>

<script>
	import CategoryHeader from './children/CategoryHeader'
	import CategoryItem from './children/CategoryItem'
	import {mapState} from 'vuex'
	export default{
		data(){
			return{
				keyword: '美国',
				showBigItem: false,
				choseTimeShow:false,
				
				choseStartShow: false,
				choseStopShow: false,
				
				searchFilter:{
					product_line: 'boutique',
					minDay: '',
					maxDay: '',
					priceMin: '',
					priceMax: '',
					custom_tag: [],
					product_quality: '',
					stopCityId:'',
					startCityId: '',
					page:1,
					pageSize: 10,
					service_languages: '',
				},
				currentStartDate: '',
				currentEndDate: '',	
				start_city: '出发地',
				startCity: '',
				stopCity: [],
				orderItem: {},
				StartTime: '自定义出发时间',
				
				currentDate: new Date(),
				choseStartTime: true,
				// indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			    product_arr: [
				    { text: '途风精品', value: 'boutique' },
				    { text: '多日游', value: 'tour'},
				    { text: '一日游', value: 'activity'},
					{ text: '票务', value: 'tickets' },
				    { text: '邮轮游', value: 'cruise'},
				    { text: '接送', value: 'shuttle'},
			    ],
				orderOption: [
				    { text: '综合排序', value: {} },
				    { text: '销量由高到低', value: {sort:'order',sortType: 'desc'}},
				    { text: '价格由低到高', value: {sort:'price',sortType: 'asc'}},
					{ text: '价格由高到低', value: {sort:'price',sortType: 'desc'}},
				]
			}	
		},
		components:{
			CategoryHeader,
			CategoryItem
		},
		watch:{
			stopCity(news,old){
				if(news.length == 0){
					this.searchFilter.stopCityId = '';
				}
			}
		},
		computed:{
			...mapState({
				categoryData: state=> state.Category.categoryData,
				isLoading: state=> state.Category.isLoading,
				service_languages_arr: state=>state.Category.service_languages_arr,
				departureDateArr: state=>state.Category.departureDateArr,
				// product_quality:  state=>state.Category.product_quality,
				quality:  state=>state.Category.quality,
				start_city_group:  state=>state.Category.start_city_group,
				end_city_group:  state=>state.Category.end_city_group,
				minDate: state => state.Category.minDate,
				maxDate: state => state.Category.maxDate,
				searchTag: state => state.Category.searchTag
			}),
			pickTimeTitle(){
				if(this.choseStartTime){
					return '请选择开始时间';
				}else{
					return '请选择结束时间';
				}
			},
			startCityIndexList(){
				var a = Object.getOwnPropertyNames(this.start_city_group);
				a.pop();
				return a;
			},
			stopCityIndexList(){
				var a = Object.getOwnPropertyNames(this.end_city_group);
				a.pop();
				return a;
			},
			startCityIndexData(){
				return Object.entries(this.start_city_group);
			},
			stopCityIndexData(){
				return Object.entries(this.end_city_group);
			},
		},
		created(){
			this.$store.dispatch('Category/getCategory',{
				page: 1,
				pageSize: 10,
				product_line: 'boutique'
			});		
		},
		methods:{
			onConfirm() {
			    this.$refs.item.toggle();
			},
			selectStartTime(){
				this.choseTimeShow = true;
			},
			async confirmPickTime(){
				if(this.choseStartTime){
					await (this.currentStartDate = this.currentDate);
				}else{
					await (this.currentEndDate = this.currentDate);
					this.choseTimeShow = false;
					if(this.currentEndDate - this.currentStartDate >0){
						var a ='' + this.currentStartDate.getFullYear()
								+'.'+ (this.currentStartDate.getMonth()+1)
								+'.'+ this.currentStartDate.getDate();
						var b ='' +  this.currentEndDate.getFullYear()
								+ '.' + (this.currentEndDate.getMonth()+1)
								+ '.' + this.currentEndDate.getDate();
						this.StartTime = a + ' - ' + b;
						var a ='' + this.currentStartDate.getFullYear()
								+ ((this.currentStartDate.getMonth()+1 > 9) ? (this.currentStartDate.getMonth()+1) : ("0"+(this.currentStartDate.getMonth()+1)))
								+ ( (this.currentStartDate.getDate() > 9) ? this.currentStartDate.getDate() : ("0"+this.currentStartDate.getDate()));
						var b ='' +  this.currentEndDate.getFullYear() 
								+ ((this.currentEndDate.getMonth()+1 > 9) ? (this.currentEndDate.getMonth()+1) : ("0"+(this.currentEndDate.getMonth()+1))) 
								+ ((this.currentEndDate.getDate() > 9) ? this.currentEndDate.getDate() : ("0"+this.currentEndDate.getDate()));
						// console.log(a+'_'+b);
						this.$store.commit('Category/setAttrs',{attr:'departureDate',value: a+'_'+b});
					}
				}
				this.choseStartTime = !this.choseStartTime;
			},
			changeProductLine(...rest){
				console.log(rest);
				this.$store.dispatch('Category/getCategory', this.searchFilter);	
			},
			
			changeOrderItem(){
				let searchTag = {
					...this.searchFilter,
					...this.orderItem
				};
				console.log(searchTag);
				this.$store.dispatch('Category/getCategory', searchTag);	
			},
			CancelActionSheet(){
				this.choseTimeShow = false;
				this.choseStartTime = true;
			},
			cancelSelect(){
				this.$refs.filterItem.toggle();
			},
			resetSelect(){
				this.searchFilter.minDay ='';
				this.searchFilter.maxDay = '';
				this.searchFilter.priceMin = '';
				this.searchFilter.priceMax = '';
				this.searchFilter.custom_tag = [];
				this.searchFilter.product_quality = '';
				this.searchFilter.stopCityId = '';
				this.searchFilter.startCityId = '';
				this.searchFilter.currentStartDate = '';
				this.searchFilter.currentEndDate = '';
				this.searchFilter.service_languages = '';
				this.searchFilter.page = 1;
				this.searchFilter.pageSize = 1;
				this.start_city = '出发地',
				this.StartTime ='自定义出发时间';
				this.$store.commit('Category/resetDepartureDate');
			},
			showSelectStartCity(){
				this.choseStartShow = true;
			},
			closeStartCity(){
				this.$refs.selectStartCity.toggle();
			},
			changeStartCity(msg){
				this.choseStartShow = false;
				this.searchFilter.startCityId = msg.split('-')[0];
				this.start_city = msg.split('-')[1];
				this.$store.dispatch('Category/getCategory',this.searchFilter);	
			},
			changeStopCity(msg){
				if(msg){
					this.searchFilter.stopCityId = msg.split('-')[0];
				}
				this.choseStopShow = false;
			},
			changeStopCitybox(...rest){
				console.log('group',rest);
			},
			choseStopCity(){
				this.choseStopShow = true;
			},
			confirmSelect(){
				this.$refs.filterItem.toggle();
				this.$store.dispatch('Category/getCategory', this.searchFilter);
			},
			closeActionSheet(){
				this.choseStartTime = true;
			}
		}
	}
</script>

<style scoped lang="scss">
.category{
	height: 100%;
	width: 100%;
	background: #eee;
	display: flex;
	flex-direction: column;
	.categorylist{
		flex: 1;
		width: 100%;
		box-sizing: border-box;
		padding: 0 22px 20px;
		overflow: auto;
	}
	
	.filter-item{
		overflow: auto;
		display: flex;
		flex-direction: column;
	}
	
	.btnwrap{
		width: 100%;
		height: 50px;
		display: flex;
		padding: 3px 30px;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-around;
		background: #eee;
		
	}
	.select-start-city-wrap{
		height: 600px;
		width: 100%;
		overflow: auto;
		.select-start-radio{
			padding: 2px 30px;
			box-sizing: border-box;
		}
	}
	.filter-wrap{
		width: 100%;
		height: 400px;
		overflow: auto;
		.filterbox{
			width: 100%;
			overflow: hidden;
			padding: 10px 30px;
			box-sizing: border-box;
			margin-bottom: 10px;
		
			.filter-title{
				height: 24px;
				font-weight: bold;
				line-height: 24px;
				font-size: 18px;
				margin-bottom: 6px;
			}
			.pickTime{
				height: 36px;
				line-height: 36px;
				margin: 0 20px;
				box-sizing: border-box;
				text-align: center;
				background: #ddd;
			}
			.date-num{
				margin: 0 20px;
				display: flex;
				justify-content: space-between;
				height: 30px;
				align-items: center;
				.date-input{
					border: none;
					background: #eee;
					display: inline;
					width: 120px;
					height: 30px;
					outline: none;
					text-align: center;
				}
				span{
					width: 30px;
					height: 4px;
					background: #ddd;
				}
			}
			.radiowrap{
				margin: 6px 20px 0;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				.radio-btn{
					margin: 6px 10px 0 0;
					font-size: 16px;
				}
			}
		}	
	}	
}
	
	
</style>
