<template>
	<div class="root">
		<div class="top">
			<div class="ttl" :class="icon">
				<AText :attributes="ttlSettings.DC">{{ title }}</AText>
			</div>
			<div class="link">
				<a :href="link">
					Дивитись бильше
				</a>
			</div>
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
export default {
	name: 'slider_container',
	components: { Slider, AText },
	data: () => {
		return {
			ttlSettings: {
				DC: { size: 'x-large', color: 'cairo', weight: 'extra-bold' },
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
				return {
					slidesToShow: 5,
					centerMode: false,
					autoplay: true,
					speed: 2000,
					autoplaySpeed: 2000,
					initialSlide: 0,
					infinite: true
				}
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
	background: linear-gradient(#886dff, #6da8ff);
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
.link {
	display: flex;
	align-items: center;
	padding-right: 18px;
	position: relative;
}
.link:before {
	content: '';
	width: 16px;
	height: 16px;
	position: absolute;
	background: url('/img/arrowGreen.svg');
	position: absolute;
	right: 0px;
	top: 22px;
}
.link a {
	color: #00ea17;
	font-size: 14px;
	font-weight: 600;
	font-family: 'Unbounded';
	text-decoration: none;
}
.ttl {
	display: flex;
	align-items: center;
}
</style>
