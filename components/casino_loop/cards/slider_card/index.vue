<template>
	<article class="item">
		<div class="wrapper" :style="`background: ${color}`">
			<div class="rating">
				<AImg :attributes="starSettings.DC" src="/img/goldStar.svg" />
				<AText tag="span" :attributes="textSettings.DC">{{ rating / 10 }}</AText>
				<AText tag="span" :attributes="thinTextSettings.DC">/10</AText>
			</div>
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
	name: 'casino_slider_card',
	components: { AImg, AText, ALink },
	data: () => {
		return {
			imgSettings: {
				DC: { width: '50px', height: '50px', class: 'border_radius_s' },
				TABLET: {},
				MOB: {}
			},
			starSettings: {
				DC: { width: '14px', height: '14px', class: ' m_r_xs' },
				TABLET: {},
				MOB: {}
			},
			textSettings: {
				DC: { color: 'cairo', size: 'small', bold: 'semi-bold', class: 'rating_value' },
				TABLET: {},
				MOB: {}
			},
			thinTextSettings: {
				DC: { color: 'cordoba', size: 'small', bold: 'thin', class: 'rating_total_value' },
				TABLET: {},
				MOB: {}
			}
		}
	},
	props: {
		rating: {
			type: Number,
			default() {
				return 9
			}
		},
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
		color: {
			type: String,
			default() {
				return '#000000FF'
			}
		}
	}
}
</script>
<style scoped>
.item {
	width: 118px;
	height: 118px;
	padding: 5px;
}
.wrapper {
	position: relative;
	border: 1px solid #886dff;
	border-radius: 14px;
	overflow: hidden;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.rating {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2;
	background: var(--cardiff);
	width: 75px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0 0 var(--s) var(--s);
}
.rating_value {
	transform: translateY(1px);
}
.rating_total_value {
	font-size: 10px;
	transform: translateY(1px);
}
@media (max-width: 767px) {
	.item {
		width: 110px;
		height: 110px;
	}
	.wrapper {
		padding-top: 5px;
	}
}
</style>
