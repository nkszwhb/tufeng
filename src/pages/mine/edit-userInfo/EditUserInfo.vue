<template>
  <div class="edit page subpage">
        <app-header title="设置" :hasBack="true"/>
        <app-scroll class="content">
            <div class="app-base-info">
                <img src="https://m.toursforfun.com/img/common/icon.png" alt="">
                <div class="logo text-h-center">途风旅游</div>
            </div>
            <div class="app-settings">
                <van-cell-group>
                    <van-cell class="cell-item" title="系统货币" :value="showCom ? '人民币(￥)' : '请登录'"  is-link/>
                    <van-cell title="我的账户" :value="showCom ? '修改密码、手机号' : '请登录'" is-link @click="toEdit"/>
                     <van-cell title="关于我们" is-link />
                </van-cell-group>
            </div>
        </app-scroll>
        <div class="logout border-top" v-if="showCom">
            <h1 @click="logoutAction">退出登录</h1>
        </div>
  </div>
</template>

<script>
import { Cell, CellGroup,Dialog}from 'vant';
import mineService from '../../../services/mineService'

export default {
    components: {
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        // [Dialog.Component.name]: Dialog.Component
    },
    computed:{
		 showCom(){
	      return this.$store.state.isLogin
	    }
	},
    methods:{
        logoutAction(){
            Dialog.confirm({
            title: '退出确认',
            message: '您确定退出当前帐号么?'
            }).then(() => {
                console.log('退出成功');
                let result =  mineService.requestOutLogin();
                this.$store.dispatch('handleLogin',false);
                this.$router.push('/mine/editUserInfo');
            }).catch(() => {
            // on cancel
            });
        },
        toEdit(){
            if(this.showCom){
                this.$router.push('/mine/myUserInfo');
            }else{
                 this.$router.replace(`/login`);
            }
        }
    }
}
</script>

<style scoped lang="scss">
.edit{
    // position: relative;
   .content{
       bottom:49px;
       .app-base-info{
            img{
                display: block;
                margin: 14% auto 4.5%;
                width: 21.5%;
                border-radius: 2px;
            }
            .logo{
                font-size: 14px;
            }
       }
       .app-settings{
           padding: 16px 24px;
           .cell-item{
               height:50px;
           }
       }
   }
   .logout{
       position: absolute;
       bottom:0;
       left:0;
       width:100%;
       height:49px;
       background-color: #fff;
       h1{
           width:100%;
           height:49px;
           text-align: center;
           line-height: 49px;
           font-size: 18px;
           font-weight: bold;
            color: #fb5f10;
       }
   }
}

</style>