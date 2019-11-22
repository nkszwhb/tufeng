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
	Cell,
	CellGroup,
	Button,
	Tab,
	Tabs,
	IndexBar,
	IndexAnchor,
	Sidebar,
	SidebarItem,
	Popup,
	Loading,
	Collapse,
	Field,
	CollapseItem,
	Stepper,
	ContactCard,
	ContactList,
	ContactEdit,
	SwipeCell,
	Dialog,
	Field,
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
			.use(ActionSheet)
			.use(Toast)
			.use(Popup)
			.use(Loading)
			.use(Field)
			.use(Collapse)
			.use(Dialog)
			.use(CollapseItem)
			.use(Stepper)
			.use(ContactCard)
			.use(ContactList)
			.use(ContactEdit)
			.use(SwipeCell)
			.use(Field);
		Vue.prototype.$Toast = Toast;
		// 使用自定义的滚动组件
		Vue.component(AppScroll.name, AppScroll);
		Vue.component(AppHeader.name, AppHeader);
		Vue.component(Search.name, Search);

		Vue.$center = Vue.prototype.$center = new Vue();
	}
}
