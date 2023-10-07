<template>
	<div v-bind="containerSettings.DC">
		<div class="container">
			<AText tag="div" :attributes="textSettings.DC">{{ value }}</AText>
		</div>
	</div>
</template>

<script>
import AText from '~/components/ui/atoms/text'
export default {
	name: 'footer-desc',
	components: { AText },
	data: () => {
		return {
			textSettings: {
				DC: {
					weight: 'regular',
					color: 'cordoba',
					size: 'small'
				},
				TABLET: {},
				MOB: {}
			},
			containerSettings: {
				DC: {
					class: 'p_m footer_copyright'
				},
				TABLET: {},
				MOB: {}
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
</style>
