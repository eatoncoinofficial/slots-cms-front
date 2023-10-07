<template>
	<div>
		<header>Header!</header>
		<main class="main_page">
			<div class="container">
				<SliderContainer />
				<AText tag="h1" :attributes="mainTitleSettings.DC">Найбільша база даних про онлайн-казино у світі</AText>
			</div>
		</main>
		<Footer />
	</div>
</template>

<script>
import Slider from '~/components/slider'
import SliderContainer from '~/components/slider_container'
import AText from '~/components/ui/atoms/text'
import Footer from '~/components/footer/dev'
export default {
	name: 'dev-main-page',
	components: { Slider, SliderContainer, AText, Footer },
	layout: 'dev',
	data: () => {
		return {
			mainTitleSettings: {
				DC: {
					align: 'center',
					weight: 'extra-bold',
					color: 'calgary',
					size: '2x-large',
					decoration: 'underline',
					class: 'custom_class'
				},
				TABLET: {},
				MOBILE: {}
			}
		}
	}
}
</script>
<style scoped></style>
