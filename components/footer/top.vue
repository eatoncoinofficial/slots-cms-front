<template>
	<div v-bind="containerSettings.DC">
		<div class="container top-container">
			<div class="left">
				<FooterLogo />
				<FooterMenu />
			</div>
			<div class="right">
				<FooterForm />
			</div>
		</div>
	</div>
</template>
<script>
import FooterMenu from './footer-menu'
import FooterLogo from './logo'
import FooterForm from './footer-form'
export default {
	name: 'dev-top-footer',
	components: { FooterMenu, FooterLogo, FooterForm },
	data: () => {
		return {
			containerSettings: {
				DC: {
					class: 'p_m'
				},
				TABLET: {},
				MOB: {}
			}
		}
	}
}
</script>
<style scoped>
.top-container {
	display: flex;
	border: 1px solid red;
}
.left {
	border: 1px solid blue;
}
</style>
