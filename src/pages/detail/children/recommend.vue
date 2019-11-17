<template>
  <div class="recommend">
      <div class="recHeader">兔小风推荐</div>
      <div v-html="recData.briefDescription" class="description"></div>
        <div class="recHeader">行程特色</div>
      <div class="travel-tips" v-html="recData.travelTips"></div>
      <!-- <div class="title">
            <h1>标题</h1>
        </div> -->
  </div>
</template>

<script>
export default {
   props:{
        recData:{
            type:Object,
            required: true,
        },
   },
}
</script>

<style scoped lang="scss">
.recommend{
    width:100%;
    box-sizing: border-box;
    padding: 32px 19px;
    border-top: 1px solid #EEE;
    height:auto;
    .recHeader{
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 24px;
        font-size: 18px;
        vertical-align: middle;
    }
    .description{
    font-size: 16px;
    }
    .travel-tips{
        // position: relative;
        // overflow: hidden;
        width:776px;
        font-size: 33px;
        zoom: 0.4213;
        img{
            display: block !important;
        }
    }
    .title{
        // position: absolute;
        height:200px;
        width:100%;
        background-color: red;
        // left:0;
        // bottom:0;
        // transform: translateY(100%)
    }
}
</style>
<style lang="scss">
// .description{
//     font-size: 16px;
// }
// .travel-tips{
//     position: relative;
//     overflow: hidden;
//     width:776px;
//     font-size: 33px;
//     transform: scale(0.4213);
//     transform-origin: 0% 0%;
//     font{
//         font-size: 33px;
//     }
// }
</style>