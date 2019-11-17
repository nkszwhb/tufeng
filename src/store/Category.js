import api from '../utils/api'
import Http from '../utils/Http'

const state = {
	categoryList: [],
	categoryData: [],
	isLoading: false,
	
	//服务语言 [42]
	// service_languages: '[68,43]',
	service_languages_arr: [],
	
	//出发时间 20191115_20191215
	departureDate: '',
	departureDateArr: [],
	
	//行程天数 2_8 最小值默认0 最大值默认99
	// duration_range: '',
	
	//产品类型 
	// product_quality: '',
	quality: [],

	minDate: '',
	maxDate: '',
	// priceMax: '',
	// priceMin: '',
	// custom_tag =3，2  3表示只看优惠促销  2表示只看优惠确认 可以同时存在 用，连接
	// custom_tag: '',
	
	// startCityId : '',
	// visitCityId: '',
	// stopCityId: '',
	start_city_group: [],
	visited_city_group: [],
	end_city_group: [],
	
	searchTag:[],
	//第二栏选择器  途风精品 boutique / 多日游 tour / 一日游  activity /  邮轮游 cruise
	// product_line: '',
	
	//不可以和product_line共存  cars 接送  /tickets 票务
	// tab: '',
	
};
const mutations = {
	setCategoryData(state, value) {
		state.categoryData = value;
	},
	setCategoryList(state, value) {
		state.categoryList = value;
	},
	setLoading(state, value) {
		state.isLoading = value;
	},
	setAttrs(state,obj){
		state[obj.attr] = obj.value;
	},
	resetDepartureDate(state){
		state.departureDate = '';
	}
};

const actions = {
	
	async getCategory(context, searchFilter){
		context.commit('setLoading',true);

		let searchTag = {};

		if(searchFilter.product_line){
			if(searchFilter.product_line == 'cars' || searchFilter.product_line == 'tickets'){
				searchTag.tab = searchFilter.product_line;
			}else{
				searchTag.product_line = searchFilter.product_line;
			}
		}
		//美元标准
		searchFilter.priceMin && (searchTag.priceMin = searchFilter.priceMin/7);
		searchFilter.priceMax && (searchTag.priceMax = searchFilter.priceMax/7);
		searchFilter.keyword && (searchFilter.keyword != '') && (searchTag.keyword = searchFilter.keyword);
		searchFilter.minDay && (searchFilter.minDay != '' || searchFilter.maxDay != '') && (searchTag.duration_range = searchFilter.minDay+'_'+searchFilter.maxDay);
		searchFilter.custom_tag && (searchFilter.custom_tag.length != 0 ) && (searchTag.custom_tag = searchFilter.custom_tag.join());
		searchFilter.product_quality && searchFilter.product_quality != '' && (searchTag.product_quality = searchFilter.product_quality);
		searchFilter.stopCityId && (searchFilter.stopCityId != '') && (searchTag.stopCityId = searchFilter.stopCityId);
		searchTag.page = searchFilter.page ? searchFilter.page : 1;
		searchTag.pageSize = searchFilter.pageSize ? searchFilter.pageSize : 10;
		(context.state.departureDate != '') && (searchTag.departureDate = context.state.departureDate);
		searchFilter.service_languages && (searchTag.service_languages = '[' +searchFilter.service_languages.toString() + ']');
		searchFilter.sort && (searchTag.sort = searchFilter.sort);
		searchFilter.sortType && (searchTag.sortType = searchFilter.sortType);
		searchFilter.startCityId && (searchFilter.startCityId != '') && (searchTag.startCityId = searchFilter.startCityId);
		
		context.commit('setAttrs',{attr: 'searchTag',value: searchTag});
		const {data: result} = await Http.get(api.CATEGORY_API,searchTag);
		if(result.code == 1){
			const categoryList = result.data;
			const { product_list } = categoryList;
			const categoryData = product_list.map((item,index)=>{
				return{
					id: item.id,
					id_new: item.id_new,
					name: item.name,
					image: item.image,
					price: item.default_price*7,
					origin_price: item.origin_price,
					tags: item.tags,
					start_city_id: item.start_city_id[0],
					city_name : item.city_name[item.start_city_id[0]],
					product_url: item.product_url,
					order_count: item.order_count
				}
			});
			//赋值
			//计算日期范围
			let departure_date = categoryList.conditions.departure_date;
			let length = departure_date.length;
			let date = new Date(departure_date[0]/100, departure_date[0]%100);
			context.commit('setAttrs',{attr: 'minDate',value: date});
			date = new Date(departure_date[length-1]/100 ,departure_date[length-1]%100-1);
			context.commit('setAttrs',{attr: 'maxDate',value: date});
			
			context.commit('setCategoryList',categoryList);
			context.commit('setCategoryData',categoryData);
			context.commit('setAttrs',{attr: 'service_languages_arr',value: categoryList.conditions.service_languages});
			context.commit('setAttrs',{attr: 'departureDateArr',value: categoryList.conditions.departure_date});
			
			categoryList.conditions.quality && context.commit('setAttrs',{attr: 'quality',value: categoryList.conditions.quality});
			
			categoryList.conditions.start_city_group && context.commit('setAttrs',{attr: 'start_city_group',value: categoryList.conditions.start_city_group});
			categoryList.conditions.visited_city_group && context.commit('setAttrs',{attr: 'visited_city_group',value: categoryList.conditions.visited_city_group});
			categoryList.conditions.end_city_group && context.commit('setAttrs',{attr: 'end_city_group',value: categoryList.conditions.end_city_group});
			
			context.commit('setLoading',false);
		}else{
			throw new Error(result.message);
		}
	}

};
const getters = {

};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
