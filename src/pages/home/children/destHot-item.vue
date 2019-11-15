<template>
    <div class="dest-hot-item">
        <img v-lazy="data.image">
        <div class="hot-dest-name">
            <span>{{data.title}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    created(){
        // console.log(this.data);
        
    }

}
</script>

<style scoped lang="scss">
.dest-hot-item{
    position: relative;
    display: inline-block;
    font-size: 14px;
    letter-spacing: normal;
    word-spacing: normal;
    // zoom: 1;
    margin-right: 10px;
    width: 105px;
    height: 139px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background: #989090;
    }
    .hot-dest-name{
        position: absolute;
        bottom: 0;
        color: #fff;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        background: rgba(0,0,0,.4);
        height: 37px;
        line-height: 37px;
        text-indent: 10px;
        border-radius: 0 0 4px 4px;
    }
}
</style>