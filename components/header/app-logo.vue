<template>
	<div class="header_logo">
		<ALink href="/">
			<AImg :attributes="imgSettings.DC" src="/img/logo_footer.png" />
		</ALink>
	</div>
</template>
<script>
import ALink from '~/components/ui/atoms/links'
import AImg from '~/components/ui/atoms/img'
export default {
	name: 'logo',
	components: { ALink, AImg },
	data() {
		return {
			options: null,
			imgSettings: {
				DC: { width: '160px', height: '36px' },
				TABLET: {},
				MOB: {}
			}
		}
	}
}
</script>

<style lang="scss"></style>
