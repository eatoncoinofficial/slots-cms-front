<template>
	<div v-bind="containerSettings">
		<div class="container">
			<AText tag="div" :attributes="textSettings">{{ value }}</AText>
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
					align: 'center',
					weight: 'regular',
					color: 'cairo',
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
