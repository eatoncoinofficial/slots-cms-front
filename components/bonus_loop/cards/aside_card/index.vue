<template>
	<article class="item">
		<div class="wrapper">
			<div class="left">
				<div class="img_wrapper">
					<ALink :href="link">
						<AImg :attributes="imgSettings.DC" :src="src" />
					</ALink>
				</div>
			</div>
			<div class="right">
				<div>
					<ALink :attributes="titleSettings.DC" :href="link">{{ title }}</ALink>
				</div>
				<div>
					<AText :attributes="descTextSettings.DC">{{ desc }}</AText>
				</div>
				<div>
					<AText :attributes="valueTextSettings.DC">{{ value }}</AText>
				</div>
			</div>
			<div class="action">
				<ALink :href="link">
					<AImg :attributes="arrowSettings.DC" src="/img/arrowGreen.svg" />
				</ALink>
			</div>
		</div>
		<div class="bottom">
			<AText tag="div" :attributes="bottomTextSettings.DC">{{ min_dep }} &middot; {{ wager }}</AText>
		</div>
	</article>
</template>
<script>
import AImg from '~/components/ui/atoms/img/'
import AText from '~/components/ui/atoms/text'
import ALink from '~/components/ui/atoms/links'
export default {
	name: 'bonus_aside_card',
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
			},
			bottomTextSettings: {
				DC: { color: 'cairo', size: 'small', weight: 'regular', align: 'center' },
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
		min_dep: {
			type: String,
			default() {
				return ''
			}
		},
		wager: {
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
	max-width: 100%;
}
.wrapper {
	position: relative;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
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
}
.right {
	flex-grow: 1;
	padding: 4px 0px;
}
.desc {
	line-height: 18px;
}
.title {
	line-height: 12px;
}
.action {
	min-width: 26px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bottom {
	background: rgba(255, 255, 255, 0.25);
	padding: var(--s);
	border-bottom-left-radius: 14px;
	border-bottom-right-radius: 14px;
}
</style>
