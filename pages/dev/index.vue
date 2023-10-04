<template>
	<div>
		<header>Header!</header>
		<footer>Footer!</footer>
		<div class="sliderContainer">
			<Slider :settings="sliderSettings">
				<div class="card">
					<div class="item">
						1
					</div>
				</div>
				<div class="card">
					<div class="item">
						2
					</div>
				</div>
				<div class="card">
					<div class="item">
						3
					</div>
				</div>
				<div class="card">
					<div class="item">
						4
					</div>
				</div>
			</Slider>
		</div>
		<div class="sliderContainer">
			<Slider :settings="sliderSettingsSecond">
				<div class="cardSecond">
					<div class="item">
						1
					</div>
				</div>
				<div class="cardSecond">
					<div class="item">
						2
					</div>
				</div>
				<div class="cardSecond">
					<div class="item">
						3
					</div>
				</div>
				<div class="cardSecond">
					<div class="item">
						4
					</div>
				</div>
				<div class="cardSecond">
					<div class="item">
						5
					</div>
				</div>
				<div class="cardSecond">
					<div class="item">
						6
					</div>
				</div>
				<div class="cardSecond">
					<div class="item">
						7
					</div>
				</div>
				<div class="cardSecond">
					<div class="item">
						8
					</div>
				</div>
				<div class="cardSecond">
					<div class="item">
						9
					</div>
				</div>
				<div class="cardSecond">
					<div class="item">
						10
					</div>
				</div>
			</Slider>
		</div>
		<SliderContainer />
	</div>
</template>

<script>
import Slider from '~/components/slider'
import SliderContainer from '~/components/slider_container'
export default {
	name: 'dev-main-page',
	components: { Slider, SliderContainer },
	layout: 'dev',
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
.card {
	height: 150px;
	padding: 15px;
}
.item {
	background: red;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sliderContainer {
	width: 400px;
	box-sizing: border-box;
	padding: 0px;
	margin: 0 auto;
}
.cardSecond {
	height: 50px;
	padding: 15px;
}
</style>
