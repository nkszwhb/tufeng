<template>
  <div class="page detail">
    <app-header title="详情" :hasBack="true"/>
     <app-scroll class="content">
       <banner :bannerItem="bannerList" :number="baseList.product_old_id"/>
       <introduction :data="infoList"/>
     </app-scroll>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import banner from './children/banner'
import introduction from './children/introduction'
export default {
  components: {
    banner,
    introduction
	},
  computed: {
    ...mapState({
      baseList: state=>state.Detail.baseData,
      infoList: state=>state.Detail.infoData,
      languageList: state=>state.Detail.languageData,
      itineraryList: state=>state.Detail.itineraryData,
      bannerList: state=>state.Detail.banner,
    })
  },
	created(){
		// 请求初始化数据
    this.$store.dispatch('Detail/requestDetailData');	
    // console.log(this.baseList.product_old_id);
    	
	}
}
</script>

<style>
.detail{
  width:100%;
  height:100%;
  background-color: #fff;
}
</style>