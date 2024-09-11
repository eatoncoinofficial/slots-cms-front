<template>
	<div class="form-wrapper">
		<AText :attributes="titleSettings">{{ t('SUBSCRIBE_NEWSLETTER') }}</AText>
		<div class="form_wrapper">
			<input :placeholder="t('YOUR_EMAIL')" v-model="inputValue" class="input" />
			<div class="btn_wrapper">
				<AButton :attributes="btnSettings" :disabled="isDisabled" title="Form Submit" @onClick="send">{{ t('SIGN_UP') }}</AButton>
			</div>
		</div>
		<div class="form_rules">
			<div class="rules_check_box" :class="{active: isConfirm}" @click="confirmRules"></div>
			<AText :attributes="formRulesSettings" @onClick="confirmRules">{{ t('SUBSCRIBE_RULES') }}</AText>
		</div>
	</div>
</template>

<script>
import components from '~/mixins/components'
export default {
	name: 'footer-form',
	mixins: [components],
	data: () => {
		return {
			btnSettings: {
				bg: 'calgary',
				color: 'cucuta',
				borderRadius: 's',
				weight: 'semi-bold',
				class: 'send_btn'
			},
			titleSettings: {
				color: 'cairo',
				weight: 'bold',
				size: 'x-large',
				class: 'form_title'
			},
			formRulesSettings: {
				color: 'cordoba',
				weight: 'regular',
				size: 'small',
				class: 'accept_text'
			},
			isConfirm: false,
			inputValue: ''
		}
	},
	methods: {
		confirmRules() {
			this.isConfirm = !this.isConfirm
		},
		send() {
			this.isConfirm = false
			const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx52FeSYnc7C8K2JJTwReJC4BecveKFSxay1hE3mNkY3uzN38R0BzO0MfIcY10y5Tl5/exec'
			const formData = new FormData();
			formData.append('Data', new Intl.DateTimeFormat('en-Us').format(new Date()));
			formData.append('Email', this.inputValue);
			fetch(SCRIPT_URL, { method: 'POST', body: formData})
				.then(response => {
					this.inputValue = ''
				})
				.catch(error => console.error('Error!', error.message))
		}
	},
	computed: {
		isDisabled() {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return !(this.isConfirm && emailRegex.test(this.inputValue))
		}
 	}
}
</script>
<style scoped>
.btn_wrapper {
	width: 168px;
	height: 40px;
}
.form_wrapper {
	margin-top: var(--s);
	display: flex;
	background: rgba(255, 255, 255, 0.25);
	box-sizing: border-box;
	padding: 1px;
	border-radius: var(--s);
}
.input {
	flex-grow: 1;
	height: 40px;
	background: transparent;
	border: none;
	padding-left: 15px;
	padding-right: 5px;
	color: var(--cairo);
}
.input:active,
.input:hover,
.input:focus {
	outline: 0;
	outline-offset: 0;
}
.form_rules {
	margin-top: var(--m);
	display: flex;
}
.rules_check_box {
	width: 20px;
	height: 20px;
	min-width: 20px;
	background: rgba(0, 0, 0, 0.25);
	border-radius: var(--xs);
	border: 1px solid #d9d9d9;
	margin-right: 10px;
	cursor: pointer;
}
.rules_check_box.active {
	background: url('/img/accept.svg') center center no-repeat;
}
.accept_text {
	cursor: pointer;
}
.send_btn:disabled {
	opacity: 0.5;
}
@media (max-width: 767px) {
	.form_title {
		font-size: 16px;
	}
}
</style>
