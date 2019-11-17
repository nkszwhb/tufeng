<template>
	<div class="purchase">
		<app-header title="购买" :hasBack="true" />
		<div class="center">

			<ShopCard />

			<van-collapse v-model="activeName" accordion>
				<van-collapse-item title="出行时间" name="1">
					<div slot="value">请选择出行时间</div>
					<div slot="default">
						<van-datetime-picker title="出行时间" :visible-item-count=3 :swipe-duration=2000 v-model="currentDate" :min-date="minDate" :max-date="maxDate" type="date" />
					</div>
				</van-collapse-item>
				<van-collapse-item title="出行人数" name="2">
					<div slot="value">请选择出行人数</div>
					<div slot="default">
						<van-cell title="请选择人数">
							<template slot="default">
								<van-stepper v-model="personNum" min="1" max="10" />
							</template>
						</van-cell>
					</div>
				</van-collapse-item>
				
				<!-- //添加出行人 -->
				<van-collapse-item title="出行人信息" name="4">
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
		<div class="purchase-btn">
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
	import {
		Dialog
	} from 'vant';
	import ShopCard from './children/ShopCard'
	export default {
		data() {
			return {
				currentDate: '',
				minDate: new Date(),
				maxDate: new Date('2023','10','31'),
				personNum: 1,
				activeName: '4',
				chosenContactId: null,
				showList: false,
				editingContact: {},
				showEdit: false,
				isEdit: false,
				list: []
			}
		},
		components: {
			ShopCard
		},
		computed: {
			cardType() {
				return this.chosenContactId !== null ? 'edit' : 'add';
			},

			currentContact() {
				const id = this.chosenContactId;
				return id !== null ? this.list.filter(item => item.id === id)[0] : {};
			}
		},
		methods: {
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
			onClose(clickPosition, instance,detail) {
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
