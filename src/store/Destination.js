import api from '../utils/api'
import Http from '../utils/Http'

const state = {
    destinData:[],
    groupData:[],
    localData:[],
    defData:[],
    needData:[]
};
const mutations = {
    setdetinData(state,value){
      state.destinData = value;
    },
    setgroupData(state,value){
      state.groupData = value;
    },
    setlocalData(state,value){
      state.localData = value;
    },
    setdefData(state,value){
      state.defData = value;
    },
    setneedData(state,value){
      state.needData = value;
    }
    
};
const actions = {
  async requestDestination(context,obj){    
    const {data: result} = await Http.get(api.DESTINATION_API,obj); 
    
    //判断请求的结果
    if(result.code === 1){
        const destinData = result.data;
        const defData = destinData.default_destination ? destinData.default_destination : '';

        const needData = destinData.hot_attraction.map(item=>{
          return {
            id: item.tour_city_id,
            name:item.name,
            image: (item.image).startsWith('http') ? item.image : 'https://d3ne5s9fv9p81l.cloudfront.net/images/' + item.image,
          }
        })
        // 跟团游销量榜
        const tour_product = result.data.tour_product;
        const groupData = tour_product.map(item=>{
          return {
            id:item.id_new,
            name:item.name,
            imgage:item.image,
            price:item.default_price * 7,
          }
        })
        // 当地玩乐销量榜
        const ttd_product = result.data.ttd_product;
        const localData = ttd_product.map(item=>{
          return{
            id:item.id_new,
            name:item.name,
            imgage:item.image,
            price:item.default_price * 7,
          }
        })
        // console.log(groupData);
        console.log(destinData);
        
        
        context.commit('setdetinData',destinData);
        context.commit('setgroupData',groupData);
        context.commit('setlocalData',localData);
        context.commit('setdefData',defData);
        context.commit('setneedData',needData)

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