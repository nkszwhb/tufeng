import Vue from 'vue'
import Vuex from 'vuex'
import order from './Order'
import personInfo from './PersonInfo'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	 isLogin: true
  },
  mutations: {
  },
  actions: {
  },
  modules: {
	 order,
	 personInfo
  }
})
