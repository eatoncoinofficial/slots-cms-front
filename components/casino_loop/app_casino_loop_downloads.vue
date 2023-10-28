<template>
	<div>
		<div class="casino_loop">
			<CasinoMainCard
				bg="#D21037"
				src="/img/slotokingLogo.png"
				title="Slotoking"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
			<CasinoMainCard
				bg="#27076D"
				src="/img/slotokingLogo.png"
				title="Cosmolot"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
			<CasinoMainCard
				bg="#fff"
				src="/img/slotokingLogo.png"
				title="Slotoking"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
			<CasinoMainCard
				bg="#272525"
				src="/img/slotokingLogo.png"
				title="Slotoking"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
			<CasinoMainCard
				bg="#fff"
				src="/img/slotokingLogo.png"
				title="Slotoking"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
			<CasinoMainCard
				bg="#161616"
				src="/img/slotokingLogo.png"
				title="Slotoking"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
			<CasinoMainCard
				bg="#27076D"
				src="/img/slotokingLogo.png"
				title="Slotoking"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
			<CasinoMainCard
				bg="#27076D"
				src="/img/slotokingLogo.png"
				title="Slotoking"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
			<CasinoMainCard
				bg="#27076D"
				src="/img/slotokingLogo.png"
				title="Slotoking"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
			<CasinoMainCard
				bg="#27076D"
				src="/img/slotokingLogo.png"
				title="Slotoking"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
			<CasinoMainCard
				bg="#27076D"
				src="/img/slotokingLogo.png"
				title="Slotoking"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
			<CasinoMainCard
				bg="#27076D"
				src="/img/slotokingLogo.png"
				title="Slotoking"
				bonus_name="Вітальний пакет!"
				link="/casino/single"
				bonus_value="125 000 ₴ + 500 FS!"
			/>
		</div>
		<div class="items-more">
			<AButton @click="postShowMore" :attributes="btnSettings.DC">
				{{ t('SHOW_MORE') }} <AImg :attributes="arrowSettings.DC" src="/img/arrowGreen.svg" />
			</AButton>
		</div>
	</div>
</template>

<script>
import { CASINO as NumberPostOnQuery } from '~/config/postLoader'
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
import CasinoMainCard from '~/components/casino_loop/cards/main'
import AButton from '~/components/ui/atoms/buttons'
import AImg from '~/components/ui/atoms/img/'
export default {
	name: 'app_casino_loop_downloads',
	components: { CasinoMainCard, AButton, AImg },
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
