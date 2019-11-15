import Vue from 'vue'
import Vuex from 'vuex'
import order from './Order'
import personInfo from './PersonInfo'
import mineService from '../services/mineService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: (localStorage.getItem('isLogin') === 'true') ? true :false,
  },
  mutations: {
    setIsLogin(state,value){
      state.isLogin = value;
    }
  },
  actions: {
    handleLogin(context,value){
      context.commit('setIsLogin',value);
      localStorage.setItem('isLogin',value);
    },
    async checkLogin(context){
      let result = await mineService.requestCheckLogin();
      if(result == 0){
        context.dispatch('handleLogin',true);
        console.log('核对登录了');
        
      }
      else{
        context.dispatch('handleLogin',false);
        console.log('核对没登录了');

      }
    }
  },

  modules: {
    order,
    personInfo,
  }
})
