<template>
	<div>
		<main class="news_page">
			<div class="container">
				<TwoContentContainer>
					<template v-slot:left>
						<AText tag="h1" :attributes="titleSettings.DC">Gaming corps address to supply games for Stb</AText>
						<div class="wrapper_thumbnail">
							<AImg :attributes="thumbnailSettings.DC" src="/img/thumbnail_news.png" />
						</div>
					</template>
					<template v-slot:right>
						<AText tag="div" :attributes="subTitleSettings.DC">{{ t('POPULAR_NEWS') }}</AText>
						<aside class="aside">
							<NewsSliderCard
								link="/news/single"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news/single"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news/single"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news/single"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
							<NewsSliderCard
								link="/news/single"
								src="/img/gamePrevyu.png"
								title="Gaming Corps agrees to power Pin-UP Casino with games"
								desc="12.07.23"
							/>
						</aside>
					</template>
				</TwoContentContainer>
			</div>
			<div class="container content_container">
				<MainContent :value="data.body.content" />
			</div>
			<div class="news_loop">
				<div class="container">
					<div class="section_title_wrapper">
						<AText tag="div" :attributes="mainContainerTitle.DC">{{ t('LAST_NEWS') }}</AText>
					</div>
					<div class="news_container">
						<NewsMainCard
							link="/news/single"
							src="/img/newsPrevyu.png"
							title="Casino Guru Awards returns for 2nd edition with nominations now underway"
							date="12.07.23"
							desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
						/>
						<NewsMainCard
							link="/news/single"
							src="/img/newsPrevyu.png"
							title="Relax Gaming shares early details about Money Train 4"
							date="12.07.23"
							desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
						/>
						<NewsMainCard
							link="/news/single"
							src="/img/newsPrevyu.png"
							title="Casino Guru Awards returns for 2nd edition with nominations now underway"
							date="12.07.23"
							desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
						/>
						<NewsMainCard
							link="/news/single"
							src="/img/newsPrevyu.png"
							title="Casino Guru Awards returns for 2nd edition with nominations now underway"
							date="12.07.23"
							desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
						/>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import AText from '~/components/ui/atoms/text'
import AImg from '~/components/ui/atoms/img/'
import Footer from '~/components/footer/dev'
import Header from '~/components/header/dev'
import TwoContentContainer from '~/components/two_content_container/'
import NewsSliderCard from '~/components/news_loop/cards/slider_card'
import LinkWithArrow from '~/components/ui/atoms/links/link_with_arrow'
import NewsMainCard from '~/components/news_loop/cards/main'
import translateMixin from '~/mixins/translate'
import MainContent from '~/components/content'

export default {
	name: 'news_single',
	mixins: [translateMixin],
	components: {
		AText,
		Footer,
		Header,
		TwoContentContainer,
		NewsSliderCard,
		AImg,
		LinkWithArrow,
		NewsMainCard,
		MainContent
	},
	layout: 'default',
	data: () => {
		return {
			titleSettings: {
				DC: { color: 'cairo', size: 'x-large', weight: 'bold', class: 'title' },
				TABLE: {},
				MOB: {}
			},
			subTitleSettings: {
				DC: { color: 'cairo', size: 'large', weight: 'bold', class: 'sub_title' },
				TABLE: {},
				MOB: {}
			},
			thumbnailSettings: {
				DC: { width: '822px', height: '333px', class: 'thumbnail' },
				TABLE: {},
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
			}
		}
	}
}
</script>
<style scoped>
.news_page {
	background: url('/img/short_bg.png') top center var(--colombo);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.title {
	margin-bottom: 32px;
}
.sub_title {
	margin-bottom: 16px;
}
.thumbnail {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.wrapper_thumbnail {
	width: 822px;
	height: 333px;
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
