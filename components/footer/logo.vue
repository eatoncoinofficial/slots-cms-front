<template>
	<div class="footer-logo">
		<ALink href="/">
			<AImg :attributes="imgSettings.DC" src="/img/logo_footer.png" />
		</ALink>
		<div class="footer_social">
			<ALink href="/">
				<AImg :attributes="imgSocialSettings.DC" src="/img/social_1.png" />
			</ALink>
			<ALink href="/">
				<AImg :attributes="imgSocialSettings.DC" src="/img/social_2.png" />
			</ALink>
			<ALink href="/">
				<AImg :attributes="imgSocialSettings.DC" src="/img/social_3.png" />
			</ALink>
			<ALink href="/">
				<AImg :attributes="imgSocialSettings.DC" src="/img/social_4.png" />
			</ALink>
		</div>
	</div>
</template>

<script>
import ALink from '~/components/ui/atoms/links'
import AImg from '~/components/ui/atoms/img'
export default {
	name: 'footer-logo',
	components: { ALink, AImg },
	data() {
		return {
			imgSettings: {
				DC: { width: '160px', height: '36px' },
				TABLET: {},
				MOB: {}
			},
			imgSocialSettings: {
				DC: { width: '24px', height: '24px' },
				TABLET: {},
				MOB: {}
			}
		}
	}
}
</script>
<style scoped>
.footer-logo {
	display: flex;
	align-items: center;
}
.footer_social {
	display: flex;
	gap: 20px;
	justify-content: center;
	margin-left: 80px;
}
</style>
