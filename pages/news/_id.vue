<template>
	<main class="news_page">
		<div class="container">
			<TwoContentContainer>
				<template v-slot:left>
					<AText tag="h1" :attributes="titleSettings.DC">{{ data.body.h1 }}</AText>
					<div class="wrapper_thumbnail">
						<AImg :attributes="thumbnailSettings.DC" :src="data.body.thumbnail" />
					</div>
					<div class="container content_container">
						<MainContent :value="data.body.content" />
					</div>
				</template>
				<template v-slot:right>
					<AText tag="div" :attributes="subTitleSettings.DC">{{ t('POPULAR_NEWS') }}</AText>
					<aside class="aside">
						<NewsSliderCard
							v-for="item in data.body.last_news"
							:key="item.title"
							:link="item.permalink"
							:src="item.thumbnail"
							:title="item.title"
							:desc="item.create_at.slice(0, 10)"
						/>
					</aside>
				</template>
			</TwoContentContainer>
		</div>
		<div class="news_loop">
			<div class="container">
				<div class="section_title_wrapper">
					<AText tag="div" :attributes="mainContainerTitle.DC">{{ t('LAST_NEWS') }}</AText>
				</div>
				<div class="news_container">
					<NewsMainCard
						v-for="item in data.body.posts"
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
	</main>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import AText from '~/components/ui/atoms/text'
import AImg from '~/components/ui/atoms/img/'
import TwoContentContainer from '~/components/two_content_container/'
import NewsSliderCard from '~/components/news_loop/cards/slider_card'
import LinkWithArrow from '~/components/ui/atoms/links/link_with_arrow'
import NewsMainCard from '~/components/news_loop/cards/main'
import translateMixin from '~/mixins/translate'
import MainContent from '~/components/content'
import head from '~/mixins/head'
import helper from '~/helpers/helpers'

export default {
	name: 'news_single',
	mixins: [head, translateMixin],
	components: {
		AText,
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
	},
	mixins: [head, translateMixin],
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('news')
				.url(route.params.id)
				.get()
			if (response.data.confirm === 'error') {
				error({ statusCode: 404, message: 'Post not found' })
			} else {
				const data = helper.headDataMixin(response.data, route)
				return { data }
			}
		} else {
			error({ statusCode: 404, message: 'Post not found' })
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
	margin-top: 60px;
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
