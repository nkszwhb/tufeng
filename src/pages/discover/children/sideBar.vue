<template>
  <div class="sideBar">
     <div class="left">
         <app-scroll class="content scroll-left">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item class="side-left" v-for="(item,index) in list" :title=item.name @click="btnAction(index)"/>
            </van-sidebar>
         </app-scroll>
     </div>
     <sideBarList :sideBarItem="list[this.selectedIndex]" :id="selectedIndex" :listId="list.cid"/>
</div>
</template>

<script>

import sideBarList from './sideBarList'
export default {
    data() {
        return {
            activeKey: 0,
            selectedIndex:0
        };
    },
    components: {
        sideBarList
    },
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    methods:{
        btnAction(index){
            this.selectedIndex = index;
            // console.log(this.selectedIndex);   
        }
    }
}
</script>

<style scoped lang="scss">
.sideBar{
    .left{
        background-color: #999;
        width:27%;
        .content{
            top:0;
            .side-left{
                width:102px;
                height:48px;
                padding:0 0px 0 0px;
                display: flex;
                justify-content: center;
                align-items:center;
                color: #363636;
                font-size: 16px;
                box-sizing: border-box;
                text-align:center;
           }
        }
        .scroll-left{
            width:27%;
        }
    }
}
</style>