
const state = {
  isLogin: false,
};

const getters = {

};

const mutations = {
  setLogin(state,value){
    state.isLogin = value;
  }
};

const actions = {
};

export default {
  namespaced : true,
  state,
  getters,
  mutations,
  actions
}