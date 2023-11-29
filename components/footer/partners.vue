<template>
	<div class="container">
		<div class="partners">
			<AImg :attributes="{ ...imgSettings, width: '60px' }" src="/img/partners_logo_2.png" />
			<AImg :attributes="{ ...imgSettings, width: '60px' }" src="/img/partners_logo_2.png" />
			<AImg :attributes="{ ...imgSettings, width: '60px' }" src="/img/partners_logo_2.png" />
			<AImg :attributes="{ ...imgSettings, width: '60px' }" src="/img/partners_logo_2.png" />
			<AImg :attributes="{ ...imgSettings, width: '60px' }" src="/img/partners_logo_2.png" />
			<AImg :attributes="{ ...imgSettings, width: '60px' }" src="/img/partners_logo_2.png" />
		</div>
	</div>
</template>

<script>
import components from '~/mixins/components'
export default {
	name: 'app-partners',
    mixins: [components],
	data: () => {
		return {
			imgSettings: {
				height: '40px'
			}
		}
	}
}
</script>
<style scoped>
.partners {
	display: flex;
	gap: 20px;
	margin-bottom: var(--m);
}
@media (max-width: 767px) {
	.partners {
		flex-wrap: wrap;
	}
}
</style>
