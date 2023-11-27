<template>
	<div>
		<main class="games_page">
			<div class="container">
				<AText tag="h1" :attributes="titleSettings.DC">{{ data.body.h1 }}</AText>
			</div>
			<div class="container container_providers">
				<ProviderFilter :value="data.body.vendors" />
			</div>
			<div class="container container_game_week">
				<div class="left">
					<GameBigCard
						v-if="data.body.game_week.length"
						:link="data.body.game_week[0].permalink"
						:src="data.body.game_week[0].thumbnail"
					/>
				</div>
				<div class="right">
					<GameMainCard
						v-for="(item, index) in data.body.games_week_list"
						:key="index"
						:link="item.permalink"
						:src="item.thumbnail"
					/>
				</div>
			</div>
			<div class="container container_loop" v-if="data.body.games.length">
				<SlotLoop :value="data.body.games" />
			</div>
			<div class="container content_container" v-if="data.body.content">
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
import DAL_Page from '~/DAL/static_pages'
import pageTemplate from '~/mixins/pageTemplate'
import Faq from '~/components/faq'
import BonusCategory from '~/components/bonus_category'
import GameMainCard from '~/components/slot_loop/cards/main'
import GameBigCard from '~/components/slot_loop/cards/big_card'
import SlotLoop from '~/components/slot_loop'
import ProviderFilter from '~/components/provider_list'
import head from '~/mixins/head'
import helper from '~/helpers/helpers'

export default {
	name: 'games-page',
	mixins: [head, pageTemplate],
	components: {
		Faq,
		BonusCategory,
		GameMainCard,
		GameBigCard,
		SlotLoop,
		ProviderFilter
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
			url: 'games'
		}
		const response = await DAL_Page.getData(request)
		const data = helper.headDataMixin(response.data, route)
		return { data }
	}
}
</script>
<style scoped>
.games_page {
	background: url('/img/short_bg.png') top center var(--colombo);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.title {
	margin-bottom: var(--m);
}
.right {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
}
.container_game_week {
	display: flex;
	gap: 12px;
	padding-left: 0px;
	padding-right: 0px;
}
.container_loop {
	margin-top: 12px;
	padding-left: 0px;
	padding-right: 0px;
}
.container_providers {
	padding: var(--s) 0px 21px 0px;
	padding-left: 0px;
	padding-right: 0px;
}
@media (max-width: 767px) {
	.container_providers {
		padding-left: 15px;
		overflow-x: scroll;
	}
	.container_game_week {
		flex-wrap: wrap;
		padding-left: 15px;
		padding-right: 15px;
	}
	.left {
		width: 100%;
		margin-bottom: 20px;
		justify-content: center;
		display: flex;
	}
	.right {
		justify-content: space-between;
	}
	.container_loop {
		padding-left: 15px;
		padding-right: 15px;
	}
}
</style>
