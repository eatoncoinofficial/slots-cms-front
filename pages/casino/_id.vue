<template>
	<div>
		<main class="casino_page">
			<div class="container">
				<AText tag="h1" :attributes="titleSettings.DC">{{ data.body.h1 }}</AText>
				<div class="main_container">
					<TwoContentContainer>
						<template v-slot:left>
							<div class="left_wrapper">
								<div class="casino_card_container">
									<CasinoCard
										:src="data.body.thumbnail"
										:bonus_value="data.body.bonus_value"
										:title="data.body.title"
										:rating="data.body.rating"
										:bg="data.body.color"
										:label="data.body.label"
										:refLinks="data.body.ref"
									/>
								</div>
								<div class="casino_characters_container">
									<AText tag="div" :attributes="titleCharactersSettings.DC">{{ t('CASINO_CHARACTERS') }}</AText>
									<CasinoDetails
										:vendors="data.body.vendors"
										:payments="data.body.payments"
										:currencies="data.body.currencies"
										:languages="data.body.languages"
									/>
								</div>
								<div class="casino_slot_container" v-if="data.body.games.length">
									<AText tag="div" :attributes="titleSlotsSettings.DC"
										>{{ t('BEST_GAMES_IN_CASINO') }} {{ data.body.title }}</AText
									>
									<div class="slot_loop">
										<GameMainCard
											v-for="(item, index) in data.body.games"
											:key="index"
											:link="item.permalink"
											:src="item.thumbnail"
											size="middle"
										/>
									</div>
								</div>
							</div>
						</template>
						<template v-slot:right>
							<aside class="aside">
								<AText tag="div" :attributes="asideContainerTitle.DC">{{ t('RECOMMENDED_BONUSES') }}</AText>
								<div class="aside_bonus_container">
									<BonusAsideCard
										v-for="(item, index) in data.body.bonuses"
										:key="index"
										:src="item.thumbnail"
										:title="item.title"
										:desc="item.short_desc"
										:value="item.bonus"
										:min_dep="item.min_deposit"
										:wager="item.wagering"
										:refLinks="item.casino.ref"
									/>
								</div>
							</aside>
						</template>
					</TwoContentContainer>
				</div>
			</div>
			<section class="content_wrapper">
				<div class="container">
					<TabContent />
				</div>
			</section>
		</main>
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import AText from '~/components/ui/atoms/text'
import TwoContentContainer from '~/components/two_content_container/'
import BonusAsideCard from '~/components/bonus_loop/cards/aside_card'
import CasinoCard from '~/components/casino_card'
import CasinoDetails from '~/components/casino_detail'
import GameMainCard from '~/components/slot_loop/cards/main'
import TabContent from '~/components/content/tab_content'
import translateMixin from '~/mixins/translate'
import head from '~/mixins/head'
import helper from '~/helpers/helpers'

export default {
	name: 'casino_single',
	mixins: [translateMixin, head],
	components: {
		AText,
		BonusAsideCard,
		TwoContentContainer,
		CasinoCard,
		CasinoDetails,
		GameMainCard,
		TabContent
	},
	layout: 'default',
	data: () => {
		return {
			titleSettings: {
				DC: { color: 'cairo', weight: 'bold', class: 'title' },
				TABLE: {},
				MOB: {}
			},
			titleCharactersSettings: {
				DC: { color: 'cairo', weight: 'bold', size: 'x-large' },
				TABLE: {},
				MOB: {}
			},
			titleSlotsSettings: {
				DC: { color: 'cairo', weight: 'regular', class: 'slots_title' },
				TABLE: {},
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
			}
		}
	},
	async asyncData({ route, error }) {
		if (route.params.id) {
			const request = new DAL_Builder()
			const response = await request
				.postType('casino')
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
.casino_page {
	background: url('/img/casino_bg.png') top center rgba(16, 13, 36, 1);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.main_container {
	padding-bottom: 60px;
}
.title {
	font-size: 32px;
}
.aside {
	padding-top: 10px;
}
.aside_bonus_container {
	margin-top: 14px;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
}
.casino_card_container {
	margin-top: var(--l);
}
.casino_characters_container,
.casino_slot_container {
	border: 1px solid rgba(255, 255, 255, 0.15);
	background: rgba(27, 24, 49, 1);
	margin-top: 40px;
	border-radius: 20px;
	padding: 32px 22px;
}
.left_wrapper {
	max-width: 820px;
}
.slots_title {
	font-size: 22px;
}
.slot_loop {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
	margin-top: 24px;
	justify-content: space-between;
}
.content_wrapper {
	background: rgba(8, 5, 26, 1);
	padding: 60px 0px;
}
</style>
