import api from '../utils/api'
import Http from '../utils/Http'


const state = {
    menuData:[] ,
};
const mutations = {
    setmenuData(state,value){
      state.menuData=value;
    },
};
const actions = {
  async requestDiscoverMenu(context){
    const {data: result} = await Http.get(api.MENU,{}); 
    //判断请求的结果
    if(result.code === 1){
        const menuData = result.data;
        context.commit('setmenuData',menuData);
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