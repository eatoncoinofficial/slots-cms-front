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
						<SliderContainer
							icon="casino"
							title="Онлайн-казино"
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
						<SliderContainer icon="game" title="Ігри" link="/games" :sliderSettings="gameSliderSettings.DC">
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
						<SliderContainer icon="bonus" title="Бонуси" link="/bonuses" :sliderSettings="bonusSliderSettings.DC">
							<BonusSliderCard
								link="/bonus-1"
								src="/img/gamePrevyu.png"
								title="Бонус від Slotoking"
								desc="Вітальний пакет"
								value="125 000 ₴ + 500 FS"
							/>
							<BonusSliderCard
								link="/bonus-2"
								src="/img/gamePrevyu.png"
								title="Бонус від Slotoking"
								desc="Вітальний пакет"
								value="125 000 ₴ + 500 FS"
							/>
							<BonusSliderCard
								link="/bonus-3"
								src="/img/gamePrevyu.png"
								title="Бонус від Slotoking"
								desc="Вітальний пакет"
								value="125 000 ₴ + 500 FS"
							/>
							<BonusSliderCard
								link="/bonus-4"
								src="/img/gamePrevyu.png"
								title="Бонус від Slotoking"
								desc="Вітальний пакет"
								value="125 000 ₴ + 500 FS"
							/>
							<BonusSliderCard
								link="/bonus-5"
								src="/img/gamePrevyu.png"
								title="Бонус від Slotoking"
								desc="Вітальний пакет"
								value="125 000 ₴ + 500 FS"
							/>
							<BonusSliderCard
								link="/bonus-6"
								src="/img/gamePrevyu.png"
								title="Бонус від Slotoking"
								desc="Вітальний пакет"
								value="125 000 ₴ + 500 FS"
							/>
							<BonusSliderCard
								link="/bonus-7"
								src="/img/gamePrevyu.png"
								title="Бонус від Slotoking"
								desc="Вітальний пакет"
								value="125 000 ₴ + 500 FS"
							/>
							<BonusSliderCard
								link="/bonus-8"
								src="/img/gamePrevyu.png"
								title="Бонус від Slotoking"
								desc="Вітальний пакет"
								value="125 000 ₴ + 500 FS"
							/>
							<BonusSliderCard
								link="/bonus-9"
								src="/img/gamePrevyu.png"
								title="Бонус від Slotoking"
								desc="Вітальний пакет"
								value="125 000 ₴ + 500 FS"
							/>
							<BonusSliderCard
								link="/bonus-10"
								src="/img/gamePrevyu.png"
								title="Бонус від Slotoking"
								desc="Вітальний пакет"
								value="125 000 ₴ + 500 FS"
							/>
						</SliderContainer>
					</div>
					<div class="slider_item">
						<SliderContainer icon="news" title="News" link="/news" :sliderSettings="newsSliderSettings.DC">
							<NewsSliderCard
								link="/news-1"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news-1"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news-1"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news-1"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news-1"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news-1"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news-1"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news-1"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news-1"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news-1"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
						</SliderContainer>
					</div>
				</div>
				<div class="main_container">
					<TwoContentContainer>
						<template v-slot:left>
							<AText tag="div" :attributes="mainContainerTitle.DC">Онлайн-казино</AText>
							<div class="category_filter_wrapper">
								<CategoryFilter />
							</div>
							<CasinoLoop />
						</template>
						<template v-slot:right>
							<aside class="aside">
								<AText tag="div" :attributes="asideContainerTitle.DC">Рекомендовані бонуси</AText>
								<div class="aside_bonus_container">
									<BonusAsideCard
										link="/bonus-1"
										src="/img/gamePrevyu.png"
										title="Бонус від Slotoking"
										desc="Вітальний пакет"
										value="125 000 ₴ + 500 FS"
										min_dep="Min. deposit: $30"
										wager="Wagering: 40x"
									/>
									<BonusAsideCard
										link="/bonus-1"
										src="/img/gamePrevyu.png"
										title="Бонус від Slotoking"
										desc="Вітальний пакет"
										value="125 000 ₴ + 500 FS"
										min_dep="Min. deposit: $30"
										wager="Wagering: 40x"
									/>
									<BonusAsideCard
										link="/bonus-1"
										src="/img/gamePrevyu.png"
										title="Бонус від Slotoking"
										desc="Вітальний пакет"
										value="125 000 ₴ + 500 FS"
										min_dep="Min. deposit: $30"
										wager="Wagering: 40x"
									/>
									<BonusAsideCard
										link="/bonus-1"
										src="/img/gamePrevyu.png"
										title="Бонус від Slotoking"
										desc="Вітальний пакет"
										value="125 000 ₴ + 500 FS"
										min_dep="Min. deposit: $30"
										wager="Wagering: 40x"
									/>
									<BonusAsideCard
										link="/bonus-1"
										src="/img/gamePrevyu.png"
										title="Бонус від Slotoking"
										desc="Вітальний пакет"
										value="125 000 ₴ + 500 FS"
										min_dep="Min. deposit: $30"
										wager="Wagering: 40x"
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
						<AText tag="div" :attributes="mainContainerTitle.DC">News</AText>
						<LinkWithArrow link="/news" :attributes="newsLinkSettings.DC">
							Дивитись більше
						</LinkWithArrow>
					</div>
					<div class="news_container">
						<NewsMainCard
							link="/custom-link"
							src="/img/newsPrevyu.png"
							title="Casino Guru Awards returns for 2nd edition with nominations now underway"
							date="12.07.23"
							desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
						/>
						<NewsMainCard
							link="/custom-link"
							src="/img/newsPrevyu.png"
							title="Relax Gaming shares early details about Money Train 4"
							date="12.07.23"
							desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
						/>
						<NewsMainCard
							link="/custom-link"
							src="/img/newsPrevyu.png"
							title="Casino Guru Awards returns for 2nd edition with nominations now underway"
							date="12.07.23"
							desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
						/>
						<NewsMainCard
							link="/custom-link"
							src="/img/newsPrevyu.png"
							title="Casino Guru Awards returns for 2nd edition with nominations now underway"
							date="12.07.23"
							desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
						/>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="faq_container">
					<Faq :value="faq" />
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
import BonusSliderCard from '~/components/bonus_loop/cards/slider_card'
import NewsSliderCard from '~/components/news_loop/cards/slider_card'
import TwoContentContainer from '~/components/two_content_container/'
import CategoryFilter from '~/components/category_filter/dev'
import BonusAsideCard from '~/components/bonus_loop/cards/aside_card'
import LinkWithArrow from '~/components/ui/atoms/links/link_with_arrow'
import NewsMainCard from '~/components/news_loop/cards/main'
import CasinoLoop from '~/components/casino_loop/app_casino_loop_downloads.vue'
import Faq from '~/components/faq/app_faq'

