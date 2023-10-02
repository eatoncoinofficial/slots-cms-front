<template>
	<div>
		<VueSlickCarousel
			:slidesToShow="1"
			centerMode
			centerPadding="20%"
			autoplay
			:speed="2000"
			:autoplaySpeed="2000"
			:initialSlide="0"
			infinite
			class="sliderContainer"
		>
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
		</VueSlickCarousel>
	</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
	name: 'MyComponent',
	components: { VueSlickCarousel }
}
</script>
<style>
.slick-list {
	padding: 0 20% 0 0 !important;
}
.slick-arrow {
	display: none !important;
}
</style>
<style scoped>
.sliderContainer .slick-list {
	overflow: auto;
}
.sliderContainer {
	width: 400px;
	border: 1px solid black;
	box-sizing: border-box;
	padding: 0px;
	margin: 0 auto;
}
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
</style>
