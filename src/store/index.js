import Vue from 'vue'
import Vuex from 'vuex'
import Order from './Order'
import PersonInfo from './PersonInfo'
import Home from './Home'
import Discover from "./Discover"
import Detail from './Detail'
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
    Home,
    Discover,
    Detail
  }
})
