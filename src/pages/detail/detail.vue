<template>
  <div class="page detail">
    <app-header title="详情" :hasBack="true"/>
     <app-scroll class="content">
       <banner :bannerItem="bannerList" :number="baseList.product_old_id"/>
       <introduction :data="detailList"/>
       <recommend :recData="recommendList"/>
       <travelDetail :itineraryItem="itineraryList"/>
     </app-scroll>
     <div class="footer-bar">
       <div class="left-collection">
         <van-icon name="like-o" />
         <span>收藏</span>
       </div>
       <div class="contact">
         <van-icon name="service-o" />
         <span>咨询</span>
       </div>
       <div class="join-cart">
         加入购物车
       </div>
       <div class="buy-now">
         立即订购
       </div>
     </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import banner from './children/banner'
import introduction from './children/introduction'
import recommend from './children/recommend'
import travelDetail from './children/travelDetail'
export default {
  components: {
    banner,
    introduction,
    recommend,
    travelDetail
  },
  props: {
    id: String
  },
  computed: {
    ...mapState({
      baseList: state=>state.Detail.baseData,
      infoList: state=>state.Detail.infoData,
      languageList: state=>state.Detail.languageData,
      itineraryList: state=>state.Detail.itineraryData,
      bannerList: state=>state.Detail.banner,
      detailList: state=>state.Detail.detailData,
      recommendList: state=>state.Detail.recommendData,
    })
  },
	created(){
		// 请求初始化数据
    this.$store.dispatch('Detail/requestDetailData',{id:this.id});	
    // console.log(this.detailList);   	
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
  .footer-bar{
      width: 100%;
      height:74px;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      padding-left:10px;
      box-sizing: border-box;
      align-items: center;
      box-shadow: 0 -3px 11px rgba(0,0,0,.1);
      background-color: #fff;
      .left-collection{
        width: 50px;
        height:100%;
        padding:5px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        font-size: 16px;
        text-align: center;
        justify-content: space-around;
        .van-icon{
          font-size: 22px;
        }
      }
      .contact{
        width: 50px;
        height:100%;
        padding:5px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        font-size: 16px;
        text-align: center;
        justify-content: space-around;
        .van-icon{
          font-size: 22px;
        }
      }
      .join-cart{
        flex:1;
        height:100%;
        text-align: center;
        line-height: 74px;
        color: #000;
        border-left: 1px solid #eee;
        font-size: 18px;
      }
      .buy-now{
        flex:1;
        height:100%;
        text-align: center;
        line-height: 74px;
        font-size: 18px;
        color:#fff;
        background: #FB5F10;
        background-image: linear-gradient(120deg,#FE7600,#FF5750);
      }
  }
}
</style>