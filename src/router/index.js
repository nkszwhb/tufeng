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
	  path: '/dest',
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
	  path: '/mine',
	  component: ()=>import('../pages/mine/mine'),
	},
	homeRouter,
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
