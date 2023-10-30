<template>
	<div>
		<main class="main_page">
			<div class="container">
				<div class="ttl_container">
					<AText tag="h1" :attributes="mainTitleSettings.DC">{{ data.body.h1 }}</AText>
					<div class="ttl_desc">
						<AText tag="div" :attributes="mainDescSettings.DC">{{ data.body.short_desc }}</AText>
					</div>
				</div>
				<div class="slider_wrapper">
					<div class="slider_item">
						<SliderContainer
							icon="casino"
							:title="t('ONLINE_CASINO')"
							link="/casinos"
							:sliderSettings="casinoSliderSettings.DC"
						>
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
						<SliderContainer icon="game" :title="t('GAMES')" link="/games" :sliderSettings="gameSliderSettings.DC">
							<SlotSliderCard
								v-for="item in data.body.games"
								:key="item.title"
								:link="item.permalink"
								:src="item.thumbnail"
							/>
						</SliderContainer>
					</div>
					<div class="slider_item">
						<SliderContainer
							icon="bonus"
							:title="t('BONUSES')"
							link="/bonuses"
							:sliderSettings="bonusSliderSettings.DC"
						>
							<BonusSliderCard
								v-for="item in data.body.bonuses"
								:key="item.title"
								:src="item.thumbnail"
								:title="item.title"
								:desc="item.short_desc"
								:value="item.bonus"
							/>
						</SliderContainer>
					</div>
					<div class="slider_item">
						<SliderContainer icon="news" :title="t('NEWS')" link="/news" :sliderSettings="newsSliderSettings.DC">
							<NewsSliderCard
								v-for="item in data.body.news"
								:key="item.title"
								:link="item.permalink"
								:src="item.thumbnail"
								:title="item.title"
								:desc="item.create_at.slice(0, 10)"
							/>
						</SliderContainer>
					</div>
				</div>
				<div class="main_container">
					<TwoContentContainer>
						<template v-slot:left>
							<AText tag="div" :attributes="mainContainerTitle.DC">{{ t('ONLINE_CASINO') }}</AText>
							<div class="category_filter_wrapper">
								<CategoryFilter :value="data.body.casino_category" />
							</div>
							<CasinoLoop />
						</template>
						<template v-slot:right>
							<aside class="aside">
								<AText tag="div" :attributes="asideContainerTitle.DC">{{ t('RECOMMENDED_BONUSES') }}</AText>
								<div class="aside_bonus_container">
									<BonusAsideCard
										v-for="item in data.body.top_bonuses"
										:key="item.title"
										:link="item.permalink"
										:src="item.thumbnail"
										:title="item.title"
										:desc="item.short_desc"
										:value="item.bonus"
										:min_dep="item.min_deposit"
										:wager="item.wagering"
									/>
								</div>
							</aside>
						</template>
					</TwoContentContainer>
				</div>
			</div>
			<div class="news_loop">
				<div class="container">
					<div class="section_title_wrapper">
						<AText tag="div" :attributes="mainContainerTitle.DC">{{ t('NEWS') }}</AText>
						<LinkWithArrow link="/news" :attributes="newsLinkSettings.DC">
							{{ t('SHOW_MORE') }}
						</LinkWithArrow>
					</div>
					<div class="news_container">
						<NewsMainCard
							v-for="item in data.body.news.slice(0, 4)"
							:key="item.title"
							:link="item.permalink"
							:src="item.thumbnail"
							:title="item.title"
							:date="item.create_at.slice(0, 10)"
							:desc="item.short_desc"
						/>
					</div>
				</div>
			</div>
			<div class="container content_container">
				<MainContent :value="data.body.content" />
			</div>
			<div class="container">
				<div class="faq_container">
					<Faq :value="data.body.faq" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import Slider from '~/components/slider'
