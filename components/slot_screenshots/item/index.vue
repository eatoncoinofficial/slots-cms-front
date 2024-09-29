<template>
	<div class="item">
		<AImg :attributes="{ ...imgSettings, alt: `${title} Screen` }" :src="src" @onClick="onClickScreenActivate" />
		<ScreenPopUp v-if="isShowScreen" title="Screen" :src="src" @onClickScreenClose="onClickScreenClose" />
	</div>
</template>

<script>
import components from '~/mixins/components'
import ScreenPopUp from '~/components/screenshot_popup'
export default {
	name: 'game_screenshots_item',
	mixins: [components],
	data() {
		return {
			imgSettings: {
				width: '280px',
				height: '170px',
				class: 'img'
			},
			isShowScreen: false
		}
	},
	props: {
		src: {
			type: String,
			default() {
				return []
			}
		},
		title: {
			type: String,
			default() {
				return ''
			}
		}
	},
	components: {
		ScreenPopUp
	},
	methods: {
		onClickScreenActivate() {
			this.isShowScreen = true
		},
		onClickScreenClose() {
			this.isShowScreen = false
		}
	}
}
</script>

<style scoped>
.img {
	max-width: 100%;
	border-radius: var(--m);
	cursor: pointer;
}
</style>
