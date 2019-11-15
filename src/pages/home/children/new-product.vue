<template>
  <div class="newProduct">
      <div class="recently-viewed">
          <div class="mode-title">
              <h3>新品上线</h3>
              <div class="view-more">
                  <span>查看更多></span>
              </div>
          </div>
          <div class="content-item">
              <div class="content-list">
                  <div class="content-img">
                      <img src="//tffimg.tff.bz/6e/42/258/566/4114555c69377df26238d4.jpg?imageView2/1/w/660/h/440/q/75/format/jpg" alt="">
                  </div>
                  <div class="content-info">
                      <div class="product-name multiple-ellipsis">
                          &lt;9日&gt;【洛杉矶进出 一路精致小团】美西三城游：洛杉矶、旧金山、拉斯维加斯+仙境优胜美地+一号公路旅行+锡安国家公园+马蹄湾+羚羊峡谷
                      </div>
                      <div class="price">
                          <span class="value">￥9550</span>
                          <span class="value-qi">起</span>
                      </div>
                  </div>
              </div>
              <div class="content-list">
                  <div class="content-img">
                      <img src="//tffimg.tff.bz/da/84/0d0/ad8/86420db763e268dd5a0305.jpg?imageView2/1/w/660/h/440/q/75/format/jpg" alt="">
                  </div>
                  <div class="content-info">
                      <div class="product-name multiple-ellipsis">
                          【坐着房车轻松玩转巨环】（7日）：大峡谷国家公园+纪念碑谷+羚羊谷+布莱斯国家公园+马蹄湾+鲍威尔湖+七彩巨石（含全程国家公园景点门票，提供送机，私家包团，洛杉矶往返）
                      </div>
                      <div class="price">
                          <span class="value">￥7376</span>
                          <span class="value-qi">起</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.recently-viewed{
    padding: 0 24px;
    .mode-title{        
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
        .view-more{
            span{
                font-size: 14px;
                color: #0090F2;
                // margin-right: -6px;
            }
        }
    }
    .content-item{       
        display: flex;
        justify-content: space-between;
        .content-list{
            width: 47%;
            padding: 0;
            box-shadow: 0 2px 10px #e8e0e0;
            border-radius: 4px;
            position: relative;
            height: auto;
            overflow: hidden;
            .content-img{
                width: 100%;
                border-radius: 4px;
                background-image: url(https://cdn.static.tff.bz/h5mobile/assets/img/lazy-list.png);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                img{
                    width:100%;
                }
            }
            .content-info{
                .product-name{
                    padding: 0 10px;
                    margin: 10px 0;
                    font-size: 15px;
                    font-weight: 700;
                }
                .price{
                    height: 34px;
                    line-height:34px;
                    padding: 0 0 10px;
                    font-size: 12px;
                    text-align: right;
                    color: #fb5f10;
                    display: block;
                    width:100%;
                    min-height:30px;
                    .value{
                        font-size: 20px;
                        font-weight: 700;
                        display: inline-block;
                        padding-right:4px;
                    }
                    .value-qi{
                        color: #363636;
                        font-size: 13px;
                        font-weight: 400;
                    }
                }
            }
        }
    }
}
</style>