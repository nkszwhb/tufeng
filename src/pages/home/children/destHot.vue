<template>
  <div class="dest-hot">
      <div class="mode-title">
          <h3>热门目的地</h3>
      </div>
      <!-- <div class="dest-scroll-x"> -->
          <div class="dest-hot-items">
              <destItem v-for="(item,index) in destList" :key="item.index" :data="item" class="dest-hot-item"/>
          </div>
      <!-- </div> -->
  </div>
</template>

<script>
import destItem from './destHot-item'
export default {
    components:{
        destItem
    },
    props: {
        destList: {
            type: Array,
            required: true
        }
    },
    created(){
    //   console.log(this.destList);
    }
}
</script>

<style scoped lang="scss">
.dest-hot{
    height: auto;
    overflow: hidden;
    position: relative;
    .mode-title{
        padding:0 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 26px 0 14px;
        position: relative;
        h3{
            font-size: 18px;
            color: #363636;
            font-weight: bolder;
            margin: 0;
        }
    }
    // .dest-scroll-x{
    //     width: 100%;
    //     overflow: hidden;
    //     height: auto;
    .dest-hot-items{
        width:100%;
        height:140px;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        padding-left: 24px;
        // .dest-hot-item{
        //     float:left;
        // }
    }
    .dest-hot-items::-webkit-scrollbar {
        display: none;
    }

    // }
}
</style>