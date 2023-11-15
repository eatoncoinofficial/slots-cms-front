<template>
	<div>
		<main class="bonuses_page">
			<div class="container">
				<AText tag="div" :attributes="titleSettings.DC">{{ data.body.h1 }}</AText>
			</div>
			<div class="container">
				<div class="bonus_category_container">
					<div class="bonus_category_item" v-for="(item, index) in data.body.bonus_category" :key="index">
						<BonusCategory :title="item.title" :link="item.permalink" :posts="item.posts" />
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
import AText from '~/components/ui/atoms/text'
import Faq from '~/components/faq/app_faq'
import BonusCategory from '~/components/bonus_category'
import MainContent from '~/components/content'
import DAL_Page from '~/DAL/static_pages'
import head from '~/mixins/head'
import helper from '~/helpers/helpers'

export default {
	name: 'bonuses-page',
	mixins: [head],
	components: {
		AText,
		Faq,
		BonusCategory,
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
			url: 'bonuses'
		}
		const response = await DAL_Page.getData(request)
		const data = helper.headDataMixin(response.data, route)
		return { data }
	}
}
</script>
<style scoped>
.bonuses_page {
	background: url('/img/short_bg.png') top center var(--colombo);
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
.bonus_category_container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.bonus_category_item {
	width: 32%;
}
</style>
