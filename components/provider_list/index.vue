<template>
	<div class="root">
		<div class="wrapper">
			<AText :attributes="btnSettings.DC" data-active="true">Все</AText>
			<ALink
				:href="item.permalink"
				:attributes="textSettings.DC"
				v-for="(item, index) in value"
				:key="index"
				:data-active="item.active"
			>
				<AImg :attributes="imgSettings.DC" :src="item.img" /> {{ item.title }}
			</ALink>
		</div>
	</div>
</template>

<script>
import ALink from '~/components/ui/atoms/links'
import AImg from '~/components/ui/atoms/img'
import AText from '~/components/ui/atoms/text'
export default {
	name: 'providers_filter',
	components: { ALink, AImg, AText },
	props: {
		value: {
			type: Array,
			default() {
				return [
					{ title: 'Netgame', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Triple Edge Studio', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Ainsworth Games', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Evolution', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Netgame', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Triple Edge Studio', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Ainsworth Games', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Evolution', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Netgame', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Triple Edge Studio', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Ainsworth Games', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Evolution', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Netgame', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Triple Edge Studio', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Ainsworth Games', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Evolution', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Netgame', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Triple Edge Studio', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Ainsworth Games', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Evolution', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Netgame', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Triple Edge Studio', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Ainsworth Games', permalink: '/provider/single', img: '/img/provider.png' },
					{ title: 'Evolution', permalink: '/provider/single', img: '/img/provider.png' }
				]
			}
		}
	},
	data() {
		return {
			textSettings: {
				DC: {
					class: 'item',
					color: 'cairo',
					size: 'small',
					weight: 'regular',
					decoration: 'none'
				},
				TABLE: {},
				MOB: {}
			},
			imgSettings: {
				DC: { width: '26px', height: '26px', class: 'logo' },
				TABLE: {},
				MOB: {}
			},
			btnSettings: {
				DC: {
					class: 'item_btn',
					color: 'cairo',
					size: 'small',
					weight: 'regular',
					decoration: 'none'
				},
				TABLE: {},
				MOB: {}
			}
		}
	}
}
</script>

<style scoped>
.wrapper {
	display: flex;
	gap: 6px;
	width: 4000px;
}
.item {
	display: flex;
	align-items: center;
	padding: 5px 15px;
	border-radius: var(--s);
	background: rgba(255, 255, 255, 0.1);
	white-space: nowrap;
	font-size: 10px;
}
.logo {
	display: block;
	margin-right: 5px;
}
.item_btn {
	width: 80px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--s);
}
[data-active='true'] {
	background: rgba(255, 255, 255, 0.27);
}
</style>
