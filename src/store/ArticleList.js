import api from '../utils/api'
import Http from '../utils/Http'

const state = {
  articleList: "",
};
const mutations = {
  setArticleList(state, value){
    state.orderList = value;
  }
};
const actions = {
  async requestArticlerList(context){
    const result = await Http.get(api.ARTICLE_LIST);
    const articleList = result;
    context.commit('setArticleList',articleList)
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