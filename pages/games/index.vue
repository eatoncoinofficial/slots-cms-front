<template>
	<div>
		<main class="games_page">
			<div class="container">
				<AText tag="h1" :attributes="titleSettings.DC">{{ data.body.h1 }}</AText>
			</div>
			<div class="container container_providers">
				<ProviderFilter />
			</div>
			<div class="container container_game_week">
				<div class="left">
					<GameBigCard link="/dev/game-1" src="/img/gape_card.png" />
				</div>
				<div class="right">
					<GameMainCard link="/game/single" src="/img/gape_card.png" />
					<GameMainCard link="/game/single" src="/img/gape_card.png" />
					<GameMainCard link="/game/single" src="/img/gape_card.png" />
					<GameMainCard link="/game/single" src="/img/gape_card.png" />
					<GameMainCard link="/game/single" src="/img/gape_card.png" />
					<GameMainCard link="/game/single" src="/img/gape_card.png" />
					<GameMainCard link="/game/single" src="/img/gape_card.png" />
					<GameMainCard link="/game/single" src="/img/gape_card.png" />
					<GameMainCard link="/game/single" src="/img/gape_card.png" />
					<GameMainCard link="/game/single" src="/img/gape_card.png" />
				</div>
			</div>
			<div class="container container_loop">
				<SlotLoop />
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
import GameMainCard from '~/components/slot_loop/cards/main'
import GameBigCard from '~/components/slot_loop/cards/big_card'
import SlotLoop from '~/components/slot_loop'
import ProviderFilter from '~/components/provider_list'
import MainContent from '~/components/content'
import DAL_Page from '~/DAL/static_pages'
import head from '~/mixins/head'
import helper from '~/helpers/helpers'

export default {
	name: 'games-page',
	mixins: [head],
	components: {
		AText,
		Faq,
		BonusCategory,
		GameMainCard,
		GameBigCard,
		SlotLoop,
		ProviderFilter,
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
</style>
