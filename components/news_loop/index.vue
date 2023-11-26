<template>
	<div>
		<div class="news_loop">
			<NewsMainCard
				v-for="item in currentPosts"
				:key="item.title"
				:link="item.permalink"
				:src="item.thumbnail"
				:title="item.title"
				:date="item.create_at.slice(0, 10)"
				:desc="item.short_desc"
			/>
		</div>
		<div class="items-more" v-if="hideBtnShowMore">
			<div class="btn_wrapper">
				<AButton @onClick="postShowMore" :attributes="btnSettings.DC">
					{{ t('SHOW_MORE') }} <AImg :attributes="arrowSettings.DC" src="/img/arrowGreen.svg" />
				</AButton>
			</div>
		</div>
	</div>
</template>

<script>
import { NEWS as NumberPostOnQuery } from '~/config/postLoader'
import translateMixin from '~/mixins/translate'
import NewsMainCard from '~/components/news_loop/cards/main'
import AButton from '~/components/ui/atoms/buttons'
import AImg from '~/components/ui/atoms/img/'
import postLoader from '~/mixins/postLoader'
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
	mixins: [translateMixin, postLoader],
	data() {
		return {
			numberPostOnQuery: NumberPostOnQuery,
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
@media (max-width: 767px) {
	.news_loop {
		justify-content: center;
	}
}
</style>
