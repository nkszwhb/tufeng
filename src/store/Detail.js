import api from '../utils/api'
import Http from '../utils/Http'


const state = {
    baseData:{},
    infoData:{},
    languageData:[],
    itineraryData:[],
    banner:[]
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
        let banner = (baseData.media.extra).map((item, index)=>( item.url));
        banner.unshift(baseData.media.image_url);
        context.commit('setBaselData',baseData);
        context.commit('setInfoData',infoData);
        context.commit('setLanguageData',languageData);
        context.commit('setItineraryData',itineraryData);
        context.commit('setbanner',banner);
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