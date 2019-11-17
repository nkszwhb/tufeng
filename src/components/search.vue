<template>
<div class="page modal-page" id="search">
  <div class="home-search  search-top border-bottom">
    <div class="search-input search-control">
      <van-icon class="search-icon" name="search" />
      <input class="search-tip put" placeholder="城市、景点、产品、关键字"/>
    </div>
    <span class="cancel" @click="searchCancel">取消</span>
  </div>
  <div class="content">
    <!-- 侧边 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item 
        v-for="item in searchList" 
        :title="item.name" :key="item.id"
        @click="cityAction"
        />
    </van-sidebar>

    <!-- 侧边内容 -->
    <div class="slide" v-show="selectIndex == index"   v-for="(item,index) in searchList" :key="item.id">
      <div class="city">
        <p class="title">热门城市</p>
        <div class="list">
          <li class="item" 
            v-for="(city,index) in item.city" 
            :key="index" 
            @click="destiAction(city.name)">
            <img :src="city.image_url" alt="">
            <span class="tag">{{city.tag}}</span>
            <p class="name">{{city.name}}</p>
          </li>
        </div>
      </div>
      <div class="country" v-show="item.country != ''">
        <p class="title">热门国家</p>
        <div class="list">
          <li class="item" v-for="(country,index) in item.country" :key="index">
            <span class="name">{{country.name}}</span>
          </li>
        </div>
      </div>

    </div>

  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default{
  name:'search',
	data(){
		return{
      activeKey:0,
      selectIndex:''
		}
	},
	computed:{
    ...mapState({
      searchList:state=>state.Home.searchList,
    })
	},
	methods:{
    searchCancel(){
      this.$center.$emit('togsearch',false)
    },
    cityAction(index){    
      this.selectIndex = index;
    },
    destiAction(city){
      sessionStorage.setItem('city',city);
      this.$router.push(`/dest/${city}`);
      this.$center.$emit('togsearch',false);
		  this.$store.dispatch('Destination/requestDestination',{name:city});

    }
	},
	created(){
    this.$store.dispatch('Home/requestSearchList');

	}

}
</script>

<style scoped lang="scss">
#search{
  .search-top{
    top:6px;
    padding-bottom:7px;
    .search-control{
      margin-left:-7px;
      background:#eee;
      color:#fff;
      box-shadow:none;
      .put{
        background: #eee;
        border:none;
      }
    }
  }
  .van-sidebar-item{
    padding:10px; 
  }
  .van-sidebar-item--select{
    border-color:#0090F3;
  } 
  .slide{
    position: absolute;
    top:0;
    left: 90px;
    padding:17px 0 0 10px;
    box-sizing: border-box;
    .title{
      font-size: 14px;
      color: #767676;
      margin-bottom: 10px;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
    }
    .city{
      .item{
        margin:0 8px 15px 0;
        border-radius: 5px;
        position: relative;
        img{
          width:80px;height: 80px;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .tag{
          background: linear-gradient(135deg,#fe8166,#ff6a7f,#ff425C);
          color: #fff;
          border-radius: 5px 0 5px 0;
          padding: 2px;
          position: absolute;
          top: 0;
          left: 0;
        }
        .name{
          text-align: center;
        }
      }
    }
    .country{
      .item{
        width: 28%;
        background: #f5f5f5;
        color: #767676;
        margin: 0 13px 15px 0;
        padding:10px 8px;
        box-sizing: border-box;
        text-align: center;
        border-radius: 3px;
        font-size: 12px;
      }
    }
  }

}
</style>
