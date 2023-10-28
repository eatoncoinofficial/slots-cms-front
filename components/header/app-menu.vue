<template>
	<div class="header_menu">
		<nav class="header_menu_container">
			<div class="header_menu_item" data-active="true">
				<ALink href="/" :attributes="linkSettings.DC">ОНЛАЙН-КАЗИНО</ALink>
			</div>
			<div class="header_menu_item">
				<ALink href="/games" :attributes="linkSettings.DC">Ігри</ALink>
			</div>
			<div class="header_menu_item">
				<ALink href="/bonuses" :attributes="linkSettings.DC">БОНУСИ</ALink>
			</div>
			<div class="header_menu_item">
				<ALink href="/news" :attributes="linkSettings.DC">NEWS</ALink>
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
				DC: { color: 'cairo', text_transform: 'uppercase', weight: 'regular', size: 'small', decoration: 'none' },
				TABLET: {},
				MOB: {}
			}
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
[data-active='true'] {
	border-bottom: 4px solid var(--calgary);
}
</style>
