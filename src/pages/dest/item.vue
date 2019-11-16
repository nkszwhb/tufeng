<template>
  <div class="dest-item" @click="localAction(itemData.id)">
      <img :src="itemData.imgage" alt="">
      <p class="name multiple-ellipsis">{{itemData.name}}</p>
      <p class="price"><span>￥{{itemData.price}}</span>起</p>
  </div>
</template>

<script>
export default {
  // name:'one',
  props:{
    itemData:{},
    id:String,
    imgage: String,
    name:String,
    price :Number,
  },
  methods:{
		localAction(id){
			this.$router.push(`/detail/${id}`)
		},
  }
}
</script>

<style lang="scss" scoped>
.dest-item{
  width: 47%;
  border-radius: 4px;
  box-shadow: 0 2px 10px #e8e0e0;
  margin:0 0 22px 0;
  img{
    width: 100%;
    height: 106px;
    border-radius: 4px 4px 0 0;

  }
  .name{
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
    padding: 0 5px;
    line-height: 20px;
  }
  .price{
    float: right;
    margin: 5% 5% 10% 0;
    span{
      font-size: 20px;
      color: #FB5F10;
      font-weight: bold;
      margin-right: 5px;
    }
  }
}
</style>>

