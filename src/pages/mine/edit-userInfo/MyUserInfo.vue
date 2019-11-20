<template>
	<div class="myUserInfo">
		<app-header title="我的账户" :hasBack="true" />
		<div class="content">
			<van-cell class="cell" :border="true" title="头像" is-link size="large" value="" />
			<van-cell class="cell" :border="true" title="昵称" is-link size="large" :value="nickname" @click="showNickName" />
			<van-cell class="cell" :border="true" title="姓名" is-link size="large" :value="name" @click="showName" />
			<van-cell class="cell" :border="true" title="性别" is-link size="large" :value="sex" @click="showSex" />
			<van-cell class="cell" :border="true" title="出生日期" is-link size="large" :value="birthday" @click="showBirthday" />
			<van-cell class="cell" :border="true" title="手机" is-link size="large" :value="phone_num" @click="showPhoneNum" />
			<van-cell class="cell" :border="true" title="邮箱" is-link size="large" :value="email" @click="showEmail" />
			<van-cell class="cell" :border="true" title="修改密码" is-link size="large" value="" @click="showPsd" />
		</div>
		
		<van-dialog v-model="shownickname" title="修改昵称" show-cancel-button @confirm="update({type: 'nickname', newNickName})">
			<van-field class="field" v-model="newNickName" placeholder="请输入新昵称" />
		</van-dialog>
		
		<van-dialog v-model="showname" title="修改姓名" show-cancel-button @confirm="update({type: 'name', newName})">
			<van-field class="field" v-model="newName" placeholder="请输入姓名" />
		</van-dialog>
		
		<van-dialog v-model="showsex" title="选择性别" show-cancel-button @confirm="update({type: 'sex', newSex})">
			<van-radio-group class="sex-wrap" v-model="newSex">
				<van-radio name="0">男</van-radio>
				<van-radio name="1">女</van-radio>
			</van-radio-group>
		</van-dialog>
		
		<van-dialog v-model="showbirthday" title="修改出生日期" show-cancel-button @confirm="update({type: 'sex', newBirthday})">
			<van-datetime-picker
			  v-model="newBirthday"
			  type="date"
			  :min-date="minDate"
			  :max-date="maxDate"
			  :show-toolbar="false"
			/>
		</van-dialog>
		

		
		<van-dialog v-model="showphonenum" title="修改手机号" show-cancel-button @confirm="update({type: 'phonenum', newPhoneNum})">
			<van-field class="field" type="number" v-model="newPhoneNum" placeholder="请输入手机号" />
		</van-dialog>
		
		<van-dialog v-model="showemail" title="修改邮箱" show-cancel-button @confirm="update({type: 'email', newEmail})">
			<van-field v-model="newEmail" placeholder="请输入邮箱" />
		</van-dialog>
		
		<van-dialog v-model="showpsd" title="修改密码" show-cancel-button @confirm="update({type: 'psd', oldPsd,newPsd,newPsd2})">
			<van-field class="field" v-model="oldPsd" placeholder="请输入新的昵称" />
			<van-field class="field" v-model="newPsd" placeholder="请输入新的昵称" />
			<van-field class="field" v-model="newPsd2" placeholder="请输入新的昵称" />
		</van-dialog>
		
	</div>
</template>

<script>
	import {
		Dialog
	} from 'vant';
	export default {
		data() {
			return {
				shownickname: false,
				showname: false,
				showsex: false,
				showbirthday: false,
				showphonenum: false,
				showemail: false,
				showpsd: false,
				
				minDate:new Date(1900,1,1),
				maxDate: new Date(),
				
				nickname: '',
				name: '',
				sex: '',
				birthday: '',
				phone_num: '',
				email: '',
				
				newNickName: '',
				newName: '',
				newSex: '',
				newBirthday: new Date(1970,1,1),
				newPhoneNum: '',
				newEmail:'',
				oldPsd: '',
				newPsd:'',
				newPsd2: ''
			}
		},
		methods: {
			showNickName() {
				this.shownickname = true;
			},
			showName(){
				this.showname = true;
			},
			showSex(){
				this.showsex = true;
			},
			showBirthday(){
				this.showbirthday = true;
			},
			showPhoneNum(){
				this.showphonenum = true;
			},
			showEmail(){
				this.showemail = true;
			},
			showPsd(){
				this.showpsd = true;
			},
			update(data){
				console.log(data);
				switch(data.type){
					case 'nickname':
							
						break;
					case 'name':
					
						break;
				}
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
			flex: 1;

			.cell {
				height: 60px;
				// border-bottom: 1px solid #222;
			}
		}
		.sex-wrap{
			padding: 10px 20px ;
			display: flex;
			justify-content: space-around;
		}
		.field{
			padding: 5px 30px;
		}
	}
</style>
