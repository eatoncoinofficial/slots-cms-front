<template>
	<img v-bind="attributes" :src="src" loading="lazy"  @click="onClick" />
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
			default() {
				return {}
			},
			type: Object
		},
		src: {
			default: '/img/noImages.png',
			type: String
		}
	},
	methods: {
		onClick() {
			this.$emit('onClick')
		}
	},
}
</script>
<style scoped></style>
