<template>
	<article class="item" :class="size">
		<div class="wrapper">
			<ALink :href="link">
				<AImg :attributes="imgSettings.DC" :src="src" />
			</ALink>
		</div>
		<div class="mask">
			<div class="action">
				<ALink :attributes="linkSettings.DC" :href="link">{{ t('PLAY') }}</ALink>
			</div>
		</div>
	</article>
</template>
<script>
import AImg from '~/components/ui/atoms/img/'
import AText from '~/components/ui/atoms/text'
import ALink from '~/components/ui/atoms/links'
import translateMixin from '~/mixins/translate'
export default {
	name: 'game_main_card',
	mixins: [translateMixin],
	components: { AImg, AText, ALink },
	data: () => {
		return {
			imgSettings: {
				DC: { width: '159px', height: '172px', class: 'object_fit_cover thumbnail' },
				TABLET: {},
				MOB: {}
			},
			linkSettings: {
				DC: { color: 'cairo', weight: 'regular', size: 'medium', decoration: 'none' },
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
		},
		size: {
			type: String,
			default() {
				return 'big'
			}
		}
	}
}
</script>
<style scoped>
.item {
	border-radius: 14px;
	position: relative;
	overflow: hidden;
}
.item.big {
	width: 159px;
	height: 172px;
}
.item.middle {
	width: 114px;
	height: 114px;
}
.item:hover .mask {
	opacity: 1;
}
.thumbnail {
	display: block;
}
.mask {
	position: absolute;
	top: 0px;
	left: 0px;
	background: rgba(0, 0, 0, 0.63);
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: 0.7s;
}
.action {
	position: relative;
	padding-left: 20px;
}
.action::before {
	content: '';
	width: 16px;
	height: 16px;
	left: 2px;
	top: 50%;
	transform: translateY(-50%);
	background: url('/img/link_arrow.png');
	position: absolute;
}
</style>
