import api from '../utils/api'
import Http from '../utils/Http'

const state = {
  orderList: [],
  updateOrder:[]
};
const mutations = {
  setOrderList(state, value){
    state.orderList = value;
  },
  setUpdateOrder(state, value){
    state.updateOrder = value;
  }
};
const actions = {
  async requestOrderList(context){
    const {data:result} = await Http.get(api.FIND_ORDER);
    const orderList = result.data;
    context.commit('setOrderList',orderList)
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