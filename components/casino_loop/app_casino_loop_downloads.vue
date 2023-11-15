<template>
	<div>
		<div class="casino_loop">
			<CasinoMainCard
				v-for="item in currentPosts"
				:key="item.title"
				:link="item.permalink"
				:src="item.thumbnail"
				:bg="item.color"
				:title="item.title"
				:label="item.label"
				:advantages="item.advantages"
				:bonus_value="item.bonus_value"
				:wager="item.wager"
				:min_dep="item.min_dep"
				:vendors="item.vendors"
				:rating="item.rating"
			/>
		</div>
		<div class="items-more" v-if="hideBtnShowMore">
			<AButton @onClick="postShowMore" :attributes="btnSettings.DC">
				{{ t('SHOW_MORE') }} <AImg :attributes="arrowSettings.DC" src="/img/arrowGreen.svg" />
			</AButton>
		</div>
	</div>
</template>

<script>
import { CASINO as NumberPostOnQuery } from '~/config/postLoader'
import translateMixin from '~/mixins/translate'
import CasinoMainCard from '~/components/casino_loop/cards/main'
import AButton from '~/components/ui/atoms/buttons'
import AImg from '~/components/ui/atoms/img/'
import postLoader from '~/mixins/postLoader'
export default {
	name: 'casino_loop_downloads',
	components: { CasinoMainCard, AButton, AImg },
	props: {
		value: {
			type: Array,
			default() {
				return []
			}
		}
	},
	mixins: [translateMixin, postLoader],
	data() {
		return {
			numberPostOnQuery: NumberPostOnQuery,
			postCurrentPage: 1,
			btnSettings: {
				DC: { color: 'cairo', class: 'load_more', weight: 'bold', size: 'medium' },
				TABLET: {},
				MOB: {}
			},
			arrowSettings: {
				DC: { width: '18px', height: '18px', class: 'arrow' },
				TABLET: {},
				MOB: {}
			}
		}
	},
	methods: {
		test() {
			console.log('Good day')
		}
	}
}
</script>
<style scoped>
.casino_loop {
	display: flex;
	gap: var(--m);
	flex-wrap: wrap;
}
.items-more {
	width: 820px;
	height: 52px;
	margin-top: var(--l);
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
</style>
