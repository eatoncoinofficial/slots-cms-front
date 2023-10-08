<template>
	<div class="root">
		<div class="wrapper">
			<ALink
				:href="item.permalink"
				:attributes="textSettings.DC"
				v-for="(item, index) in value"
				:key="index"
				:data-active="item.active"
				>{{ item.title }}</ALink
			>
		</div>
	</div>
</template>

<script>
import ALink from '~/components/ui/atoms/links'
export default {
	name: 'dev-category-filter',
	components: { ALink },
	props: {
		value: {
			type: Array,
			default() {
				return [
					{ title: 'Popular', permalink: '/casinos/popular', active: true },
					{ title: 'New', permalink: '/casinos/new', active: false },
					{ title: 'Best', permalink: '/casinos/best', active: false },
					{ title: 'Trusted', permalink: '/casinos/trusted', active: false }
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
					text_transform: 'uppercase',
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
}
.item {
	display: inline-block;
	padding: 5px 15px;
	border-radius: var(--m);
	background: rgba(255, 255, 255, 0.1);
}
[data-active='true'] {
	background: rgba(255, 255, 255, 0.27);
}
</style>
