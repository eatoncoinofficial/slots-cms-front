<template>
	<div class="root">
		<AText tag="div" :attributes="titleSettings.DC">{{ t('RECOMMENDED_BONUSES') }}</AText>
		<div class="bonus_loop">
			<BonusAsideCard
				link="/bonus-1"
				src="/img/gamePrevyu.png"
				title="Бонус від Slotoking"
				desc="Вітальний пакет"
				value="125 000 ₴ + 500 FS"
				min_dep="$30"
				wager="40x"
			/>
			<BonusAsideCard
				link="/bonus-1"
				src="/img/gamePrevyu.png"
				title="Бонус від Slotoking"
				desc="Вітальний пакет"
				value="125 000 ₴ + 500 FS"
				min_dep="$30"
				wager="40x"
			/>
			<BonusAsideCard
				link="/bonus-1"
				src="/img/gamePrevyu.png"
				title="Бонус від Slotoking"
				desc="Вітальний пакет"
				value="125 000 ₴ + 500 FS"
				min_dep="$30"
				wager="40x"
			/>
		</div>
		<div class="items-more">
			<div class="btn_wrapper">
				<AButton @click="postShowMore" :attributes="btnSettings.DC">
					{{ t('SHOW_MORE') }} <AImg :attributes="arrowSettings.DC" src="/img/arrowGreen.svg" />
				</AButton>
			</div>
		</div>
	</div>
</template>
<script>
import AText from '~/components/ui/atoms/text'
import AButton from '~/components/ui/atoms/buttons'
import AImg from '~/components/ui/atoms/img/'
import BonusAsideCard from '~/components/bonus_loop/cards/aside_card'
import translateMixin from '~/mixins/translate'
import { BONUS_CATEGORY_SMALL as NumberPostOnQuery } from '~/config/postLoader'
export default {
	name: 'bonus_category',
	mixins: [translateMixin],
	components: {
		AText,
		AImg,
		AButton,
		BonusAsideCard
	},
	layout: 'dev',
	data: () => {
		return {
			titleSettings: {
				DC: { color: 'cairo', weight: 'bold', class: 'title' },
				TABLE: {},
				MOB: {}
			},
			btnSettings: {
				DC: { color: 'cairo', class: 'load_more', weight: 'bold', size: 'medium' },
				TABLET: {},
				MOB: {}
			},
			arrowSettings: {
				DC: { width: '18px', height: '18px', class: 'arrow' },
				TABLET: {},
				MOB: {}
			},
			numberPostOnQuery: NumberPostOnQuery,
			postCurrentPage: 1
		}
	},
	computed: {
		currentPosts() {
			return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
		}
	},
	filters: {
		classRating(item) {
			return Helper.classRating(item)
		}
	},
	methods: {
		refActivate(item) {
			Helper.refActivate(item)
		},
		postShowMore() {
			this.postCurrentPage += 1
		}
	}
}
</script>
<style scoped>
.root {
	margin-bottom: 40px;
}
.bonus_loop {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
}
.items-more {
	display: flex;
	justify-content: center;
	margin-top: var(--l);
	height: 52px;
	width: 356px;
}
.btn_wrapper {
	max-width: 272px;
	width: 272px;
}
.load_more {
	background: rgba(255, 255, 255, 0.1);
	border-radius: var(--s);
	border: rgba(255, 255, 255, 0.05);
}
.arrow {
	transform: rotate(90deg);
	margin-left: 10px;
}
.title {
	font-size: 18px;
	margin-bottom: var(--m);
}
</style>
