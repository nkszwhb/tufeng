<template>
    <div class="travel-detail">
        <h1 class="title">行程详情</h1>
        <div class="travel-items" v-for="(item,index) in itineraryItem">
            <div class="fold-item-head">
                <h2>D{{index+1}}</h2>
                <div class="item-title">{{item.title}}</div>
            </div>
            <div class="desc">
                <van-icon name="notes-o" />概述
                 <div class="item-main" v-html="item.summary"></div>
            </div>
           
            <div class="hotel">
                <van-icon name="home-o" />酒店
                <div class="hotel-name" v-for="list in item.hotel">
                    <span>{{list}}</span>
                </div>
            </div>
            
            <div class="dinner">
                <van-icon name="birthday-cake-o" />餐食
                <h2 v-for="list in item.meal">
                    <span v-html="list"></span>
                </h2>
            </div>

            <div class="notice">
                <van-icon name="bullhorn-o" /> 温馨提示
                <h2 v-html="item.tips"></h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        itineraryItem:{
            type:Array,
            required: true,
            default:()=>[]
        }
    },
}
</script>

<style scoped lang="scss">
.travel-detail{
    width:100%;
    box-sizing: border-box;
    padding: 32px 19px;
    border-top:8px solid #ddd;
    .title{
        font-size: 18px;
        font-weight: 700;
    }
    .travel-items{
       .fold-item-head{
            padding-bottom: 32px;
            padding-top: 32px;
            h2{
                font-size: 20px;
                font-weight: 700;
            }
            .item-title{
                font-size: 18px;
                margin-top: 16px;
            }
       }
       .desc{
            font-size: 18px;
            margin-bottom: 24px;
            .van-icon{
                margin-right:15px;
                margin-bottom:24px;
            } 
       }
       .item-main{
           font-size: 14px;
       }
       .hotel{
            font-size: 18px;
            margin-bottom: 24px;
            .van-icon{
                margin-right:15px;
                margin-bottom:24px;
            } 

            .hotel-name{
                display: block;
                padding-bottom:10px;
            }
       }
       .dinner{
           font-size: 18px;
            .van-icon{
                margin-right:15px;
                margin-bottom:24px;
            } 
            h2{
                color: #767676;
                font-size: 16px;
                line-height:20px;
            }
       }
       .notice{
           margin-top:20px;
           font-size: 18px;
            .van-icon{
                margin-right:15px;
                margin-bottom:24px;
            } 
            h2{
                color: #767676;
                font-size: 16px;
                line-height:20px;
            }
       }
    }
}
</style>