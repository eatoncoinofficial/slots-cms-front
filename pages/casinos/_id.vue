<template>
	<div>
		<main class="category_page">
			<div class="container">
				<AText tag="h1" :attributes="titleSettings.DC">{{ data.body.h1 }}</AText>
				<div class="main_container">
					<TwoContentContainer>
						<template v-slot:left>
							<div class="category_filter_wrapper">
								<CategoryFilter :value="data.body.casino_category" />
							</div>
							<CasinoLoop :value="data.body.posts" />
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
			<div class="container content_container" v-if="data.body.content">
				<MainContent :value="data.body.content" />
			</div>
			<div class="container" v-if="data.body.faq.length">
				<div class="faq_container">
					<Faq :value="data.body.faq" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import helper from '~/helpers/helpers'
import head from '~/mixins/head'
import pageTemplate from '~/mixins/pageTemplate'
import TwoContentContainer from '~/components/two_content_container/'
import CategoryFilter from '~/components/category_filter/dev'
import BonusAsideCard from '~/components/bonus_loop/cards/aside_card'
import Faq from '~/components/faq/app_faq'
import CasinoLoop from '~/components/casino_loop/app_casino_loop_downloads.vue'
import MainContent from '~/components/content'
import AText from '~/components/ui/atoms/text'

export default {
	name: 'casino-category',
	data: () => {
		return {
			asideContainerTitle: {
				DC: {
					weight: 'bold',
					color: 'cairo',
					size: 'large'
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
			titleSettings: {
				DC: { color: 'cairo', size: 'x-large', weight: 'bold', transform: 'uppercase', class: 'title' },
				TABLE: {},
				MOB: {}
			}
		}
	},
	components: {
		TwoContentContainer,
		BonusAsideCard,
		Faq,
		MainContent,
		CasinoLoop,
		CategoryFilter,
		AText
	},
	mixins: [head, pageTemplate],
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('casinos')
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
.category_page {
	background: url('/img/short_bg.png') top center var(--colombo);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.title {
	margin-bottom: var(--m);
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
</style>
