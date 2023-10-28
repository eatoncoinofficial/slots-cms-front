<template>
	<div>
		<div class="news_loop">
			<NewsMainCard
				link="/news/single"
				src="/img/newsPrevyu.png"
				title="Casino Guru Awards returns for 2nd edition with nominations now underway"
				date="12.07.23"
				desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
			/>
			<NewsMainCard
				link="/news/single"
				src="/img/newsPrevyu.png"
				title="Relax Gaming shares early details about Money Train 4"
				date="12.07.23"
				desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
			/>
			<NewsMainCard
				link="/news/single"
				src="/img/newsPrevyu.png"
				title="Casino Guru Awards returns for 2nd edition with nominations now underway"
				date="12.07.23"
				desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
			/>
			<NewsMainCard
				link="/news/single"
				src="/img/newsPrevyu.png"
				title="Casino Guru Awards returns for 2nd edition with nominations now underway"
				date="12.07.23"
				desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
			/>
			<NewsMainCard
				link="/news/single"
				src="/img/newsPrevyu.png"
				title="Casino Guru Awards returns for 2nd edition with nominations now underway"
				date="12.07.23"
				desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
			/>
			<NewsMainCard
				link="/news/single"
				src="/img/newsPrevyu.png"
				title="Relax Gaming shares early details about Money Train 4"
				date="12.07.23"
				desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
			/>
			<NewsMainCard
				link="/news/single"
				src="/img/newsPrevyu.png"
				title="Casino Guru Awards returns for 2nd edition with nominations now underway"
				date="12.07.23"
				desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
			/>
			<NewsMainCard
				link="/news/single"
				src="/img/newsPrevyu.png"
				title="Casino Guru Awards returns for 2nd edition with nominations now underway"
				date="12.07.23"
				desc="Casino Guru Awards returns for a 2nd edition with nominations for Casino Guru Awards 2024 now open."
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
import { NEWS as NumberPostOnQuery } from '~/config/postLoader'
import Helper from '~/helpers/helpers.js'
import translateMixin from '~/mixins/translate'
import NewsMainCard from '~/components/news_loop/cards/main'
import AButton from '~/components/ui/atoms/buttons'
import AImg from '~/components/ui/atoms/img/'
export default {
	name: 'news_loop',
	components: { NewsMainCard, AButton, AImg },
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
.news_loop {
	display: flex;
	gap: 40px var(--m);
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
