<template>
	<div>
		<div class="slot_loop">
			<GameMainCard v-for="(item, index) in currentPosts" :key="index" :link="item.permalink" :src="item.thumbnail" />
		</div>
		<div class="items-more" v-if="hideBtnShowMore">
			<div class="btn_wrapper">
				<AButton @onClick="postShowMore" :attributes="btnSettings">
					{{ t('SHOW_MORE') }} <AImg :attributes="arrowSettings" src="/img/arrowGreen.svg" />
				</AButton>
			</div>
		</div>
	</div>
</template>

<script>
import { GAME as NumberPostOnQuery } from '~/config/postLoader'
import translateMixin from '~/mixins/translate'
import GameMainCard from '~/components/slot_loop/cards/main'
import AButton from '~/components/ui/atoms/buttons'
import AImg from '~/components/ui/atoms/img/'
import postLoader from '~/mixins/postLoader'
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
	mixins: [translateMixin, postLoader],
	data() {
		return {
			numberPostOnQuery: NumberPostOnQuery,
			btnSettings: {
				color: 'cairo', class: 'load_more', weight: 'bold', size: 'medium'
			},
			arrowSettings: {
				width: '18px', height: '18px', class: 'arrow'
			}
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
@media (max-width: 767px) {
	.slot_loop {
		justify-content: space-between;
		padding-bottom: 20px;
	}
}
</style>
