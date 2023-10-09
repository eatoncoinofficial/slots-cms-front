<template>
	<div class="root">
		<div class="top">
			<div class="ttl" :class="icon">
				<AText :attributes="ttlSettings.DC">{{ title }}</AText>
			</div>
			<LinkWithArrow :link="link" :attributes="linkSettings.DC">
				Дивитись бильше
			</LinkWithArrow>
		</div>
		<div class="bottom">
			<Slider :settings="sliderSettings">
				<slot />
			</Slider>
		</div>
	</div>
</template>
<script>
import Slider from '~/components/slider'
import AText from '~/components/ui/atoms/text'
import LinkWithArrow from '~/components/ui/atoms/links/link_with_arrow'
export default {
	name: 'slider_container',
	components: { Slider, AText, LinkWithArrow },
	data: () => {
		return {
			ttlSettings: {
				DC: { size: 'x-large', color: 'cairo', weight: 'extra-bold' },
				TABLET: {},
				MOB: {}
			},
			linkSettings: {
				DC: { size: 'medium', color: 'calgary', weight: 'semi-bold', decoration: 'none' },
				TABLET: {},
				MOB: {}
			}
		}
	},
	props: {
		icon: {
			type: String,
			default() {
				return 'casino'
			}
		},
		link: {
			type: String,
			default() {
				return '#'
			}
		},
		title: {
			type: String,
			default() {
				return 'Онлайн казино'
			}
		},
		sliderSettings: {
			type: Object,
			default() {
				return {}
			}
		}
	}
}
</script>
<style scoped>
.root {
	width: 100%;
	max-width: 585px;
	border: 1px solid #886dff;
	background: rgba(36, 0, 140);
	border-radius: 14px;
	padding-left: 24px;
	padding-top: 14px;
	padding-bottom: 24px;
}
.top {
	display: flex;
	justify-content: space-between;
	padding-right: 12px;
	margin-bottom: 8px;
	height: 62px;
}
.ttl {
	font-family: 'Unbounded';
	position: relative;
	padding-left: 32px;
}
.casino::before {
	content: '';
	width: 24px;
	height: 24px;
	position: absolute;
	top: 10;
	left: 0px;
	background: url('/img/casinoIcon.svg');
}
.game::before {
	content: '';
	width: 24px;
	height: 24px;
	position: absolute;
	top: 10;
	left: 0px;
	background: url('/img/gameIcon.svg');
}
.bonus::before {
	content: '';
	width: 24px;
	height: 24px;
	position: absolute;
	top: 10;
	left: 0px;
	background: url('/img/bonusIcon.svg');
}
.news::before {
	content: '';
	width: 24px;
	height: 24px;
	position: absolute;
	top: 10;
	left: 0px;
	background: url('/img/newsIcon.svg');
}
.ttl {
	display: flex;
	align-items: center;
}
</style>
