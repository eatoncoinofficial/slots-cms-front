<template>
	<div class="item">
		<div class="left">
			<AImg :attributes="imgSettings.DC" :src="src" />
		</div>
		<div class="right">
			<div>
				<AText tag="div" :attributes="textSettings.DC" v-if="value_1">{{ value_1 }}</AText>
				<AText tag="div" :attributes="textSettings.DC" v-if="value_2">{{ value_2 }}</AText>
				<AText tag="div" :attributes="textSettings.DC" v-if="value_3">{{ value_3 }}</AText>
			</div>
		</div>
	</div>
</template>

<script>
import AText from '~/components/ui/atoms/text'
import AImg from '~/components/ui/atoms/img'
export default {
	name: 'game_symbol_item',
	components: { AText, AImg },
	data() {
		return {
			imgSettings: {
				DC: { width: '120px', height: '98px' },
				TABLE: {},
				MOB: {}
			},
			textSettings: {
				DC: { size: 'large', color: 'cairo', weight: 'regular', class: 'item_text' },
				TABLE: {},
				MOB: {}
			}
		}
	},
	props: {
		src: {
			type: String,
			default() {
				return ''
			}
		},
		value_1: {
			type: String,
			default() {
				return ''
			}
		},
		value_2: {
			type: String,
			default() {
				return ''
			}
		},
		value_3: {
			type: String,
			default() {
				return ''
			}
		}
	}
}
</script>

<style scoped>
.item {
	display: flex;
	gap: 20px;
}
.right {
	display: flex;
	align-items: center;
}
@media (max-width: 767px) {
	.left {
		width: 80px;
	}
	.item_text {
		font-size: 12px;
	}
}
</style>
