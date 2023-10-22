<template>
	<div class="item">
		<div class="left">
			<AImg :attributes="imgSettings.DC" src="/img/game_symbols.png" />
		</div>
		<div class="right">
			<div>
				<AText tag="div" :attributes="textSettings.DC">5 • 10</AText>
				<AText tag="div" :attributes="textSettings.DC">4 • 4</AText>
				<AText tag="div" :attributes="textSettings.DC">3 • 0.2</AText>
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
				DC: { size: 'large', color: 'cairo', weight: 'regular' },
				TABLE: {},
				MOB: {}
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
</style>
