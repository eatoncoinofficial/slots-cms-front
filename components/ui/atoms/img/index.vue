<template>
	<img v-bind="attributes" :src="src" />
</template>
<script>
export default {
	name: 'AImg',
	data: () => {
		return {
			currentClasses: []
		}
	},
	props: {
		attributes: {
			default: {},
			type: Object
		},
		src: {
			default: '/img/noImages.png',
			type: String
		}
	},
	mounted() {}
}
</script>
<style scoped></style>
