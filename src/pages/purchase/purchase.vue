<template>
	<div class="purchase">
		<app-header title="购买" :hasBack="true" />
		<div class="center">

			<ShopCard :personNum='personNum' :orderData='orderData' />

			<van-collapse v-model="activeName" accordion>
				<van-collapse-item title="出行时间" name="1">
					<div slot="value">{{time}}</div>
					<div slot="default">
						<van-datetime-picker @cancel="cancelPickTime" @confirm="confirmPickTime" title="出行时间" :visible-item-count=3
						 :swipe-duration=2000 v-model="currentDate" :min-date="minDate" :max-date="maxDate" type="date" />
					</div>
				</van-collapse-item>
				<van-collapse-item title="出行人数" name="2">
					<div slot="value">{{personNum}}人</div>
					<div slot="default">
						<van-cell title="请选择人数">
							<template slot="default">
								<van-stepper v-model="personNum" min="1" max="10" />
							</template>
						</van-cell>
					</div>
				</van-collapse-item>

				<!-- //添加出行人 -->
				<van-collapse-item title="出行人信息" name="3">
					<div slot="default">
						<p>联系人</p>
						<van-contact-card :type="cardType" :name="currentContact.name" :tel="currentContact.tel" @click="showList = true" />
						<p class="contact-title" v-if="list.length != 0">出行人</p>
						<van-swipe-cell v-for="contactMsg in list" :name="contactMsg.id" :key="contactMsg.id" :on-close="onClose">
							<van-contact-card type="edit" :name="contactMsg.name" :tel="contactMsg.tel" :editable="false" />
							<template slot="right">
								<van-button square type="danger" text="删除" class="del-contact" />
							</template>
						</van-swipe-cell>
					</div>
				</van-collapse-item>
			</van-collapse>

		</div>
		<div class="purchase-btn" @click="addOrder">
			订购
		</div>

		<van-popup v-model="showList" position="bottom">
			<van-contact-list v-model="chosenContactId" :list="list" @add="onAdd" @edit="onEdit" @select="onSelect" />
		</van-popup>

		<van-popup v-model="showEdit" position="bottom">
			<van-contact-edit :contact-info="editingContact" :is-edit="isEdit" @save="onSave" @delete="onDelete" />
		</van-popup>


	</div>
</template>

<script>
	import Http from '../../utils/Http'
	import api from '../../utils/api'
	import {
		Dialog,
		Toast
	} from 'vant';
	import ShopCard from './children/ShopCard'
	export default {
		data() {
			return {
				currentDate: '',
				minDate: new Date(),
				maxDate: new Date('2023', '10', '31'),
				personNum: 1,
				activeName: '4',
				chosenContactId: null,
				showList: false,
				editingContact: {},
				showEdit: false,
				isEdit: false,
				list: [],
				orderData: {}
			}
		},
		components: {
			ShopCard
		},
		computed: {
			cardType() {
				return this.chosenContactId !== null ? 'edit' : 'add';
			},
			showCom() {
				return this.$store.state.isLogin
			},
			currentContact() {
				const id = this.chosenContactId;
				return id !== null ? this.list.filter(item => item.id === id)[0] : {};
			},
			time() {
				if (this.currentDate == '') {
					return '请选择出行时间';
				} else {
					return this.currentDate.toLocaleDateString();
				}
			}
		},
		created() {
			let orderData = JSON.parse(sessionStorage.getItem('orderData'));
			if (orderData == null) {
				Toast('获取数据错误！');
				this.$router.replace('/home');
			}
			this.orderData = orderData;
		},
		methods: {
			//取消时间选择
			cancelPickTime() {
				this.currentDate = '';
				this.activeName = '';
			},
			//确认时间选择
			confirmPickTime() {
				this.activeName = '2';
			},
			// 添加联系人
			onAdd() {
				this.editingContact = {
					id: this.list.length
				};
				this.isEdit = false;
				this.showEdit = true;
			},

			// 编辑联系人
			onEdit(item) {
				this.isEdit = true;
				this.showEdit = true;
				this.editingContact = item;
			},

			// 选中联系人
			onSelect() {
				this.showList = false;
			},

			// 保存联系人
			onSave(info) {
				this.showEdit = false;
				this.showList = false;

				if (this.isEdit) {
					this.list = this.list.map(item => item.id === info.id ? info : item);
				} else {
					this.list.push(info);
				}
				this.chosenContactId = info.id;
			},

			// 删除联系人
			onDelete(info) {
				this.showEdit = false;
				this.list = this.list.filter(item => item.id !== info.id);
				if (this.chosenContactId === info.id) {
					this.chosenContactId = null;
				}
			},
			// clickPosition 表示关闭时点击的位置
			onClose(clickPosition, instance, detail) {
				console.log(detail);
				switch (clickPosition) {
					case 'left':
					case 'cell':
					case 'outside':
						instance.close();
						break;
					case 'right':
						Dialog.confirm({
							message: '确定删除吗？'
						}).then(() => {
							this.list = this.list.filter(item => item.id !== detail.name);
							if (this.chosenContactId === detail.name) {
								this.chosenContactId = null;
							}
						}).catch(() => {
							instance.close();
						});
						break;
				}
			},
			//添加订单
			async addOrder() {
				if(!this.showCom){
					Toast('你还没有登录！');
					this.$router.push('/login');
					return;
				}
				if (this.currentDate == '') {
					Toast('请选择出行时间');
					return;
				} else if (this.list.length == 0) {
					Toast('请添加出行人信息');
					return;
				} else if (this.personNum != this.list.length) {
					Toast('出行人数信息数和人数一致！');
					return;
				}
				let orderid = (new Date).toLocaleDateString().split('/').join('') + (parseInt(Math.random()*99999999)+100000000); 
				let OrderMsg = {
					orderid,
					...this.orderData,
					traveltime: this.currentDate,
					personNum: this.personNum,
					userList: this.list
				}
				let result = await Http.post(api.ORDER_ADD,OrderMsg);
				if(result.data.code == 0){
					Toast('订购成功！');
					this.$router.push('/order');
				}else{
					Toast('订购失败，请重试');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.purchase {
		position: absolute;
		height: 100%;
		width: 100%;
		background: #fff;
		z-index: 100;
		display: flex;
		flex-direction: column;

		.center {
			width: 100%;
			margin-top: 49px;
			flex: 1;
			overflow: auto;
		}

		.contact-title {
			margin-top: 20px;
		}

		.del-contact {
			height: 100%;
		}

		.purchase-btn {
			height: 39px;
			width: 330px;
			align-self: center;
			box-sizing: border-box;
			border-radius: 20px;
			margin: 5px 0;
			background: #0090F2;
			color: #fff;
			line-height: 39px;
			text-align: center;
			font-size: 20px;
		}

	}
</style>
