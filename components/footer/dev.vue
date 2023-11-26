<template>
	<footer class="footer">
		<FooterTop />
		<FooterPartners />
		<FooterDescription />
		<FooterText />
	</footer>
</template>
<script>
import FooterDescription from './footer-description'
import FooterText from './footer-text'
import FooterPartners from './partners'
import FooterTop from './top'
export default {
	name: 'dev-footer',
	components: { FooterText, FooterDescription, FooterPartners, FooterTop }
}
</script>
<style scoped>
.footer {
	padding-top: 45px;
	background: var(--cucuta);
}
@media (max-width: 767px) {
	.footer {
		padding-top: 15px;
	}
}
</style>
