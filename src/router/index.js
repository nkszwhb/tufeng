import Vue from 'vue'
import VueRouter from 'vue-router'

import homeRouter from './homeRouter'
Vue.use(VueRouter)

const routes = [
	{
	  path: '/',
	  redirect: '/home'
	},
	{
	  path: '/home',
	  component: ()=>import('../pages/home/home'),
	},
	{
		path: '/dest/',
		alias:'/dest/:city',
		props:true,
		component: ()=>import('../pages/dest/dest'),
	},
	{
	  path: '/discover',
	  component: ()=>import('../pages/discover/discover'),
	},
	{
	  path: '/order',
	  component: ()=>import('../pages/order/order'),
	},
	{
		path: '/category',
		component: ()=>import('../pages/category/category'),	
	},
	{
	  path: '/mine',
	  component: ()=>import('../pages/mine/mine'),
	  children: [
		{
		  path: 'editUserInfo',
		  props: true,
		  component: ()=>import('../pages/mine/edit-userInfo/EditUserInfo'),
		},
		{
			path: 'myUserInfo',
			props: true,
			component: ()=>import('../pages/mine/edit-userInfo/MyUserInfo')
		}
	  ]
	},
	{
		path: '/purchase',
		component: ()=>import('../pages/purchase/purchase')
	},
	{
	  path: '/login',
	  component: ()=>import('../pages/login/Login'),
	},
	{
	  path: '/register',
	  component: ()=>import('../pages/register/Register'),
	},
	{
		path: '/findCode',
		component:()=>import('../pages/register/Find-code')
	},
	homeRouter,
	{
		path:'/detail',
		component:()=>import('../pages/detail/detail')
	},
	{
		path: '/404',
		component: ()=>import('../pages/common/not-find/NotFind')
	}
]

const router = new VueRouter({
	 base: process.env.BASE_URL,
	 routes
})

export default router
