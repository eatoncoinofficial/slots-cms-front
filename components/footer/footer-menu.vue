<template>
	<div>
		<nav class="footer-nav">
			<div class="item">
				<ALink href="/" :attributes="textSettings">
					ОНЛАЙН-КАЗИНО
				</ALink>
			</div>
			<div class="item">
				<ALink href="/games" :attributes="textSettings">
					ІГРИ
				</ALink>
			</div>
			<div class="item">
				<ALink href="/bonuses" :attributes="textSettings">
					БОНУСИ
				</ALink>
			</div>
			<div class="item">
				<ALink href="/news" :attributes="textSettings">
					NEWS
				</ALink>
			</div>
		</nav>
	</div>
</template>

<script>
import ALink from '~/components/ui/atoms/links'
export default {
	name: 'footer-menu',
	components: { ALink },
	data: () => {
		return {
			textSettings: {
				weight: 'regular',
				color: 'cairo',
				size: 'small',
				decoration: 'none',
				text_transform: 'uppercase'
			}
		}
	}
}
</script>
<style scoped>
.footer-nav {
	display: flex;
	gap: 30px;
	margin-top: 65px;
}
@media (max-width: 767px) {
	.footer-nav {
		flex-wrap: wrap;
		margin-top: 30px;
		margin-bottom: 30px;
		gap: 15px;
	}
	.item {
		width: 100%;
	}
}
</style>
