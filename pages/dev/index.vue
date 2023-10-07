<template>
	<div>
		<Header />
		<main class="main_page">
			<div class="container">
				<div class="ttl_container">
					<AText tag="h1" :attributes="mainTitleSettings.DC">Найбільша база даних про онлайн-казино у світі</AText>
					<div class="ttl_desc">
						<AText tag="div" :attributes="mainDescSettings.DC"
							>Актуальні огляди на все онлайн-казино, списки бонусів, міжнародне співтовариство, допомога у вирішенні
							скарг та багато іншого.</AText
						>
					</div>
				</div>
				<div class="slider_wrapper">
					<div class="slider_item">
						<SliderContainer icon="casino" title="Онлайн-казино" link="/casinos">
							<CasinoSliderCard link="/text-1" :rating="90" src="/img/gamePrevyu.png" />
							<CasinoSliderCard link="/text-2" :rating="85" src="/img/gamePrevyu.png" />
							<CasinoSliderCard link="/text-3" :rating="93" src="/img/gamePrevyu.png" />
							<CasinoSliderCard link="/text-4" :rating="95" src="/img/gamePrevyu.png" />
							<CasinoSliderCard link="/text-5" :rating="87" src="/img/gamePrevyu.png" />
							<CasinoSliderCard link="/text-6" :rating="85" src="/img/gamePrevyu.png" />
							<CasinoSliderCard link="/text-7" :rating="56" src="/img/gamePrevyu.png" />
							<CasinoSliderCard link="/text-8" :rating="78" src="/img/gamePrevyu.png" />
							<CasinoSliderCard link="/text-9" :rating="94" src="/img/gamePrevyu.png" />
							<CasinoSliderCard link="/text-10" :rating="93" src="/img/gamePrevyu.png" />
						</SliderContainer>
					</div>
					<div class="slider_item">
						<SliderContainer icon="game" title="Ігри" link="/games">
							<SlotSliderCard link="/slot-1" src="/img/gamePrevyu.png" />
							<SlotSliderCard link="/slot-2" src="/img/gamePrevyu.png" />
							<SlotSliderCard link="/slot-3" src="/img/gamePrevyu.png" />
							<SlotSliderCard link="/slot-4" src="/img/gamePrevyu.png" />
							<SlotSliderCard link="/slot-5" src="/img/gamePrevyu.png" />
							<SlotSliderCard link="/slot-6" src="/img/gamePrevyu.png" />
							<SlotSliderCard link="/slot-7" src="/img/gamePrevyu.png" />
							<SlotSliderCard link="/slot-8" src="/img/gamePrevyu.png" />
							<SlotSliderCard link="/slot-9" src="/img/gamePrevyu.png" />
							<SlotSliderCard link="/slot-10" src="/img/gamePrevyu.png" />
						</SliderContainer>
					</div>
					<div class="slider_item">
						<SliderContainer icon="bonus" title="Бонуси" link="/bonuses">
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
						</SliderContainer>
					</div>
					<div class="slider_item">
						<SliderContainer icon="news" title="News" link="/news">
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
						</SliderContainer>
					</div>
				</div>
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
import CasinoSliderCard from '~/components/casino_loop/cards/slider_card'
import Header from '~/components/header/dev'
import SlotSliderCard from '~/components/slot_loop/cards/slider_card'
export default {
	name: 'dev-main-page',
	components: { Slider, SliderContainer, AText, Footer, CasinoSliderCard, Header, SlotSliderCard },
	layout: 'dev',
	data: () => {
		return {
			mainTitleSettings: {
				DC: {
					weight: 'extra-bold',
					color: 'cairo',
					size: '2x-large',
					class: 'main_page_h1'
				},
				TABLET: {},
				MOBILE: {}
			},
			mainDescSettings: {
				DC: {
					weight: 'extra-bold',
					color: 'cairo',
					size: 'medium',
					weight: 'regular'
				},
				TABLET: {},
				MOBILE: {}
			}
		}
	}
}
</script>
<style scoped>
.slider_wrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.slider_item {
	max-width: 48%;
	margin-bottom: var(--m);
}
.main_page {
	background: url('/img/mainPageBg.jpg') top center var(--colombo);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.ttl_container {
	max-width: 900px;
}
.ttl_desc {
	max-width: 750px;
	margin-top: 15px;
}
.slider_wrapper {
	padding-top: 50px;
	padding-bottom: 50px;
}
</style>
