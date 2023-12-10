<template>
	<div>
		<main class="category_page">
			<div class="container">
				<AText tag="h1" :attributes="titleSettings">{{ data.body.h1 }}</AText>
				<BonusLoop :value="data.body.posts" />
			</div>
			<div class="container content_container">
				<Content :value="data.body.content" />
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
import pageTemplate from '~/mixins/pageTemplate'
import Faq from '~/components/faq'
import BonusLoop from '~/components/bonus_loop'

export default {
	name: 'bonus-category',
	data: () => {
		return {
			titleSettings: {
				color: 'cairo',
				size: 'x-large',
				weight: 'bold',
				transform: 'uppercase',
				class: 'title'
			}
		}
	},
	components: {
		Faq,
		BonusLoop
	},
	mixins: [pageTemplate],
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('bonuses')
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
	background: url('/img/casinoPageBg.jpg') top center var(--colombo);
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
</style>
