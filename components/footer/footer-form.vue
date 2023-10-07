<template>
	<div>
		<div class="form-wrapper">
			Footer Form
			<div class="btn_wrapper">
				<AButton :attributes="btnSettings.DC">Підписатися</AButton>
			</div>
		</div>
	</div>
</template>

<script>
import AButton from '~/components/ui/atoms/buttons'
export default {
	name: 'footer-form',
	components: { AButton },
	data: () => {
		return {
			btnSettings: {
				DC: { bg: 'calgary', color: 'cochin', borderRadius: 's', weight: 'semi-bold' },
				TABLET: {},
				MOB: {}
			}
		}
	}
}
</script>
<style scoped>
.btn_wrapper {
	width: 168px;
	height: 40px;
}
</style>
