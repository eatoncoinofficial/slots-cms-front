<template>
	<div class="item">
		<AImg :attributes="imgSettings.DC" src="/img/screenshot.png" />
	</div>
</template>

<script>
import AImg from '~/components/ui/atoms/img'
export default {
	name: 'game_screenshots_item',
	components: { AImg },
	data() {
		return {
			imgSettings: {
				DC: { width: '280px', height: '170px', class: 'img' },
				TABLE: {},
				MOB: {}
			}
		}
	}
}
</script>

<style scoped>
.img {
	max-width: 100%;
}
</style>
