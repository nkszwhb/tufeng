<template>
  <div class="page detail">
    <app-header title="详情" :hasBack="true"/>
     <app-scroll class="content">
       <banner :bannerItem="bannerList" :number="baseList.product_old_id"/>
       <introduction :data="detailList"/>
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
      detailList: state=>state.Detail.detailData,
    })
  },
	created(){
		// 请求初始化数据
    this.$store.dispatch('Detail/requestDetailData');	
    console.log(this.detailList);
    	
	}
}
</script>

<style scoped lang="scss">
.detail{
  width:100%;
  height:100%;
  background-color: #fff;
  z-index: 100;
  .content{
    bottom:74px;
  }
}
</style>