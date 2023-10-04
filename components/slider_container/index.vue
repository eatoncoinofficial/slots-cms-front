<template>
	<div class="root">
		<div class="top">
			<div class="ttl casino">
				Онлайн казино
			</div>
			<div class="link">
				<a href="#">
					Дивитись бильше
				</a>
			</div>
		</div>
		<div class="bottom">
			<Slider :settings="sliderSettingsSecond">
				<CasinoSliderCard />
				<CasinoSliderCard />
				<CasinoSliderCard />
				<CasinoSliderCard />
				<CasinoSliderCard />
				<CasinoSliderCard />
				<CasinoSliderCard />
				<CasinoSliderCard />
				<CasinoSliderCard />
				<CasinoSliderCard />
			</Slider>
		</div>
	</div>
</template>
<script>
import Slider from '~/components/slider'
import CasinoSliderCard from '~/components/casino_loop/cards/slider_card'
export default {
	name: 'slider_container',
	components: { Slider, CasinoSliderCard },
	data: () => {
		return {
			sliderSettings: {
				slidesToShow: 1,
				centerMode: true,
				autoplay: true,
				speed: 2000,
				autoplaySpeed: 2000,
				initialSlide: 0,
				infinite: true
			},
			sliderSettingsSecond: {
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
	color: #ffffff;
	font-size: 24px;
	font-family: 'Unbounded';
	font-weight: 800;
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
