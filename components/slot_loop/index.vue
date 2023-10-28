<template>
	<div>
		<div class="slot_loop">
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
			<GameMainCard link="/game/single" src="/img/gape_card.png" />
			<GameMainCard link="/game/single" src="/img/gape_card.png" />
			<GameMainCard link="/game/single" src="/img/gape_card.png" />
			<GameMainCard link="/game/single" src="/img/gape_card.png" />
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
import { GAME as NumberPostOnQuery } from '~/config/postLoader'
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
import GameMainCard from '~/components/slot_loop/cards/main'
import AButton from '~/components/ui/atoms/buttons'
import AImg from '~/components/ui/atoms/img/'
export default {
	name: 'slot_loop',
	components: { GameMainCard, AButton, AImg },
	props: {
		value: {
			type: Array,
			default() {
				return []
			}
		}
	},
	mixins: [translateMixin],
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
.slot_loop {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
}
.items-more {
	display: flex;
	justify-content: center;
	margin-top: var(--l);
	height: 52px;
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
</style>
