<template>
  <div class="introduction">
      <span class="price">￥{{data.price}}起</span>
      <div class="product-detail-base">
          <div class="product-name">
              {{data.productName}}
          </div>
          <div class="tags">
              <div class="tag-item" v-for="(item,index) in data.tags">
                  {{item.name}}
              </div>
          </div>
          <div class="tours-people-num">
              {{data.orderNum}}人已出游
          </div>
          <div class="discount-tags">
             <span>优惠</span>
             <div class="discount-tags-items">
                 <div class="discount-tags-item">
                     {{data.discountTagsName}}
                 </div>
             </div>
             <span class="tag-lead">&gt;</span>
          </div>
          <div class="product-detail-base">
              <div class="md-detail-city">
                  <div class="product-city-group">
                      <div class="product-city-name">
                          <span>出发</span>
                          <span class="start-city">
                              <i v-for="item in data.startCity">
                                 {{item.startCityItem}}
                             </i>
                          </span>
                      </div>
                      <div class="product-city-name">
                          <span>结束</span>
                          <span class="end-city">
                             <i v-for="item in data.endCity">
                                 {{item.endCityItem}}
                             </i>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="serve-language">
            <span class="first">行程</span>
            <span style="color: #2B88ED; width: 30%" >
					{{data.days}}天
			</span>
            <span class="second">景点</span>
            <span style="color: #2B88ED; width: 30%" >
					{{data.attractions}}个景点
			</span>
          </div>
          <div class="serve-language">
            <span class="first">自费</span>
            <span style="color: #2B88ED; width: 30%" >
					{{data.selfPay}}项自费
			</span>
            <span class="second">服务语言</span>
            <span style="color: #2B88ED; width: 30%" >
				<i v-for="item in data.languageData">
                    {{item.languageItem}}
                </i>
			</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        data:{
            type:Object,
            required: true,
            default:()=>({endCity:[]})
        }
    },
    created(){
        // console.log(this.data.producInfo);
        
    }
}
</script>

<style scoped lang="scss">
.introduction{
    margin: 0 24px;
    .price{
        font-size: 18px;
        line-height: 22px;
        width:100%;
        height:22px;
        color:#fc8517;
        font-weight: bold;
        display: inline-block;
        text-align: end;
        margin-top:10px;
    }
    .product-detail-base{
        padding: 19px 0 0;
        .product-name{
            font-size: 20px;
            line-height: 28px;
            font-weight: 700;
            margin-bottom: 16px;
        }
        .tags{
            font-size: 14px;
            overflow: hidden;
            position: relative;
            padding-right: 12px;
            margin-bottom: 18px;
            .tag-item{
                float: left;
                line-height: 18px;
                color: #3eb798;
                border: 1px solid #3eb798;
                border-radius: 2px;
                margin-right: 7px;
                margin-bottom: 6px;
                padding: 0 6px;
            }
        }
        .tours-people-num{
            height:20px;
            width:100%;
            font-size: 14px;
            color:#b5b5b5;
        }
        .discount-tags{
            margin-top: 10px;
            width:100%;
            span{
                display: inline-block;
                color: #b6b6b6;
                margin-top: 2px;
                vertical-align: top;
                font-size: 14px;
                height:20px;
                line-height: 20px;
            }
            .discount-tags-items{
                width: 82%;
                height: 20px;
                display: inline-block;
                margin: 2px 0 0 12px;
                .discount-tags-item{
                    display: inline-block;
                    height: 20px;
                    line-height: 18px;
                    padding-left: 3px;
                    padding-right: 3px;
                    margin-right: 4px;
                    color: #F95D42;
                    border-radius: 2px;
                    border: 1px solid #F95D42;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    max-width: 100%;
                }
            }
            .tag-lead{
                right: 24px;
                display: inline-block;
                font-size: 20px;
                color: #464646;
                position: absolute;
                margin-top: 2px;
                vertical-align: top;
                transform: scaleY(1.5);
            }
        }
        .product-detail-base{
            padding: 19px 0 0;
            .md-detail-city{
                font-size: 16px;
                line-height: 24px;
                color: #767676;
                display: flex;
                .product-city-group{
                    color: #b6b6b6;
                    font-size: 14px;
                    .product-city-name{
                        width: 100%;
                        display: flex;
                        text-align: center;
                        margin-bottom: 24px;
                        span{
                            display: block;
                        }
                        .start-city{
                            text-align: left;
                            flex: 1;
                            padding-left:12px;
                            color: #363636;
                        }
                        .end-city{
                            text-align: left;
                            flex: 1;
                            padding-left:12px;
                            color: #363636;
                        }
                    }
                }
            }
        }
        .serve-language{
            margin-bottom: 24px;
            span{
                display: inline-block;
                color: #b6b6b6;
                margin-top: 2px;
                vertical-align: top;
                margin-right: 10px;
                font-size: 14px;
            }
        }
    }

}
</style>