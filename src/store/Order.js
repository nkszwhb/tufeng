import api from '../utils/api'
import Http from '../utils/Http'

const state = {
  orderList: [],
  // updateOrder:[]
};
const mutations = {
  setOrderList(state, value){
    state.orderList = value;
  },
  setUpdateOrder(state, value){
    state.orderList.forEach((item,index,array) => {
      if(item.orderid === value.id){
        array[index].status = value.status;
      }
    });;
  }
};
const actions = {
  async requestOrderList(context){
    const {data:result} = await Http.get(api.FIND_ORDER);
    const orderList = result.data;
    context.commit('setOrderList',orderList)
  },
  async requestUpdateOrder(context){
    const {data:result} = Http.post(api.ORDER_UPDATE,{status,id});
    if(data.code === 0){
      context.commit('setOrderList',orderList)
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