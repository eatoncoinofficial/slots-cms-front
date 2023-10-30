<template>
	<article class="item">
		<div class="wrapper">
			<div class="left">
				<div class="img_wrapper">
					<AText>
						<AImg :attributes="imgSettings.DC" :src="src" />
					</AText>
				</div>
			</div>
			<div class="right">
				<div>
					<AText :attributes="titleSettings.DC">{{ title }}</AText>
				</div>
				<div>
					<AText :attributes="descTextSettings.DC">{{ desc }}</AText>
				</div>
				<div>
					<AText :attributes="valueTextSettings.DC">{{ value }}</AText>
				</div>
			</div>
			<div class="action">
				<AText>
					<AImg :attributes="arrowSettings.DC" src="/img/arrowGreen.svg" />
				</AText>
			</div>
		</div>
	</article>
</template>
<script>
import AImg from '~/components/ui/atoms/img/'
import AText from '~/components/ui/atoms/text'
import ALink from '~/components/ui/atoms/links'
export default {
	name: 'bonus_slider_card',
	components: { AImg, AText, ALink },
	data: () => {
		return {
			imgSettings: {
				DC: { width: '62px', height: '62px', class: 'object_fit_cover border_radius_50' },
				TABLET: {},
				MOB: {}
			},
			arrowSettings: {
				DC: { width: '26px', height: '26px' },
				TABLET: {},
				MOB: {}
			},
			titleSettings: {
				DC: { color: 'cairo', size: 'small', weight: 'bold', decoration: 'none', class: 'title' },
				TABLET: {},
				MOB: {}
			},
			descTextSettings: {
				DC: { color: 'cairo', size: 'small', weight: 'regular', class: 'desc' },
				TABLET: {},
				MOB: {}
			},
			valueTextSettings: {
				DC: { color: 'calgary', size: 'large', weight: 'bold', transform: 'uppercase' },
				TABLET: {},
				MOB: {}
			}
		}
	},
	props: {
		title: {
			type: String,
			default() {
				return ''
			}
		},
		desc: {
			type: String,
			default() {
				return ''
			}
		},
		value: {
			type: String,
			default() {
				return ''
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
	width: 356px;
	height: 95px;
	padding: 5px;
	padding-right: 25px;
	cursor: pointer;
}
.wrapper {
	position: relative;
	border-radius: 14px;
	height: 100%;
	background: rgba(255, 255, 255, 0.1);
	display: flex;
}
.img_wrapper {
	width: 62px;
	height: 62px;
}
.left {
	width: 90px;
	min-width: 90px;
	align-items: center;
	justify-content: center;
	display: flex;
	height: 100%;
}
.right {
	flex-grow: 1;
}
.desc {
	line-height: 18px;
	display: block;
	margin-top: 8px;
}
.title {
	line-height: 12px;
	display: block;
	margin-top: 15px;
}
.action {
	min-width: 26px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
