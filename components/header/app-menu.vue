<template>
	<div class="header_menu">
		<nav class="header_menu_container">
			<div class="header_menu_item" :data-active="activeLink('/')">
				<ALink href="/" :attributes="linkSettings">ОНЛАЙН-КАЗИНО</ALink>
			</div>
			<div class="header_menu_item">
				<ALink href="/games" :attributes="linkSettings">Ігри</ALink>
			</div>
			<div class="header_menu_item">
				<ALink href="/bonuses" :attributes="linkSettings">БОНУСИ</ALink>
			</div>
			<div class="header_menu_item">
				<ALink href="/news" :attributes="linkSettings">NEWS</ALink>
			</div>
		</nav>
	</div>
</template>
<script>
import ALink from '~/components/ui/atoms/links'
export default {
	name: 'app-menu',
	components: { ALink },
	data() {
		return {
			linkSettings: {
				color: 'cairo', text_transform: 'uppercase', weight: 'regular', size: 'small', decoration: 'none'
			}
		}
	},
	methods: {
		activeLink(link) {
			return link === this.$route.path
		}
	}
}
</script>

<style scoped lang="scss">
.header_menu_container {
	display: flex;
	gap: 20px;
	justify-content: center;
}
.header_menu_item {
	padding-bottom: 10px;
}
.header_menu_item:has(.nuxt-link-active) {
	border-bottom: 4px solid var(--calgary);
}
.header_menu_item:first-child:has(.nuxt-link-active) {
	border-bottom: none;
}
.header_menu_item[data-active='true'] {
	border-bottom: 4px solid var(--calgary) !important;
}
@media (max-width: 767px) {
	.header_menu_container {
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 20px;
	}
	.header_menu_item {
		width: 100%;
	}
}
</style>
