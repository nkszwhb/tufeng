<template>
  <div class="introduction">
      <span class="price">￥{{data.price}}起</span>
  </div>
</template>

<script>
export default {
    props:{
        data:{
            type:Object,
            required: true,
            // default:()=>({})
        }
    },
    created(){
        // console.log(this.infoList);
        
    }
}
</script>

<style scoped lang="scss">
.price{
    font-size: 18px;
    line-height: 22px;
    width:100%;
    height:22px;
    color:#fc8517;
    font-weight: bold;
    display: inline-block;
    text-align: end;
    padding-right:20px;
    box-sizing: border-box;
}
</style>