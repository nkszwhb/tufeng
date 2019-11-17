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
	Popup,
	Loading ,
	Collapse, 
	CollapseItem,
	Stepper,
	ContactCard, 
	ContactList, 
	ContactEdit,
	SwipeCell
} from 'vant'

import AppScroll from '../components/app-scroll'
import AppHeader from '../components/app-header'


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
			.use(Tabs)
			.use(ActionSheet)
			.use(Popup)
			.use(Loading)
			.use(Collapse)
			.use(CollapseItem)
			.use(Stepper)
			.use(Cell)
			.use(CellGroup)
			.use(ContactCard)
			.use(ContactList)
			.use(ContactEdit)
			.use(SwipeCell);
		Vue.prototype.$Toast = Toast;
		// 使用自定义的滚动组件
		Vue.component(AppScroll.name, AppScroll);
		Vue.component(AppHeader.name, AppHeader);
		Vue.$center = Vue.prototype.$center = new Vue();
	}
}
