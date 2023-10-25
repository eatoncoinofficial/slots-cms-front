<template>
	<div>
		<Header />
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
									<AText tag="h1" :attributes="titleCharactersSettings.DC">Характеристики казино</AText>
									<CasinoDetails />
								</div>
							</div>
						</template>
						<template v-slot:right>
							<aside class="aside">
								<AText tag="div" :attributes="asideContainerTitle.DC">Рекомендовані бонуси</AText>
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
		</main>
		<Footer />
	</div>
</template>

<script>
import AText from '~/components/ui/atoms/text'
import Footer from '~/components/footer/dev'
import Header from '~/components/header/dev'
import TwoContentContainer from '~/components/two_content_container/'
import BonusAsideCard from '~/components/bonus_loop/cards/aside_card'
import CasinoCard from '~/components/casino_card'
import CasinoDetails from '~/components/casino_detail'

export default {
	name: 'casino_single',
	components: {
		AText,
		Footer,
		Header,
		BonusAsideCard,
		TwoContentContainer,
		CasinoCard,
		CasinoDetails
	},
	layout: 'dev',
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
	background: url('/img/casino_bg.png') top center var(--colombo);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.title {
	font-size: 32px;
}
.aside {
	padding-top: var(--s);
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
.casino_characters_container {
	border: 1px solid rgba(255, 255, 255, 0.15);
	background: rgba(27, 24, 49, 1);
	margin-top: 40px;
	border-radius: 20px;
	padding: 32px 22px;
}
.left_wrapper {
	max-width: 820px;
}
</style>
