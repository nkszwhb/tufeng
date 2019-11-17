import {
	Icon,
	Toast,
	Lazyload,
	DropdownMenu,
	DropdownItem,
	DatetimePicker,
	ActionSheet,
	RadioGroup,
	Radio,
	Checkbox,
	CheckboxGroup,
	Button,
	Tab,
	Tabs,
	Cell,
	CellGroup,
	IndexBar,
	IndexAnchor,
	Sidebar,
	SidebarItem
} from 'vant'


import AppScroll from '../components/app-scroll'
import AppHeader from '../components/app-header'
import Search from '../components/search'

export default {
	install(Vue) {
		// 使用vant的插件
		Vue.use(Icon)
			.use(Lazyload)
			.use(DropdownMenu)
			.use(DropdownItem)
			.use(DatetimePicker)
			.use(RadioGroup)
			.use(Radio)
			.use(Checkbox)
			.use(CheckboxGroup)
			.use(Button)
			.use(IndexBar)
			.use(IndexAnchor)
			.use(Tab)
			.use(Cell)
			.use(CellGroup)
			.use(Tabs)
			.use(Sidebar)
			.use(SidebarItem)
			.use(ActionSheet);

		Vue.prototype.$Toast = Toast;
		// 使用自定义的滚动组件
		Vue.component(AppScroll.name, AppScroll);
		Vue.component(AppHeader.name, AppHeader);
		Vue.component(Search.name, Search);

		Vue.$center = Vue.prototype.$center = new Vue();
	}
}
