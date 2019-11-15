import { Icon, Toast, Lazyload ,Cell, CellGroup} from 'vant'
import AppScroll from '../components/app-scroll'
import AppHeader from '../components/app-header'

export default {
  install(Vue){
    // 使用vant的插件
    Vue.use(Icon).use(Lazyload).use(Cell).use(CellGroup);
    Vue.prototype.$Toast = Toast;
    // 使用自定义的滚动组件
    Vue.component(AppScroll.name, AppScroll);
    Vue.component(AppHeader.name, AppHeader);

    Vue.$center = Vue.prototype.$center = new Vue();

  }
}