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
	margin-bottom: var(--l);
}
.left {
	width: 57%;
}
.right {
	width: 43%;
}
@media (max-width: 767px) {
	.top-container {
		flex-wrap: wrap;
		padding-left: 5px;
		padding-right: 5px;
	}
	.left {
		width: 100%;
	}
	.right {
		width: 100%;
	}
}
</style>
