<template>
  <div class="sideBarList">
      <div class="found-city">
          <span class="city-item" v-for="(item,index) in sideBarItem.children" :class="{active: index===selectedIndex}" @click="btnAction(index)">{{item.name}} </span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            selectedIndex:0,
            sideBarData:[]
        }
    },
    props: {
        sideBarItem: {
            type: Object,
            required: true,
            default: ()=>({chileren:[]})
        },
        id:{
            type:Number,
            required:true
        },
        listId:{
            type:Number,
            required:true,
            default:()=>0
        }
    },
   methods:{
       btnAction(index){
           this.selectedIndex = index;
       }    
   },
}
</script>

<style scoped lang="scss">
.sideBarList{

    width:73%;
    height:100%;
    position: absolute;
    top:0;
    right:0;
    // overflow-y: auto;
    .found-city{
        width: 100%;
        height: 100%;
        padding: 0px 24px 18px 15px;
        overflow: scroll;
		box-sizing: border-box;
        .city-item{
            display: block;
            width: 108px;
            height: 36px;
            line-height: 36px;
            font-size: 16px;
            margin-top:16px;
            background-color: #eee;
            border-radius: 2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            float: left;
        }
        .city-item:nth-child(2n){
            margin-left:12px;
        }
        .active{
            color:#ff5400;
        }
    }
}
</style>