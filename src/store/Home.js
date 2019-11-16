import api from '../utils/api'
import Http from '../utils/Http'


const state = {
    bannerData:[] ,
    hotDest:[],
    searchList:[],
};
const mutations = {
    setbannerData(state,value){
      state.bannerData=value;
    },
    sethotDest(state,value){
      state.hotDest=value;
    },
    setsearchList(state,value){
      state.searchList = value;
    }
};
const actions = {
  async requestGoodsListData(context){
    const {data: result} = await Http.get(api.GOODS_LIST_API,{}); 
    //判断请求的结果
    if(result.code === 1){
       // 处理数据
      const {link,hot_destination} = result.data;
      //轮播图数据
      const bannerData = link.map((item, index)=>({
        picUrl: item.picture,
        id: index
      }));
      const hotDest = hot_destination;
      context.commit('setbannerData',bannerData);
      context.commit('sethotDest',hotDest);
    }else{
      // 失败了
      throw new Error(result.message);
    }
  },
  async requestSearchList(context){
    const {data:result} = await Http.get(api.SEARCH_LIST_API);
    if(result.code == 1){
      const searchList = result.data;
      context.commit('setsearchList',searchList)
    }
    else{
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