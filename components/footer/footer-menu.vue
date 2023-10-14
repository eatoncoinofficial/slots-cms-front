<template>
	<div>
		<nav class="footer-nav">
			<div class="item">
				<ALink href="/good-day" :attributes="textSettings.DC">
					Hello world 1
				</ALink>
			</div>
			<div class="item">
				<ALink href="/good-day" :attributes="textSettings.DC">
					Hello world 2
				</ALink>
			</div>
			<div class="item">
				<ALink href="/good-day" :attributes="textSettings.DC">
					Hello world 3
				</ALink>
			</div>
			<div class="item">
				<ALink href="/good-day" :attributes="textSettings.DC">
					Hello world 4
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
				DC: {
					weight: 'regular',
					color: 'cairo',
					size: 'small',
					decoration: 'none',
					text_transform: 'uppercase'
				},
				TABLET: {},
				MOB: {}
			}
		}
	}
}
</script>
<style scoped>
.footer-nav {
	display: flex;
	gap: 30px;
}
</style>
