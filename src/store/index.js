import Vue from "vue";
import Vuex from "vuex";
import Order from "./Order";
import PersonInfo from "./PersonInfo";
import Category from "./Category";


import mineService from '../services/mineService'
import Home from './Home'
import Discover from "./Discover"
import Detail from './Detail'
import Destination from './Destination'
import ArticleList from './ArticleList'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLogin: localStorage.getItem("isLogin") === "true" ? true : false
	},
	mutations: {
		setIsLogin(state, value) {
			state.isLogin = value;
		}
	},
	actions: {
		handleLogin(context, value) {
			context.commit("setIsLogin", value);
			localStorage.setItem("isLogin", value);
		},
		async checkLogin(context) {
			let result = await mineService.requestCheckLogin();
			if (result == 0) {
				context.dispatch("handleLogin", true);
				console.log("核对登录了");
			} else {
				context.dispatch("handleLogin", false);
			}
		}
	},

	modules: {
		Order,
		PersonInfo,
		Category,
		Home,
		Discover,
		Detail,
		Destination,
		ArticleList
	}
});
