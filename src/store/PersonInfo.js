
import api from '../utils/api'
import Http from '../utils/Http'

const state = {
	userinfo: {},
	data: {},
	result:{}
};
const mutations = {
	setUserInfo(state,value){
		state.userinfo = value;
	},
	setdata(state,data){
		state.data = data;
	},
	setresult(state,result){
		state.result = result;
	}
};
const actions = {
	async updateUserInfo(context,updatamsg){
		context.commit('setdata',updatamsg);
		const result = await Http.post(api.UPDATE_USERINFO, updatamsg);
		context.commit('setresult',result);
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