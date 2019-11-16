import api from '../utils/api'
import Http from '../utils/Http'


const state = {
    baseData:{},
    infoData:{},
    languageData:[],
    itineraryData:[],
    banner:[],
    detailData:{},
    recommendData:{}
};
const mutations = {
    setBaselData(state,value){
      state.baseData=value;
    },
    setInfoData(state,value){
      state.infoData=value;
    },
    setLanguageData(state,value){
      state.languageData=value;
    },
    setItineraryData(state,value){
      state.itineraryData=value;
    },
    setbanner(state,value){
      state.banner=value;
    },
    setdetailData(state,value){
      state.detailData=value;
    },
    setrecommendData(state,value){
      state.recommendData=value;
    }
};
const actions = {
  async requestDetailData(context){
    const {data: result} = await Http.get(api.GOODS_DETAIL_API,{}); 
    //判断请求的结果
    if(result.code === 1){
        const {base,info,language,itinerary} = result.data;
        const baseData = base;
        const infoData = info;
        const languageData = language;
        const itineraryData = itinerary;
        let banner = baseData.media.extra
        banner = banner.map((item, index)=>( item.url));
        banner.unshift(baseData.media.image_url);
        let tags = [];
        let discountTags = {};
        let endCity = (baseData.return_city_name).map((item, index)=>({
          endCityItem: item.return_city_name,
          id: index
        }));
        let startCity = (baseData.departure_city_name).map((item, index)=>({
          startCityItem: item.departure_city_name,
          id: index
        }));
        let languageGroup = languageData.map((item, index)=>({
          languageItem: item.name,
          id: index
        }));
        tags = baseData.tags;
        discountTags = tags.shift();

        const detailData = {
          'price':infoData.product_price_display.double_cny,
          'productName':baseData.name,
          tags,
          'orderNum':baseData.number_of_order,
          'discountTagsName':discountTags.name,
          startCity,
          endCity,
          'days':baseData.duration,
          'attractions':baseData.product_info_statistics.attraction_num,
          'selfPay':baseData.product_info_statistics.ownexpense_num,
          'languageData':languageGroup
        };

        const recommendData = {
          'briefDescription':infoData.brief_description,
          'travelTips':infoData.travel_tips
        };

        context.commit('setBaselData',baseData);
        context.commit('setInfoData',infoData);
        context.commit('setLanguageData',languageData);
        context.commit('setItineraryData',itineraryData);
        context.commit('setbanner',banner);
        context.commit('setdetailData',detailData);
        context.commit('setrecommendData',recommendData);
    }else{
      // 失败了
      throw new Error(result.message);
    }
  },

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