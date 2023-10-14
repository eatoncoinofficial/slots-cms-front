<template>
	<div class="form-wrapper">
		<AText :attributes="titleSettings.DC">Підпишіться на нашу розсилку</AText>
		<div class="form_wrapper">
			<input placeholder="Ваш email" class="input" />
			<div class="btn_wrapper">
				<AButton :attributes="btnSettings.DC">Підписатися</AButton>
			</div>
		</div>
		<div class="form_rules">
			<div class="rules_check_box"></div>
			<AText :attributes="formRulesSettings.DC">Мне есть 18 лет, и закон разрешает мне играть в казино</AText>
		</div>
	</div>
</template>

<script>
import AButton from '~/components/ui/atoms/buttons'
import AText from '~/components/ui/atoms/text'
export default {
	name: 'footer-form',
	components: { AButton, AText },
	data: () => {
		return {
			btnSettings: {
				DC: { bg: 'calgary', color: 'cochin', borderRadius: 's', weight: 'semi-bold' },
				TABLET: {},
				MOB: {}
			},
			titleSettings: {
				DC: { color: 'cairo', weight: 'bold', size: 'x-large' },
				TABLET: {},
				MOB: {}
			},
			formRulesSettings: {
				DC: { color: 'cordoba', weight: 'regular', size: 'small' },
				TABLET: {},
				MOB: {}
			}
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
	background: rgba(0, 0, 0, 0.25);
	border-radius: var(--xs);
	border: 1px solid #d9d9d9;
	margin-right: 10px;
	cursor: pointer;
}
</style>
