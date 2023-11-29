<template>
	<div v-bind="containerSettings">
		<div class="container">
			<AText tag="div" :attributes="textSettings">{{ value }}</AText>
		</div>
	</div>
</template>

<script>
import components from '~/mixins/components'
export default {
	name: 'footer-desc',
    mixins: [components],
	data: () => {
		return {
			textSettings: {
				weight: 'regular',
				color: 'cordoba',
				size: 'small'
			},
			containerSettings: {
				class: 'p_m footer_copyright'
			}
		}
	},
	props: {
		value: {
			type: String,
			default:
				'Name є незалежним ресурсом про онлайн-казино та азартні ігри, який не контролюється оператором азартних ігор або іншою установою. Ми чесно створюємо наші огляди та посібники, спираючись лише на власні знання та думку наших незалежних експертів; проте це створено лише з інформаційних цілях і має сприйматися як рекомендації. Перш ніж грати в тому чи іншому казино, переконайтеся, що ви дієте відповідно до нормативних вимог.'
		}
	}
}
</script>
<style scoped>
.footer_copyright {
	border-top: 1px solid var(--callao);
}
@media (max-width: 767px) {
	.footer_copyright {
		padding-left: 0px;
		padding-right: 0px;
	}
}
</style>
