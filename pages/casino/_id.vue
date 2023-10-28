<template>
	<div>
		<main class="casino_page">
			<div class="container">
				<AText tag="h1" :attributes="titleSettings.DC">Огляд онлайн казино Slotoking</AText>
				<div class="main_container">
					<TwoContentContainer>
						<template v-slot:left>
							<div class="left_wrapper">
								<div class="casino_card_container">
									<CasinoCard />
								</div>
								<div class="casino_characters_container">
									<AText tag="div" :attributes="titleCharactersSettings.DC">{{ t('CASINO_CHARACTERS') }}</AText>
									<CasinoDetails />
								</div>
								<div class="casino_slot_container">
									<AText tag="div" :attributes="titleSlotsSettings.DC">{{ t('BEST_GAMES_IN_CASINO') }} Slotoking</AText>
									<div class="slot_loop">
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
										<GameMainCard link="/dev/game-1" src="/img/gape_card.png" size="middle" />
									</div>
								</div>
							</div>
						</template>
						<template v-slot:right>
							<aside class="aside">
								<AText tag="div" :attributes="asideContainerTitle.DC">{{ t('RECOMMENDED_BONUSES') }}</AText>
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
			<section class="content_wrapper">
				<div class="container">
					<TabContent />
				</div>
			</section>
		</main>
	</div>
</template>

<script>
import AText from '~/components/ui/atoms/text'
import TwoContentContainer from '~/components/two_content_container/'
import BonusAsideCard from '~/components/bonus_loop/cards/aside_card'
import CasinoCard from '~/components/casino_card'
import CasinoDetails from '~/components/casino_detail'
import GameMainCard from '~/components/slot_loop/cards/main'
import TabContent from '~/components/content/tab_content'
import translateMixin from '~/mixins/translate'

export default {
	name: 'casino_single',
	mixins: [translateMixin],
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
	margin-top: var(--s);
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
