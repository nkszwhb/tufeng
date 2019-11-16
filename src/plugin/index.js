import { 
  Icon, Toast, Lazyload,Tab,Tabs,Button,
  Sidebar,SidebarItem,
} from 'vant'
import AppScroll from '../components/app-scroll'
import AppHeader from '../components/app-header'
import Search from '../components/search'

export default {
  install(Vue){
    // 使用vant的插件
    Vue.use(Icon).use(Lazyload).use(Tab).use(Tabs).use(Button)
    .use(Sidebar).use(SidebarItem);
    Vue.prototype.$Toast = Toast;
    // 使用自定义的滚动组件
    Vue.component(AppScroll.name, AppScroll);
    Vue.component(AppHeader.name,AppHeader);
    Vue.component(Search.name,Search);

    Vue.$center = Vue.prototype.$center = new Vue();

  }
}