import Vue from 'vue'
import Vuex from 'vuex'
import Order from './Order'
import PersonInfo from './PersonInfo'
import Category from './Category'
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
	 Order,
	 PersonInfo,
	 Category
  }
})
