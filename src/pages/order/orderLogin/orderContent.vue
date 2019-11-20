<template>
  <ul>
      <li v-for="(item,index) in orderList" >
		  <div class="title">
			  <span class="order-id">{{item.orderid}}</span>
			  <span class="order-status">待支付</span>
		  </div>
		  	<div class="order-content">
			  <div class="img">
				  <img :src="item.pic" alt="">
			  </div>
			  <div class="order-title">
				  <h2 class="multiple-ellipsis">{{item.title}}</h2>
				  <div class="select-data">
					  {{item.traveltime}}出发
				  </div>
			  </div>
		  	</div>
		  	<div class="pay">
				实付款:<span>￥{{item.price}}</span>
			</div>
			<div class="button" @click="payAction(item.orderid)">
				<span>{{payTxt(item.status)}}</span>
			</div>
      </li>
    </ul>
</template>

<script>
export default {
    props:{
        list:{
            type: Array,
            required: true,
            default:()=>[]
        }
    }
}
</script>

<style>

</style>