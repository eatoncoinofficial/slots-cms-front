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
	name: 'footer-text',
	components: { AText },
	data: () => {
		return {
			textSettings: {
				DC: {
					align: 'center',
					weight: 'regular',
					color: 'cairo',
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
			default: 'NAME @ 2023'
		}
	}
}
</script>
<style scoped>
.footer_copyright {
	border-top: 1px solid var(--callao);
}
</style>