import SliderContainer from '~/components/slider_container'
import AText from '~/components/ui/atoms/text'
import CasinoSliderCard from '~/components/casino_loop/cards/slider_card'
import SlotSliderCard from '~/components/slot_loop/cards/slider_card'
import BonusSliderCard from '~/components/bonus_loop/cards/slider_card'
import NewsSliderCard from '~/components/news_loop/cards/slider_card'
import TwoContentContainer from '~/components/two_content_container/'
import CategoryFilter from '~/components/category_filter/dev'
import BonusAsideCard from '~/components/bonus_loop/cards/aside_card'
import LinkWithArrow from '~/components/ui/atoms/links/link_with_arrow'
import NewsMainCard from '~/components/news_loop/cards/main'
import CasinoLoop from '~/components/casino_loop/app_casino_loop_downloads.vue'
import MainContent from '~/components/content'
import Faq from '~/components/faq/app_faq'
import translateMixin from '~/mixins/translate'
import head from '~/mixins/head'
import helper from '~/helpers/helpers'

export default {
	name: 'main-page',
	mixins: [translateMixin, head],
	components: {
		Slider,
		SliderContainer,
		AText,
		CasinoSliderCard,
		SlotSliderCard,
		BonusSliderCard,
		NewsSliderCard,
		TwoContentContainer,
		CategoryFilter,
		BonusAsideCard,
		LinkWithArrow,
		NewsMainCard,
		CasinoLoop,
		Faq,
		MainContent
	},
	layout: 'default',
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
				MOB: {}
			},
			mainDescSettings: {
				DC: {
					weight: 'extra-bold',
					color: 'cairo',
					size: 'medium',
					weight: 'regular'
				},
				TABLET: {},
				MOB: {}
			},
			bonusSliderSettings: {
				DC: {
					slidesToShow: 1.12,
					centerMode: true,
					autoplay: true,
					speed: 2000,
					autoplaySpeed: 2000,
					initialSlide: 0,
					infinite: true
				},
				TABLET: {},
				MOB: {}
			},
			casinoSliderSettings: {
				DC: {
					slidesToShow: 5,
					centerMode: false,
					autoplay: true,
					speed: 2000,
					autoplaySpeed: 2000,
					initialSlide: 0,
					infinite: true
				},
				TABLE: {},
				MOB: {}
			},
			gameSliderSettings: {
				DC: {
					slidesToShow: 5,
					centerMode: false,
					autoplay: true,
					speed: 2000,
					autoplaySpeed: 2000,
					initialSlide: 0,
					infinite: true
				},
				TABLE: {},
				MOB: {}
			},
			newsSliderSettings: {
				DC: {
					slidesToShow: 1.12,
					centerMode: true,
					autoplay: true,
					speed: 2000,
					autoplaySpeed: 2000,
					initialSlide: 0,
					infinite: true
				},
				TABLET: {},
				MOB: {}
			},
			mainContainerTitle: {
				DC: {
					weight: 'extra-bold',
					color: 'cairo',
					size: 'x-large'
				},
				TABLET: {},
				MOB: {}
			},
			asideContainerTitle: {
				DC: {
					weight: 'bold',
					color: 'cairo',
					size: 'large'
				},
				TABLET: {},
				MOB: {}
			},
			newsLinkSettings: {
				DC: { size: 'medium', color: 'calgary', weight: 'semi-bold', decoration: 'none' },
				TABLET: {},
				MOB: {}
			}
		}
	},
	async asyncData({ store, route }) {
		const request = {
			url: 'main'
		}
		const response = await DAL_Page.getData(request)
		const data = helper.headDataMixin(response.data, route)
		return { data }
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
.category_filter_wrapper {
	padding-top: var(--m);
	padding-bottom: var(--m);
}
.aside_bonus_container {
	margin-top: var(--s);
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
}
.aside {
	padding-top: var(--xl);
}
.main_container {
	padding-bottom: 80px;
}
.section_title_wrapper {
	display: flex;
	justify-content: space-between;
}
.news_loop {
	padding-top: 40px;
	padding-bottom: 60px;
	background: var(--cancun);
}
.news_container {
	display: flex;
	justify-content: space-between;
	margin-top: var(--l);
}
</style>
