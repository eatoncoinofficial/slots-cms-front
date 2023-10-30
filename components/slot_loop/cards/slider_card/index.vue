<template>
	<article class="item">
		<div class="wrapper">
			<ALink :href="link">
				<AImg :attributes="imgSettings.DC" :src="src" />
			</ALink>
		</div>
	</article>
</template>
<script>
import AImg from '~/components/ui/atoms/img/'
import AText from '~/components/ui/atoms/text'
import ALink from '~/components/ui/atoms/links'
export default {
	name: 'game_slider_card',
	components: { AImg, AText, ALink },
	data: () => {
		return {
			imgSettings: {
				DC: { width: '100px', height: '100px', class: 'object_fit_cover border_radius_s' },
				TABLET: {},
				MOB: {}
			}
		}
	},
	props: {
		link: {
			type: String,
			default() {
				return '/game'
			}
		},
		src: {
			type: String,
			default() {
				return '/img/noImages.png'
			}
		}
	}
}
</script>
<style scoped>
.item {
	width: 105px;
	height: 105px;
	padding: 5px;
}
.wrapper {
	position: relative;
	border: 1px solid #886dff;
	border-radius: 14px;
	overflow: hidden;
}
</style>
