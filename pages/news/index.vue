<template>
	<div>
		<main class="news_page">
			<div class="container">
				<AText tag="div" :attributes="titleSettings.DC">{{ data.body.h1 }}</AText>
			</div>
			<div class="container">
				<NewsLoop :value="data.body.news" />
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
import AText from '~/components/ui/atoms/text'
import NewsLoop from '~/components/news_loop'
import Faq from '~/components/faq'
import DAL_Page from '~/DAL/static_pages'
import head from '~/mixins/head'
import helper from '~/helpers/helpers'
import MainContent from '~/components/content'

export default {
	name: 'news-page',
	mixins: [head],
	components: {
		AText,
		Faq,
		NewsLoop,
		MainContent
	},
	layout: 'default',
	data: () => {
		return {
			titleSettings: {
				DC: { color: 'cairo', size: 'x-large', weight: 'bold', transform: 'uppercase', class: 'title' },
				TABLE: {},
				MOB: {}
			}
		}
	},
	async asyncData({ store, route }) {
		const request = {
			url: 'news'
		}
		const response = await DAL_Page.getData(request)
		const data = helper.headDataMixin(response.data, route)
		return { data }
	}
}
</script>
<style scoped>
.news_page {
	background: url('/img/short_bg.png') top center rgba(16, 13, 36, 1);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.news_container {
	display: flex;
	justify-content: space-between;
	margin-top: var(--l);
}
.title {
	margin-bottom: var(--m);
}
</style>
