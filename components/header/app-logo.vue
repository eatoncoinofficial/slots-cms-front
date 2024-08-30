<template>
	<div class="header_logo">
		<ALink href="/" title="Goes to Casquads main page">
			<AImg :attributes="{ ...imgSettings, alt: 'Casquads Logo' }" src="/img/logo.svg" />
		</ALink>
	</div>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'logo',
	mixins: [components],
	data() {
		return {
			options: null,
			imgSettings: {
				width: '160px',
				height: '36px'
			}
		}
	}
}
</script>

<style lang="scss"></style>
