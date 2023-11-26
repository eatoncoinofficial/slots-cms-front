<template>
	<div class="root">
		<AText tag="div" :attributes="titleSettings.DC">{{ title }}</AText>
		<div class="bonus_loop">
			<BonusAsideCard
				v-for="(item, index) in posts"
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
		<div class="items-more">
			<div class="btn_wrapper">
				<ALink :attributes="btnSettings.DC" :href="link">
					{{ t('SHOW_MORE') }} <AImg :attributes="arrowSettings.DC" src="/img/arrowGreen.svg" />
				</ALink>
			</div>
		</div>
	</div>
</template>
<script>
import AText from '~/components/ui/atoms/text'
import AButton from '~/components/ui/atoms/buttons'
import AImg from '~/components/ui/atoms/img/'
import ALink from '~/components/ui/atoms/links'
import BonusAsideCard from '~/components/bonus_loop/cards/aside_card'
import translateMixin from '~/mixins/translate'
export default {
	name: 'bonus_category',
	mixins: [translateMixin],
	props: {
		title: {
			type: String,
			default() {
				return ''
			}
		},
		link: {
			type: String,
			default() {
				return ''
			}
		},
		posts: {
			type: Array,
			default() {
				return []
			}
		}
	},
	components: {
		AText,
		AImg,
		AButton,
		BonusAsideCard,
		ALink
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
				DC: { color: 'cairo', class: 'load_more', weight: 'bold', size: 'medium', decoration: 'none' },
				TABLET: {},
				MOB: {}
			},
			arrowSettings: {
				DC: { width: '18px', height: '18px', class: 'arrow' },
				TABLET: {},
				MOB: {}
			}
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
	max-width: 100%;
}
.btn_wrapper {
	max-width: 272px;
	width: 272px;
}
.arrow {
	transform: rotate(90deg);
	margin-left: 10px;
}
.title {
	font-size: 18px;
	margin-bottom: var(--m);
}
@media (max-width: 767px) {
	.items-more {
		width: 100%;
	}
}
</style>