export default {
	name: 'dev-main-page',
	components: {
		Slider,
		SliderContainer,
		AText,
		Footer,
		CasinoSliderCard,
		Header,
		SlotSliderCard,
		BonusSliderCard,
		NewsSliderCard,
		TwoContentContainer,
		CategoryFilter,
		BonusAsideCard,
		LinkWithArrow,
		NewsMainCard,
		CasinoLoop,
		Faq
	},
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
			},
			faq: [
				{
					value_1: '✅ Чи приймає Slotoking гравців з України?',
					value_2:
						'Так, приймає. Slotoking є одним з перших українських казино. Окрім гравців їхньої України, тут можуть грати жителі Європи та Азії.'
				},
				{
					value_1: '🎗 Чи можна грати у Слотокінг на гривні?',
					value_2: 'Так, гривня є основною ігровою валютою.'
				},
				{
					value_1: '🧨 Як пройти реєстрацію на сайті Slotoking?',
					value_2:
						'На головній сторінці сайту натиснути кнопку "Реєстрація". Для реєстрації можна використовувати профілі у соціальних мережах, мобільний номер або електронну пошту.'
				},
				{
					value_1: '❇️ Який мінімальний депозит у казино Кінг?',
					value_2: 'Мінімальний депозит – 50 гривень.'
				},
				{
					value_1: '🏆 Яка мінімальна сума виведення коштів у Slotoking?',
					value_2: 'Мінімальна сума для виведення – 50 гривень.'
				},
				{
					value_1: '⭐ Чи є бонусна програма в Слотокінг?',
					value_2: 'Є вітальний пакет, а також фріспіни за реєстрацію в онлайн казино.'
				},
				{
					value_1: '💯 Які платіжні методи є в Slotoking?',
					value_2:
						'Казино Кінг приймає депозити за допомогою платіжних карток, банківських переказів та інших електронних валют. Детальнішу інформацію можна знайти на сторінці "Методи оплати".'
				}
			]
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
.faq_container {
	max-width: 820px;
	padding-top: 30px;
	padding-bottom: 30px;
}
</style>
