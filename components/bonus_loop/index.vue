<template>
	<div>
		<div class="bonus_loop">
			<div class="bonus_item" v-for="item in currentPosts" :key="item.title">
				<BonusAsideCard
					:link="item.permalink"
					:src="item.thumbnail"
					:title="item.title"
					:desc="item.short_desc"
					:value="item.bonus"
					:min_dep="item.min_deposit"
					:wager="item.wagering"
					:refLinks="item.casino.ref"
				/>
			</div>
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
import { BONUS_CATEGORY as NumberPostOnQuery } from '~/config/postLoader'
import translate from '~/mixins/translate'
import BonusAsideCard from '~/components/bonus_loop/cards/aside_card'
import AButton from '~/components/ui/atoms/buttons'
import AImg from '~/components/ui/atoms/img/'
import postLoader from '~/mixins/postLoader'
export default {
	name: 'bonus_loop',
	components: { BonusAsideCard, AButton, AImg },
	props: {
		value: {
			type: Array,
			default() {
				return []
			}
		}
	},
	mixins: [translate, postLoader],
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
.bonus_loop {
	display: flex;
	flex-wrap: wrap;
}
.bonus_item {
	width: 33.3%;
	margin-bottom: 12px;
}
.bonus_item:nth-child(3n + 2) {
	display: flex;
	justify-content: center;
}
.bonus_item:nth-child(3n + 3) {
	display: flex;
	justify-content: flex-end;
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
	.bonus_item {
		width: 100%;
	}
	.items-more {
		width: 100%;
	}
}
</style>
