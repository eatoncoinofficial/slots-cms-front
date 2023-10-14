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
import AImg from '~/components/ui/atoms/img'
export default {
	name: 'app-partners',
	components: { AImg },
	data: () => {
		return {
			imgSettings: {
				DC: { height: '40px', class: 'object_fit_cover custom_class' },
				TABLET: {},
				MOB: {}
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
</style>
