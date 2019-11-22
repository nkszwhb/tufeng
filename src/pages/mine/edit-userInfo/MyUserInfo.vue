<template>
	<div class="myUserInfo">
		<app-header title="我的账户" :hasBack="true" />
		<div class="content">
			<van-cell class="cell" title="头像" is-link size="large" value="" />
			<van-cell class="cell" title="昵称" is-link size="large" :value="nickname_txt" @click="showNickName" />
			<van-cell class="cell" title="姓名" is-link size="large" :value="name_txt" @click="showName" />
			<van-cell class="cell" title="性别" is-link size="large" :value="sex_txt" @click="showSex" />
			<van-cell class="cell" title="出生日期" is-link size="large" :value="birthday_txt" @click="showBirthday" />
			<van-cell class="cell" title="手机" is-link size="large" :value="phonenum_txt" @click="showPhonenum" />
			<van-cell class="cell" title="邮箱" is-link size="large" :value="email_txt" @click="showEmail" />
			<van-cell class="cell" title="修改密码" is-link size="large" @click="showPsw" />

		</div>

		<van-dialog v-model="shownickname" title="修改昵称" @confirm="update({type: 'nickname',nickname})" show-cancel-button>
			<van-field v-model="nickname" placeholder="请输入昵称" />
		</van-dialog>

		<van-dialog v-model="showname" title="修改姓名"  @confirm="update({type: 'name',name})" show-cancel-button>
			<van-field v-model="name" placeholder="请输入姓名" />
		</van-dialog>

		<van-dialog v-model="showsex" title="选择性别" @confirm="update({type: 'sex',sex})" show-cancel-button>
			<van-radio-group v-model="sex">
				<van-radio name="0">男</van-radio>
				<van-radio name="1">女</van-radio>
			</van-radio-group>
		</van-dialog>
		
		<van-dialog v-model="showbirthday" @confirm="update({type: 'birthday',birthday})" title="出生日期" show-cancel-button>
			<van-datetime-picker
			  v-model="birthday"
			  :show-toolbar="false"
			  type="date"
			  :min-date="minDate"
			  :max-date="maxData"
			/>
		</van-dialog>
		
		<van-dialog v-model="showphonenum" @confirm="update({type: 'phonenum',phonenum})" title="修改手机号" show-cancel-button>
			<van-field v-model="phonenum" placeholder="请输入手机号" />
		</van-dialog>
		
		<van-dialog v-model="showemail" @confirm="update({type: 'email',email})" title="修改邮箱" show-cancel-button>
			<van-field v-model="email" placeholder="请输入邮箱" />
		</van-dialog>
		
		<van-dialog v-model="showpsw" @confirm="update({type: 'psw',psw,newpsw,newpsw2})" title="修改密码" show-cancel-button>
			<van-field v-model="psw" placeholder="请输入旧密码" />
			<van-field v-model="newpsw" placeholder="请输入新密码" />
			<van-field v-model="newpsw2" placeholder="请输入新密码" />
		</van-dialog>

	</div>


</template>

<script>
	import {Toast} from 'vant'
	import {mapState} from 'vuex'
	
	import Http from '../../../utils/Http'
	import api from '../../../utils/api'
	export default {
		data() {
			return {
				nickname_txt: '',
				name_txt: '',
				sex_txt: '',
				birthday_txt: '',
				phonenum_txt: '',
				email_txt: '',

				shownickname: false,
				showname: false,
				showsex: false,
				showbirthday: false,
				showphonenum: false,
				showemail: false,
				showpsw: false,
				
				minDate: new Date(1900,0,1),
				maxData: new Date(),

				nickname: '',
				name: '',
				sex: -1,
				birthday: new Date(1970,0,1),
				phonenum: '',
				email: '',
				psw: '',
				newpsw: '',
				newpsw2: ''
			}
		},
		computed:{
			...mapState({
				userinfo: state=>state.PersonInfo.userinfo,
				data: state=>state.PersonInfo.data,
				result: state=>state.PersonInfo.result
			})
		},
		methods: {
			showNickName() {
				this.shownickname = true;
			},
			showName() {
				this.showname = true;
			},
			showSex() {
				this.showsex = true;
			},
			showBirthday() {
				this.showbirthday = true;
			},
			showPhonenum() {
				this.showphonenum = true;
			},
			showEmail() {
				this.showemail = true;
			},
			showPsw() {
				this.showpsw = true;
			},
			async update(data) {
				switch (data.type){
					case 'nickname':
					case 'name':
						// console.log(data);
						if((data.nickname && data.nickname.length == 0) || (data.name && data.name.length == 0) ){
							Toast('输入不能为空');
							return;
						}
						break;
					case 'sex':
						if(data.sex != 0 || data.sex != 1){
							Toast('请选择性别');
							return;
						}
						break;
					case 'phonenum': 
						if(!(/^1[3456789]\d{9}$/.test(data.phonenum))){
							Toast('请输入正确的手机号');
							return;
						}
						break;
					case 'email': 
						if(!(/^[A-Za-z\d]+[A-Za-z\d\-_\.]*@([A-Za-z\d]+[A-Za-z\d\-]*\.)+[A-Za-z]{2,4}$/.test(data.email))){
							Toast('请输入正确的邮箱');
							return;
						}
						break;
					case 'psw':
						if(data.newpsw != data.newpsw2){
							Toast('两次输入的密码不一致');
							return;
						}
						break;
					default:
						break;
				}

				this.$store.dispatch('PersonInfo/updateUserInfo', data);
			}
		},

	}
</script>

<style lang="scss" scoped>
	.myUserInfo {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		background: #fff;
		z-index: 1000;

		// display: flex;
		// flex-direction: column;
		.content {
			position: absolute;
			top: 45px;
			bottom: 0;
			left: 0;
			width: 100%;
			// flex: 1;

			.cell {
				height: 60px;
				// border-bottom: 1px solid #222;

			}
		}
	}
</style>
